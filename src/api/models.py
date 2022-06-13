from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            # do not serialize the password, its a security breach
        }

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

