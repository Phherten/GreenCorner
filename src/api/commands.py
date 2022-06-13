
import click
from api.models import db, User, InfoPlant
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
    @app.cli.command("insert-test-users") # name of our command
    @click.argument("count") # argument of out command
    def insert_test_data(count):
        print("Creating test users")
        for x in range(1, int(count) + 1):
            user = User()
            user.email = "test_user" + str(x) + "@test.com"
            user.password = "123456"
            user.is_active = True
            db.session.add(user)
            db.session.commit()
            print("User: ", user.email, " created.")

        print("All test users created")

        ### Insert the code to populate others tables if needed
    '''ejecutar: flask nombre ../resources/datso.csv'''
    @app.cli.command("insert-plants")
    @click.argument("filename")
    def insert_plants_information(filename):
        with open(filename) as file:  
            reader = csv.reader(file)
            is_first = True
            data = []
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
                        transplante=row[6]
                        )
                else:
                    info_plant.update(row[0], row[2], row[3], row[4], row[5], row[6])

                info_plant.save()
                data.append(
                    { "id": row[0], "nombre": row[1], "numero": row[2]}
                )
                print(f"id: {row[0]}, nombre: {row[1]}, numero: {row[2]}")
            
            print(data)