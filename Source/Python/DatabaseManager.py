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



    #method to clean all information pertaining to a repository from database
    @staticmethod
    def cleanRepository(repositoryName):

        conn = DatabaseManager.getConnection()

        query = 'DELETE FROM git_pull_review_data WHERE github_repository = \'' + repositoryName + '\''
        conn.execute(query)

        query = 'DELETE FROM git_pull_request_data WHERE github_repository = \'' + repositoryName + '\''
        conn.execute(query)

        query = 'DELETE FROM git_commit_data WHERE github_repository = \'' + repositoryName + '\''
        conn.execute(query)

        query = 'DELETE FROM git_repository_collaborators WHERE github_repository = \'' + repositoryName + '\''
        conn.execute(query)

        conn.commit()


    #method to populate database with all information of a repository from GitHub
    @staticmethod
    def populateRepository(repositoryName, collaboratorData, commitData, pullRequestData, pullReviewData):

        cleanRepository(repositoryName)

        insertCollaboratorDataValues(repositoryName, collaboratorData)

        insertCommitDataValues(repositoryName, commitData)

        insertPullRequestDataValues(pullRequestData)

        insertPullReviewDataValues(pullReviewData)



    #method to insert collaborator data into the corrosponding table
    @staticmethod
    def insertCollaboratorDataValues(repositoryName, collaboratorData):

        conn = DatabaseManager.getConnection()

        query = 'INSERT INTO git_user_profiles (github_login, github_username, github_profile_url, github_image_url\
                    ) VALUES (?, ?, ?, ?)'

        for user in collaboratorData:
            conn.execute(query, user)

        query = 'INSERT INTO git_repository_collaborators (github_repository, github_login) VALUES (?, ?)'

        for user in collaboratorData:
            conn.execute(query, [repositoryName, user.github_login])

        conn.commit()



    #method to insert commit data into the corrosponding table
    @staticmethod
    def insertCommitDataValues(repositoryName, commitData):

        conn = DatabaseManager.getConnection()

        query = 'INSERT INTO git_commit_data (github_repository, committer_name, commit_date, commit_message, \
        number_of_additions, number_of_deletions, number_of_files_modified, link_to_github) VALUES (\'' + repositoryName + '\', ?, ?, ?, ?, ?, ?, ?)'

        for commit in commitData:
            conn.execute(query, commit)

        conn.commit()



    #method to insert pull request data into the corrosponding table
    @staticmethod
    def insertPullRequestDataValues(pullRequestData):

        conn = DatabaseManager.getConnection()

        query = 'INSERT INTO git_pull_request_data (github_repository, request_id, requester_login, request_date, \
                request_title, request_body, request_url) VALUES (?, ?, ?, ?, ?, ?, ?)'

        for request in pullRequestData:
            conn.execute(query, request)

        conn.commit()



    #method to insert pull review data into the corrosponding table
    @staticmethod
    def insertPullReviewDataValues(pullReviewData):

        conn = DatabaseManager.getConnection()

        query = 'INSERT INTO git_pull_review_data (github_repository, request_id, reviewer_login, review_date, review_comment, \
                review_url) VALUES (?, ?, ?, ?, ?, ?)'

        for review in pullReviewData:
            conn.execute(query, review)

        conn.commit()
    