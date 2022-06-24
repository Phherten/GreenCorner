"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint

from api.models import db, Plagas, InfoPlant


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

    return jsonify(alluser), 200

@api.route('/plants', methods=['GET'])
def obtain_plants():
    info_plants = InfoPlant.get_all()

    response = []
    for info in info_plants:
        response.append(info.serialize())

    return jsonify(response), 200


@api.route('/plants/<int:id>', methods=['GET'])
def plant_id(id):
    plant = InfoPlant.get_by_id(id)
    if plant is None:
        return 'not found', 404

    
    return jsonify(plant.serialize()), 200

    

@api.route('/search', methods=['GET'])
def search_plants():
    
    resultado = InfoPlant.get_by_name(request.args.get("nombre_parcial"))
    response = []
    for info in resultado:
        response.append(info.serialize())

    return jsonify(response) ,200