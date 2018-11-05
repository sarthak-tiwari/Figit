#class to access the local database instance

import sqlite3
from Constants import Constants

class DatabaseManager:

    _DATABASE = Constants.DATABASE_PATH

    _connection = None



    @staticmethod
    def getConnection():

        if(DatabaseManager._connection == None):
            DatabaseManager._connection = sqlite3.connect(DatabaseManager._DATABASE)

        return DatabaseManager._connection



    @staticmethod
    def getValues():

        conn = DatabaseManager.getConnection()

        for row in conn.execute('SELECT * FROM dashboard_user_repositories;'):
            print(row)


    