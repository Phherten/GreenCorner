from flask_sqlalchemy import SQLAlchemy

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

    def save(self):
        if not self.id:
            db.session.add(self)
        db.session.commit()

    def update(self, nombre_comun, riego, luz, poda, abono, trasplante):
        self.nombre_comun = nombre_comun
        self.riego = riego
        self.luz = luz
        self.poda = poda
        self.abono = abono
        self.trasplante = trasplante
    
    
    def serialize(self):
        return {
            "id": self.id,
            "nombre_comun": self.nombre_comun,
            "nombre_cientifico": self.nombre_cientifico,
            "riego": self.riego,
            "luz": self.luz,
            "poda": self.poda,
            "abono": self.abono,
            "trasplante": self.trasplante
            # do not serialize the password, its a security breach
        }

    "SELECT * FROM info_plant WHERE nombre_cientifico = 'nomber_cientifico' LIMIT 1"
    @staticmethod
    def get_by_nombre_cientifico(nombre_cientifico):
        return InfoPlant.query.filter_by(nombre_cientifico=nombre_cientifico).first()

    @staticmethod
    def get_all():
        return InfoPlant.query.all()


