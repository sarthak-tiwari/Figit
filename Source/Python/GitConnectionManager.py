#Class to manage all the connections between the application and GitHub API

#import statements
from github import Github
from github import GithubException
from Constants import Constants

#class definition
class GitConnectionManager:

    #constants to store username and password of the github profile which is used to_
    #_access the api. Will be replaced with constant variables in the future
    
    _USERNAME = Constants.GITHUB_USERNAME
    _PASSWORD = Constants.GITHUB_PASSWORD



    #holds the current active connection to the GitHub API
    _gitHubConnection = None



    #function to provide access to gitHubConnection to other classes. This ensures that_
    #_only a single connection exists at a given time. Also initializes the connection_
    #_on the first run of the function.

    def getConnection(self):

        if(not(self._gitHubConnection)):
            self._gitHubConnection = Github(self._USERNAME, self._PASSWORD, timeout=100, per_page=1000)

        try:
            for str in self._gitHubConnection.get_user().get_repos():
                tmp = str
        except GithubException as err:
            if(err.status == 401):
                print("Could not establish connection to GitHub. BadCredentialsException !")
                return None
            raise

        return self._gitHubConnection



    #Function to validate whether a repository is a valid accessible GitHub repository or not._
    #_Returns true if it is a valid repository, returns false if it is not a valid repository or_
    #_a connection with GitHub could not be established
    def isValidRepository(self, repositoryURL):
        
        connection = self.getConnection()

        if(not(connection)):
            return False

        try:
            connection.get_repo(repositoryURL)
        except GithubException as err:
            if(err.status == 404):
                return False
            raise

        return True