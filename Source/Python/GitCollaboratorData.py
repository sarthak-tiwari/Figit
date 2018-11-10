#Class to manage all the collaborator data extraction from GitHub API

#import statements
import collections
from github import Github
from github import GithubException



#defining Collaborator data format
CollaboratorData = collections.namedtuple("CollaboratorData", "github_login, github_username, github_profile_url, github_image_url")



#class definition
class GitCollaboratorData:

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



    #function to get list of user logins present as a collaborator in a repository.

    def getCollaboratorData(self, gitHubRepository = None):

        gitHubRepo = gitHubRepository

        if(gitHubRepository == None):
            gitHubRepo = self._gitHubRepository

        #try to get collaborator list of the gitHubRepo repository
        userDataSet = []
        try:
            collaboratorList = self._gitHubConnection.get_user().get_repo(gitHubRepo).get_collaborators()
        
            if(collaboratorList.totalCount > 0):
                for user in collaboratorList:
                    userData = CollaboratorData(github_login=user.login,
                                                github_username=user.login if user.name is None else user.name,
                                                github_profile_url=user.html_url,
                                                github_image_url=user.avatar_url)
                    userDataSet.append(userData)

        except GithubException as err:
            if(err.status == 404):
                print("Not able to get collaborator list of the specified repository.")
                return []
            raise
                
        return userDataSet