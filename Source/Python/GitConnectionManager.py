#Class to manage all the connections between the application and GitHub API

#import statements
from github import Github

#class definition
class GitConnectionManager:

    #constants to store username and password of the github profile which is used to_
    #_access the api. Will be replaced with constant variables in the future
    _USERNAME = "username"
    _PASSWORD = "password"



    #holds the current active connection to the GitHub API
    _gitHubConnection = None



    #function to provide access to gitHubConnection to other classes. This ensures that_
    #_only a single connection exists at a given time. Also initializes the connection_
    #_on the first run of the function.

    def getConnection(self):
        if(not(self._gitHubConnection)):
            self._gitHubConnection = Github(self._USERNAME, self._PASSWORD)

        return self._gitHubConnection



    #Function to validate whether a repository is a valid accessible GitHub repository or not._
    #_Returns true if it is a valid repository, returns false if it is not.
    def isValidRepository(self, repositoryURL):
        
        connection = self.getConnection()

        try:
            connection.get_repo(repositoryURL)
        except:
            return False

        return True