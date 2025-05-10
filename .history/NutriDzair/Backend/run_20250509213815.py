import sys
import os

from flask import Flask, request, jsonify
from flask_cors import CORS

# Add the project root to the Python path
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..')))

# Correct import syntax (assuming `toy_test_search` is a function inside `Projectalpha`)
from Projectalpha import toy_test_searchimport sys
import os

from flask import Flask, request, jsonify
from flask_cors import CORS

# Add the project root to the Python path
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..')))

# Correct import syntax (assuming `toy_test_search` is a function inside `Projectalpha`)
from Projectalpha import toy_test_search

app = Flask(__name__)
CORS(app)

@app.route("/search", methods=["GET"])
def search():
    meal_type = request.args.get("type", "")
    results = toy_test_search(meal_type)
    return jsonify(results)

if __name__ == "__main__":
    app.run(debug=True)
