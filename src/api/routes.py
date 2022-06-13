"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, Plagas
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

@api.route('/plagas', methods=['GET'])
def get_plagas():
    alluser = Plagas.query.all()
    alluser = list(map(lambda elemento: elemento.serialize(), alluser))

    return jsonify({"Plagas" : alluser}), 200