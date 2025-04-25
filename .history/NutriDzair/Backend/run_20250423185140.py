# from app import create_app

# app = create_app()

# if __name__ == '__main__':
#     app.run(debug=True)


from flask import Flask
from app.routes.output_routes import output_bp

app = Flask(__name__)
app.register_blueprint(output_bp, url_prefix='/api')

if __name__ == '__main__':
    app.run(debug=True)
