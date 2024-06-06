# app/routes/auth.py
from flask import Blueprint, jsonify, request
from app.model import db, User
import bcrypt

auth = Blueprint('auth', __name__)


@auth.route('/')
def o():
    return "Server is Running"


@auth.route('/register', methods=['POST'])
def register():
    data = request.get_json()

    username = data.get('username')
    email = data.get('email')
    password = data.get('password')

    if not username or not email or not password:
        return jsonify({'error': 'Missing required parameters'}), 400

    if User.query.filter_by(email=email).first() is not None:
        return jsonify({'error': 'Email address already in use'}), 400

    hashed_password = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())

    new_user = User(username=username, email=email,
                    password=hashed_password.decode('utf-8'))
    db.session.add(new_user)
    db.session.commit()

    return jsonify({'message': 'User registered successfully'}), 201
