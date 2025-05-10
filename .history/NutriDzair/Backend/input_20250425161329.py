from flask import Flask, request, jsonify, make_response
from datetime import datetime, timedelta

app = Flask(__name__)

@app.route("/submit", methods=["POST"])
def submit_form():
    data = request.get_json()

    response = make_response(jsonify({"message": "Data received", "data": data}))
    one_week = datetime.now() + timedelta(weeks=1)

    response.set_cookie("full_name", data["full_name"], expires=one_week)
    response.set_cookie("email", data["email"], expires=one_week)
    response.set_cookie("weight", str(data["weight"]), expires=one_week)
    response.set_cookie("height", str(data["height"]), expires=one_week)
    response.set_cookie("gender", data["gender"], expires=one_week)
    response.set_cookie("daily_calories", str(data["daily_calories"]), expires=one_week)
    response.set_cookie("carbs", data["carbs"], expires=one_week)
    response.set_cookie("fat", data["fat"], expires=one_week)
    response.set_cookie("proteins", data["proteins"], expires=one_week)
    response.set_cookie("weekly_budget", str(data["weekly_budget"]), expires=one_week)
    response.set_cookie("cuisine", data["cuisine"], expires=one_week)
    response.set_cookie("deliciousness", data["deliciousness"], expires=one_week)
    response.set_cookie("price", data["price"], expires=one_week)
    response.set_cookie("calories", data["calories"], expires=one_week)
    response.set_cookie("variety", data["variety"], expires=one_week)

    return response

if __name__ == "__main__":
    app.run(debug=True)
