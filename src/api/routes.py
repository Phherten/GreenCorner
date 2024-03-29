"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint, send_from_directory

from api.models import db, Plagas, InfoPlant, User, Plant, Riego

import json 
from api.utils import generate_sitemap, APIException
import datetime #ayuda a trabajar con fecha y hora
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity
import requests;




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

@api.route('/registro', methods = ['POST'])
def guardar_registro():
    request_body = request.get_json()
    print(request_body)
    user = User.query.filter_by(email = request_body['email']).first()

    if user is None:
        user = User(
            username = request_body['username'],
            second_name = request_body['second_name'],
            email = request_body['email'],
            password = request_body['password'],
            is_active = True
            )
        user.save()
        return "Usuario registrado"
    else:
        return "Este usuario ya existe"

@api.route('/user_plants', methods = ['GET'])
@jwt_required()
def get_user_plants():
    try:
        email = get_jwt_identity()
        user = User.get_by_email(email)
        
        user_plants = Plant.get_by_user(user.id)

        response = []
        for plant in user_plants:
            response.append(plant.serialize())   
    except Exception as e:
        response = e        

    return jsonify(response), 200

@api.route('/plant/save', methods = ['POST'])
@jwt_required()
def add_new_plant():
    data = request.get_json()

    email = get_jwt_identity()
    user = User.get_by_email(email)

    plant = Plant(
        user_id = user.id,
        info_plant_id = data["info_plant_id"],
        alias = data["alias"],
        fecha_registro = datetime.datetime.now()
    )

    plant.save()

    return "Planta agregada a la colección", 200

@api.route('/plant/delete', methods = ['DELETE'])
@jwt_required()
def delete_plant():
    data = request.get_json()
    email = get_jwt_identity()
    user = User.get_by_email(email)
    plant = Plant.get_by_id(id=data["plant_id"])

    plant.delete()

    return "Planta eliminada de la colección", 200

@api.route('/login', methods = ['POST'])
def iniciar_sesion():
    request_body = request.get_json()
    print(request_body)
    user = User.query.filter_by(email = request_body['email']).first()
    if user:
        if user.password == request_body['password']:
            tiempo = datetime.timedelta(minutes = 60)
            acceso = create_access_token(identity = request_body['email'], expires_delta = tiempo)
            return jsonify ({
                "duracion": tiempo.total_seconds(),
                "mensaje": "Inicio de sesion correcto",
                "token": acceso,
                "email": request_body['email'],
                "chat_id":user.chat_id
            })
        else:
            return jsonify({"error": "La contraseña no es correcta"})
    else:
        return jsonify({"error": "El usuario no existe"}), 400

#Bearer token
@api.route ('/privada', methods = ['GET'])
@jwt_required()
def privada():
    identidad = get_jwt_identity()
    return jsonify({"mensaje": "Tienes permiso para entrar", "permiso": True, "email": identidad})

@api.route ('/recuperar/<mail>', methods = ['GET'])
def recuperar(mail):
    expira = datetime.timedelta(minutes = 10)
    access = create_access_token(identity = mail, expires_delta = expira)
    data = {
        "mail": mail,
        "mensaje": "Si el email existe, te llegará un link para resetear tu contraseña",
        "token": access
    }
    return jsonify(data)

@api.route ('/changePassword', methods = ['POST'])
@jwt_required()
def cambiar():
    identidad = get_jwt_identity()
    body = request.get_json()
    change = User.query.filter_by(email = identidad).first()
    change.password = body['password']
    db.session.commit()
    return "Contraseña cambiada"

@api.route('/notificacion_telegram', methods=['POST'])
def sendNotification():
    request_body = request.get_json()

    bot_token = "5565830618:AAHcS6I-12nfibE1Dz7-fHiFupWG2BVJfxk"
    bot_chatID = ""
    msg = request_body['msg']
    send_text = 'https://api.telegram.org/bot' + bot_token + '/sendMessage?chat_id=' + bot_chatID + '&parse_mode=Markdown&text=' + msg
    response = requests.get(send_text)
    return response.json()

    sendNotification('Mensaje mandado correctamente', '✅')

@api.route('/telegram', methods=['GET'])
def telegram():
    current_date=datetime.date.today()
    riegos=Riego.query.filter_by(fecha=current_date)
    
    print(riegos.count())
    for riego in riegos:
        bot_token = "5565830618:AAHcS6I-12nfibE1Dz7-fHiFupWG2BVJfxk"
        bot_chatID = riego.chat_id
        msg = riego.msg
        send_text = f'https://api.telegram.org/bot{bot_token}/sendMessage?chat_id={bot_chatID}&parse_mode=Markdown&text={msg}'
        response = requests.get(send_text)
        riego.fecha = current_date + datetime.timedelta(days=riego.intervalo)
        db.session.commit()
    return jsonify({"Message":"ok"}),200


@api.route('/delete_telegram', methods=['DELETE'])
def delete_telegram():
    
    body = request.get_json()
    riego=Riego.query.filter_by(chat_id=body["chat_id"],msg=body["msg"]).first()
    db.session.delete(riego)
    db.session.commit()
    
   
    return jsonify({"Message":"Riego eliminado"}),200

@api.route('/consultar_telegram', methods=['POST'])
def consultar_telegram():
    
    body = request.get_json()
    consulta=Riego.query.filter_by(chat_id=body["chat_id"],msg=body["msg"]).first()
    if consulta is None:
        return jsonify({"Message":"No"}),200
    else:
        return jsonify({"Message":"Si"}),200
    

    




@api.route('/plant/edit', methods=['POST'])
@jwt_required()
def update_plant_alias():
    request_body = request.get_json()
    user_email = get_jwt_identity()

    user = User.get_by_email(user_email)

    user_plants = user.plant
    plant_id = request_body["plant_id"]

    for user_plant in user_plants:
        if user_plant.id == plant_id:
            user_plant.alias = request_body["alias"]
            user_plant.save()
            break
    
    return "ok"

@api.route('/aviso_telegram', methods = ['POST'])
@jwt_required()
def aviso_telegram():
    data = request.get_json()

    email = get_jwt_identity()
    user = User.get_by_email(email)

    riego = Riego(
        msg=data["msg"],
        chat_id= user.chat_id,
        intervalo=data["intervalo"],
        fecha = data["fecha"]
        
    )

    riego.save()

    return "Notificacion añadida", 200


@api.route('/get_chat_id', methods = ['POST'])
@jwt_required()
def get_chat_id():
    

    email = get_jwt_identity()
    user = User.get_by_email(email)
    chat_id = user.chat_id

    

    

    return {"chat_id":chat_id}

@api.route('/save_chat_id', methods = ['POST'])
@jwt_required()
def save_chat_id():
    
    data = request.get_json()
    email = get_jwt_identity()
    user = User.get_by_email(email)
    user.chat_id = data["chat_id"]

    

    db.session.commit()

    

    

    return "chat id guardado"



