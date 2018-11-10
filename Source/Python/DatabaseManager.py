#class to access the local database instance

import sqlite3
from Constants import Constants

class DatabaseManager:

    _DATABASE = Constants.DATABASE_PATH

    _connection = None



    #method to get active connection to the local database instance
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


    #method to insert commit data into the corrosponding table
    @staticmethod
    def insertCommitDataValues(repositoryName, commitData):

        conn = DatabaseManager.getConnection()

        query = 'INSERT INTO git_commit_data (github_repository, committer_name, commit_date, commit_message, \
        number_of_additions, number_of_deletions, number_of_files_modified, link_to_github) VALUES (\'' + repositoryName + '\', ?, ?, ?, ?, ?, ?, ?)'

        for commit in commitData:
            conn.execute(query, commit)

        conn.commit()

    