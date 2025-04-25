# from app import create_app

# app = create_app()

# if __name__ == '__main__':
#     app.run(debug=True)


# from flask import Flask
# from app.routes.output_routes import output_bp

# app = Flask(__name__)
# app.register_blueprint(output_bp, url_prefix='/api')

# if __name__ == '__main__':
#     app.run(debug=True)


from flask import Flask, request, jsonify
from flask_cors import CORS
from '././Projectalpha' import toy_test_search  # Assuming it's saved in Projectalpha.py

app = Flask(__name__)
CORS(app)

@app.route("/search", methods=["GET"])
def search():
    meal_type = request.args.get("type", "")
    results = toy_test_search(meal_type)
    return jsonify(results)

if __name__ == "__main__":
    app.run(debug=True)
