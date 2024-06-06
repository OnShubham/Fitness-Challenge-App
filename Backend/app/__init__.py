# app/__init__.py
from flask import Flask
from config import ApplicationConfig
from app.model import db

def create_app():
    app = Flask(__name__)
    app.config.from_object(ApplicationConfig)
    db.init_app(app)

    with app.app_context():
        db.create_all()

    return app
