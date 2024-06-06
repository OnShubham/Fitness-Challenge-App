# run.py
from app import create_app
from app.Routes.auth import auth

app = create_app()
app.register_blueprint(auth, url_prefix='/')

if __name__ == '__main__':
    app.run(debug=True, port=5000)
