#Class to manage all the data extraction from GitHub API

#import statements
from github import Github
from github import GithubException

#class definition
class GitData:

    #holds the current active connection to the GitHub API
    _gitHubConnection = None



    #holds the repository concerning which the data needs to be fetched
    _gitHubRepository = None



    #costructor to instantiate the class. As the class requires a connection to GitHub_
    #_to fetch any data, an active connection must be passed before you use the class

    def __init__(self, gitHubConnection):
        self._gitHubConnection = gitHubConnection



    #set function for gitHubConnection attribute

    def setConnection(self, gitHubConnection):
        self._gitHubConnection = gitHubConnection


    #get and set function for gitHubRepository attribute

    def setGitHubRepository(self, gitHubRepository):
        self._gitHubRepository = gitHubRepository

    def getGitHubRepository(self):
        return self._gitHubRepository



    #function to get list of user logins present in a class. Will be replaced by complete_
    #_user data

    def getUserData(self, gitHubRepository):

        self.setGitHubRepository(gitHubRepository)

        if(self._gitHubRepository == None):
            print("No repository provided for access.")
            return None

        userList = []

        for user in self._gitHubConnection.get_user().get_repo(self._gitHubRepository).get_collaborators():
            userList.append(user.login)

        return userList