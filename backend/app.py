from flask import Flask, jsonify, request
from flask_cors import CORS


app = Flask(__name__)


CORS(
    app,
    origins=[
        "http://localhost:5173",
    ],
)


@app.get("/api/health")
def health():
    return jsonify({
        "status": "ok",
        "message": "Flask backend is running",
    })


@app.post("/api/contact")
def contact():
    data = request.get_json()

    if not data:
        return jsonify({
            "status": "error",
            "message": "No form data was provided.",
        }), 400


    name = data.get("name", "").strip()
    email = data.get("email", "").strip()
    message = data.get("message", "").strip()


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


    print("New contact message:")
    print(f"Name: {name}")
    print(f"Email: {email}")
    print(f"Message: {message}")


    return jsonify({
        "status": "success",
        "message": "Your message reached the Flask backend successfully.",
    }), 200


if __name__ == "__main__":
    app.run(
        debug=True,
        port=5000,
    )