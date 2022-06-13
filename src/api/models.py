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


    
        

   

    