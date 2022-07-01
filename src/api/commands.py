
import click

from api.models import db, Plagas, InfoPlant
import csv
import os





"""
In this file, you can add as many commands as you want using the @app.cli.command decorator
Flask commands are usefull to run cronjobs or tasks outside of the API but sill in integration 
with youy database, for example: Import the price of bitcoin every night as 12am
"""
def setup_commands(app):
    
    """ 
    This is an example command "insert-test-users" that you can run from the command line
    by typing: $ flask insert-test-users 5
    Note: 5 is the number of users to add
    """
    # @app.cli.command("insert-test-users") # name of our command
    # @click.argument("count") # argument of out command
    # def insert_test_data(count):
    #     print("Creating test users")
    #     for x in range(1, int(count) + 1):
    #         user = User()
    #         user.email = "test_user" + str(x) + "@test.com"
    #         user.password = "123456"
    #         user.is_active = True
    #         db.session.add(user)
    #         db.session.commit()
    #         print("User: ", user.email, " created.")

    #     print("All test users created")


    '''ejecutar: flask insert-plagas src/resources/info_plagas.csv'''
    @app.cli.command("insert-plagas")
    @click.argument("filename")
    def insert_plagas_information(filename):
        with open(filename) as file:  
            reader = csv.reader(file)
            is_first = True
            data = []
            for row in reader:
                if is_first:
                    is_first = False
                    continue
                plagas = Plagas.get_by_nombre(row[0])
                if plagas is None:
                    plagas = Plagas(
                        nombre=row[0],
                        sintomas=row[1],
                        prevencion=row[2],
                        tratamiento=row[3],
                        imagen=row[4]
                        )
                else:
                    plagas.update(row[1], row[2], row[3])

                plagas.save()
                
        ### Insert the code to populate others tables if needed
    '''ejecutar: flask insert-plants src/resources/info_plants.csv'''
    @app.cli.command("insert-plants")
    @click.argument("filename")
    def insert_plants_information(filename):
        with open(filename) as file:  
            reader = csv.reader(file)
            is_first = True            
            for row in reader:
                if is_first:
                    is_first = False
                    continue
                info_plant = InfoPlant.get_by_nombre_cientifico(row[1])
                if info_plant is None:
                    info_plant = InfoPlant(
                        nombre_comun=row[0],
                        nombre_cientifico=row[1],
                        riego=row[2],
                        luz=row[3],
                        poda=row[4],
                        abono=row[5],
                        trasplante=row[6],
                        tipo=row[7],
                        imagen=row[8],
                        periodo_verano=row[9],
                        periodo_invierno=row[10]
                        )
                else:
                    info_plant.update(row[0], row[2], row[3], row[4], row[5], row[6], row[7], row[8], row[9], row[10])

                info_plant.save()
               
                
            
            

