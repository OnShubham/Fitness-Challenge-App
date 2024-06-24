# app/__init__.py
from flask import Flask
from config import ApplicationConfig
from app.model import db
from flask_cors import CORS
from flask_jwt_extended import JWTManager

def create_app():
    app = Flask(__name__)
    CORS(app, supports_credentials=True)
    app.config.from_object(ApplicationConfig)
    app.config['JWT_SECRET_KEY'] = 'your_jwt_secret_key' 
    db.init_app(app)
    
    jwt = JWTManager(app)


    with app.app_context():
        db.create_all()

    return app
