from app import create_app
from app.Routes.auth import auth
from flask_cors import CORS


app = create_app()

# Detailed CORS configuration
CORS(app, supports_credentials=True)


app.register_blueprint(auth, url_prefix='/')

if __name__ == '__main__':
    app.run(debug=True, port=5000)
