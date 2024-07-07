from app import create_app
from flask_cors import CORS

app = create_app()

# Detailed CORS configuration
CORS(app, supports_credentials=True)

if __name__ == "__main__":
    app.run()
