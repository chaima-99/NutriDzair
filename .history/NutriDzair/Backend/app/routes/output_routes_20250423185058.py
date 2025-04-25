# from flask import Blueprint, jsonify, request
# from app.services import output_service

# bp = Blueprint('output', __name__)

# @bp.route('/output', methods=['POST'])
# def get_output():
#     data = request.json
#     result = output_service.generate_output(data)
#     return jsonify(result)

from flask import Blueprint, request, jsonify
from app.services.output_services import generate_recommendations

output_bp = Blueprint('output', __name__)

@output_bp.route('/recommendations', methods=['POST'])
def get_recommendations():
    user_data = request.get_json()
    try:
        recommendations = generate_recommendations(user_data)
        return jsonify({"status": "success", "data": recommendations}), 200
    except Exception as e:
        return jsonify({"status": "error", "message": str(e)}), 500