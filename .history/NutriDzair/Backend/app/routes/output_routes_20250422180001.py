from flask import Blueprint, jsonify, request
from app.services import output_service

bp = Blueprint('output', __name__)

@bp.route('/output', methods=['POST'])
def get_output():
    data = request.json
    result = output_service.generate_output(data)
    return jsonify(result)
