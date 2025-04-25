from flask import Flask, request, jsonify
from flask_cors import CORS
import toy_test_search
app = Flask(__name__)
CORS(app)

@app.route("/search", methods=["GET"])
def search():
    meal_type = request.args.get("type", "")
    #results = toy_test_search(meal_type)
    #return jsonify(results)

if __name__ == "__main__":
    app.run(debug=True)
