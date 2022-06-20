from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import or_

db = SQLAlchemy()

class Plagas(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(250), unique=True, nullable=False)
    sintomas = db.Column(db.String(250), unique=False, nullable=False)
    prevencion = db.Column(db.String(250), unique=False, nullable=False)
    tratamiento = db.Column(db.String(250), unique=False, nullable=False)

    def __repr__(self):
        return f'<Plagas {self.nombre}>'
    
    def save(self):
        if not self.id:
            db.session.add(self)
        db.session.commit()
    
    def update(self, nombre, sintomas, prevencion, tratamiento):
        self.nombre = nombre
        self.sintomas = sintomas
        self.prevencion = prevencion
        self.tratamiento = tratamiento
    
    def serialize(self):
        return {
            "id": self.id,
            "nombre": self.nombre,
            "sintomas": self.sintomas,
            "prevencion": self.prevencion,
            "tratamiento": self.tratamiento
            # do not serialize the password, its a security breach
        }
    
    @staticmethod
    def get_by_nombre(nombre):
        return Plagas.query.filter_by(nombre=nombre).first()
                  

class InfoPlant(db.Model):
    __tablename__ = "info_plant"
    id = db.Column(db.Integer, primary_key=True)
    nombre_comun = db.Column(db.String(250))
    nombre_cientifico = db.Column(db.String(250), unique=True)
    riego = db.Column(db.String(250))
    luz = db.Column(db.String(250))
    poda = db.Column(db.String(250))
    abono = db.Column(db.String(250))
    trasplante = db.Column(db.String(250))
    tipo = db.Column(db.String(250))
    imagen = db.Column(db.String(250))
    periodo_verano = db.Column(db.Integer)
    periodo_invierno = db.Column(db.Integer)

    def save(self):
        if not self.id:
            db.session.add(self)
        db.session.commit()

    def update(self, nombre_comun, riego, luz, poda, abono, trasplante, tipo, imagen, periodo_verano, periodo_invierno):
        self.nombre_comun = nombre_comun
        self.riego = riego
        self.luz = luz
        self.poda = poda
        self.abono = abono
        self.trasplante = trasplante
        self.tipo = tipo
        self.imagen = imagen
        self.periodo_verano = periodo_verano
        self.periodo_invierno = periodo_invierno
    
    
    def serialize(self):
        return {
            "id": self.id,
            "nombre_comun": self.nombre_comun,
            "nombre_cientifico": self.nombre_cientifico,
            "riego": self.riego,
            "luz": self.luz,
            "poda": self.poda,
            "abono": self.abono,
            "trasplante": self.trasplante,
            "tipo": self.tipo,
            "imagen": self.imagen,
            "periodo_verano": self.periodo_verano,
            "periodo_invierno": self.periodo_invierno

            # do not serialize the password, its a security breach
        }

    "SELECT * FROM info_plant WHERE nombre_cientifico = 'nomber_cientifico' LIMIT 1"
    @staticmethod
    def get_by_nombre_cientifico(nombre_cientifico):
        return InfoPlant.query.filter_by(nombre_cientifico=nombre_cientifico).first()

    @staticmethod
    def get_all():
        return InfoPlant.query.all()
    '''
    SELECT * FROM table WHERE column LIKE '%Mons% OR column_2 LIKE '%Mons%''
    '''
    @staticmethod
    def get_by_name(nombre_parcial):
        search = f'%{nombre_parcial}%'
        plants = InfoPlant.query.filter( 
            or_(
                InfoPlant.nombre_cientifico.ilike(search), 
                InfoPlant.nombre_comun.ilike(search)
                )
            ).all()

        return plants
        
    




class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=False, nullable=False)
    second_name = db.Column(db.String(80), unique=False, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def __repr__(self):
        return f'<User {self.email}>'


    def serialize(self):
        return {
            "id": self.id,
            "username": self.username,
            "second_name": self.second_name,
            "email": self.email
            # do not serialize the password, its a security breach
        }
    
    def save(self):
        if not self.id:
            db.session.add(self)
        db.session.commit()



    def update(self, username, second_name, email, password):
        self.username = username
        self.second_name = second_name
        self.email = email
        self.password = password
    
    "SELECT * FROM info_plant WHERE nombre_cientifico = 'nomber_cientifico' LIMIT 1"
    @staticmethod
    def get_by_email(nombre_cientifico):
        return User.query.filter_by(email = email).first()
      
    