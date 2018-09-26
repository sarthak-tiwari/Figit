#Class to manage all the data extraction from GitHub API

#import statements
from github import Github
from github import GithubException

#class definition
class GitData:

    #holds the current active connection to the GitHub API
    _gitHubConnection = None

    #costructor to instantiate the class. As the class requires a connection to GitHub_
    #_to fetch any data, an active connection must be passed before you use the class.

    def __init__(self, gitHubConnection):
        self._gitHubConnection = gitHubConnection



    #set function to access the gitHubConnection object.

    def setConnection(self, gitHubConnection):
        self._gitHubConnection = gitHubConnection