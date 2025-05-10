import sys
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
    # meal_type = request.args.get("type", "")
    # results = toy_test_search(meal_type)
    # return jsonify(results)
    with open("input_data.json", "r") as f:
        data = json.load(f)

    goal_state = {
        'cal': int(data.get("daily_calories", 0)),
        'fats': int(data.get("fat", 0)),
        'prot': int(data.get("proteins", 0)),
        'carbs': int(data.get("carbs", 0)),
        'cost': int(data.get("weekly_budget", 0)),
        "calories_margin": 0.008,
        "proteins_margin": 0.001,
        "carbs_margin": 0.001,
        "fats_margin": 0.001,
        "cost_margin": 0.001
    }

    allergies = data.get("allergies", [])
    dietType = data.get("dietType", [])

    results = testing_search_strategy(20, goal_state, allergies, dietType)
    return jsonify(results)

if __name__ == "__main__":
    app.run(debug=True)
