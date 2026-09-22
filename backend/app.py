import os
from html import escape

import resend

from dotenv import load_dotenv
from email_validator import EmailNotValidError, validate_email
from flask import Flask, jsonify, request
from flask_cors import CORS
from flask_limiter import Limiter
from flask_migrate import Migrate
from flask_sqlalchemy import SQLAlchemy


load_dotenv()


database_url = os.getenv(
    "DATABASE_URL"
)

resend_api_key = os.getenv(
    "RESEND_API_KEY"
)

contact_receiver_email = os.getenv(
    "CONTACT_RECEIVER_EMAIL"
)

frontend_url = os.getenv(
    "FRONTEND_URL"
)

resend_from_email = os.getenv(
    "RESEND_FROM_EMAIL",
    "Portfolio <onboarding@resend.dev>",
)


if not database_url:
    raise RuntimeError(
        "DATABASE_URL was not found. "
        "Check your backend/.env file."
    )


if not resend_api_key:
    raise RuntimeError(
        "RESEND_API_KEY was not found. "
        "Check your backend/.env file."
    )


if not contact_receiver_email:
    raise RuntimeError(
        "CONTACT_RECEIVER_EMAIL was not found. "
        "Check your backend/.env file."
    )


resend.api_key = resend_api_key


app = Flask(__name__)


app.config["MAX_CONTENT_LENGTH"] = 16 * 1024

app.config["SQLALCHEMY_DATABASE_URI"] = database_url

app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

app.config["SQLALCHEMY_ENGINE_OPTIONS"] = {
    "pool_pre_ping": True,
}


db = SQLAlchemy(app)

migrate = Migrate(app, db)

# X-Forwarded-For contains the original visitor IP.

def get_client_ip():
    forwarded_for = request.headers.get(
        "X-Forwarded-For"
    )

    if forwarded_for:
        return forwarded_for.split(",")[0].strip()

    return request.remote_addr or "unknown"


# Flask-Limiter keeps track of how many requests
# each visitor sends.

limiter = Limiter(
    key_func=get_client_ip,
    app=app,
    storage_uri="memory://",
)


allowed_origins = [
    "http://localhost:5173",
]


if frontend_url:
    allowed_origins.append(
        frontend_url.rstrip("/")
    )


CORS(
    app,
    origins=allowed_origins,
)


class ContactMessage(db.Model):
    __tablename__ = "contact_messages"

    id = db.Column(
        db.Integer,
        primary_key=True,
    )

    name = db.Column(
        db.String(120),
        nullable=False,
    )

    email = db.Column(
        db.String(255),
        nullable=False,
    )

    message = db.Column(
        db.Text,
        nullable=False,
    )

    created_at = db.Column(
        db.DateTime(timezone=True),
        server_default=db.func.now(),
        nullable=False,
    )


@app.get("/api/health")
def health():
    return jsonify({
        "status": "ok",
        "message": "Flask backend is running",
    }), 200


# Flask-Limiter normally returns its own 429 response.
#
# Our React frontend expects JSON, so we return
# a JSON response instead.
@app.errorhandler(429)
def rate_limit_exceeded(error):
    return jsonify({
        "status": "error",
        "message": (
            "Too many messages were sent. "
            "Please wait a little while and try again."
        ),
    }), 429


@app.post("/api/contact")
@limiter.limit(
    "5 per minute; 20 per hour",
    methods=["POST"],
)
def contact():
    data = request.get_json(
        silent=True
    )


    if not isinstance(data, dict):
        return jsonify({
            "status": "error",
            "message": "Invalid form data.",
        }), 400


    name = str(
        data.get(
            "name",
            "",
        )
    ).strip()


    email = str(
        data.get(
            "email",
            "",
        )
    ).strip()


    message = str(
        data.get(
            "message",
            "",
        )
    ).strip()


    if not name:
        return jsonify({
            "status": "error",
            "message": "Name is required.",
        }), 400


    if not email:
        return jsonify({
            "status": "error",
            "message": "Email is required.",
        }), 400


    if not message:
        return jsonify({
            "status": "error",
            "message": "Message is required.",
        }), 400


    if len(name) > 120:
        return jsonify({
            "status": "error",
            "message": "Name is too long.",
        }), 400


    if len(email) > 255:
        return jsonify({
            "status": "error",
            "message": "Email is too long.",
        }), 400


    if len(message) > 5000:
        return jsonify({
            "status": "error",
            "message": "Message is too long.",
        }), 400


    try:
        validated_email = validate_email(
            email,
            check_deliverability=False,
        )

        email = validated_email.normalized

    except EmailNotValidError:
        return jsonify({
            "status": "error",
            "message": (
                "Please provide a valid "
                "email address."
            ),
        }), 400


    new_message = ContactMessage(
        name=name,
        email=email,
        message=message,
    )


    try:
        db.session.add(
            new_message
        )

        db.session.commit()

    except Exception as error:
        db.session.rollback()

        app.logger.exception(
            "Error saving contact message: %s",
            error,
        )

        return jsonify({
            "status": "error",
            "message": (
                "Your message could not be saved. "
                "Please try again."
            ),
        }), 500


    safe_name = escape(
        name
    )

    safe_email = escape(
        email
    )

    safe_message = escape(
        message
    ).replace(
        "\n",
        "<br>",
    )


    try:
        resend.Emails.send({
            "from": resend_from_email,

            "to": [
                contact_receiver_email,
            ],

            "reply_to": email,

            "subject": "New portfolio message",

            "html": f"""
                <h2>New Portfolio Message</h2>

                <p>
                    <strong>Name:</strong>
                    {safe_name}
                </p>

                <p>
                    <strong>Email:</strong>
                    {safe_email}
                </p>

                <p>
                    <strong>Message:</strong>
                </p>

                <p>
                    {safe_message}
                </p>
            """,
        })

    except Exception as error:
        app.logger.exception(
            "Contact message saved, "
            "but email notification failed: %s",
            error,
        )


    return jsonify({
        "status": "success",
        "message": (
            "Your message was received successfully!"
        ),
    }), 201


if __name__ == "__main__":
    app.run(
        port=int(
            os.getenv(
                "PORT",
                "5000",
            )
        ),

        debug=(
            os.getenv(
                "FLASK_DEBUG",
                "0",
            )
            == "1"
        ),
    )