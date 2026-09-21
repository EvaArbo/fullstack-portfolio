import os

from dotenv import load_dotenv
from flask import Flask, jsonify, request
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from sqlalchemy import text


# -------------------------
# ENVIRONMENT VARIABLES
# -------------------------

load_dotenv()


# -------------------------
# FLASK APP
# -------------------------

app = Flask(__name__)


database_url = os.getenv("DATABASE_URL")

if not database_url:
    raise RuntimeError(
        "DATABASE_URL was not found. Check your backend/.env file."
    )


# -------------------------
# DATABASE CONFIGURATION
# -------------------------

app.config["SQLALCHEMY_DATABASE_URI"] = database_url

app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False


db = SQLAlchemy(app)

migrate = Migrate(app, db)


# -------------------------
# CORS
# -------------------------

CORS(
    app,
    origins=[
        "http://localhost:5173",
    ],
)


# -------------------------
# DATABASE MODEL
# -------------------------

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


# -------------------------
# FLASK HEALTH CHECK
# -------------------------

@app.get("/api/health")
def health():
    return jsonify({
        "status": "ok",
        "message": "Flask backend is running",
    })


# -------------------------
# DATABASE HEALTH CHECK
# -------------------------

@app.get("/api/db-health")
def db_health():
    try:
        db.session.execute(
            text("SELECT 1")
        )

        return jsonify({
            "status": "ok",
            "message": "PostgreSQL connection is working",
        }), 200

    except Exception as error:
        print("Database error:")
        print(error)

        return jsonify({
            "status": "error",
            "message": "Could not connect to PostgreSQL",
        }), 500


# -------------------------
# CONTACT ROUTE
# -------------------------

@app.post("/api/contact")
def contact():
    data = request.get_json(
        silent=True
    )

    if not data:
        return jsonify({
            "status": "error",
            "message": "No form data was provided.",
        }), 400


    name = data.get(
        "name",
        "",
    ).strip()

    email = data.get(
        "email",
        "",
    ).strip()

    message = data.get(
        "message",
        "",
    ).strip()


    # -------------------------
    # VALIDATION
    # -------------------------

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


    if "@" not in email:
        return jsonify({
            "status": "error",
            "message": "Please provide a valid email address.",
        }), 400


    if not message:
        return jsonify({
            "status": "error",
            "message": "Message is required.",
        }), 400


    # -------------------------
    # CREATE DATABASE RECORD
    # -------------------------

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

        print(
            "Error saving contact message:"
        )

        print(error)

        return jsonify({
            "status": "error",
            "message": "Your message could not be saved. Please try again.",
        }), 500


    # -------------------------
    # SUCCESS RESPONSE
    # -------------------------

    return jsonify({
        "status": "success",
        "message": "Your message was saved successfully!",
    }), 201


# -------------------------
# RUN APPLICATION
# -------------------------

if __name__ == "__main__":
    app.run(
        debug=True,
        port=5000,
    )