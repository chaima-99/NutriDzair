import sys
import os

sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..')))

from 'C:\Users\WINDOWS\Documents\RAHIM\ensia\2Y\s2\Intro to AI\project\'NutriDzair\Projectalpha.ipynb import toy_test_search
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/search", methods=["GET"])
def search():
    meal_type = request.args.get("type", "")
    results = toy_test_search(meal_type)
    return jsonify(results)

if __name__ == "__main__":
    app.run(debug=True)
