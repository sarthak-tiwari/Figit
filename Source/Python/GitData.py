#Class to manage all the data extraction from GitHub API

#import statements
import collections
from github import Github
from github import GithubException



#defining commit data format
CommitData = collections.namedtuple("CommitData", "commiterName, commitDate, commitMessage")



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



    #function to get list of user logins present as a collaborator in a repository.

    def getUserList(self, gitHubRepository = None):

        gitHubRepo = gitHubRepository

        if(gitHubRepository == None):
            gitHubRepo = self._gitHubRepository


        userList = []

        collaboratorList = self._gitHubConnection.get_user().get_repo(gitHubRepo).get_collaborators()
        
        if(collaboratorList.totalCount > 0):
            for user in collaboratorList:
                userList.append(user.login)
                
        return userList



    #function to get commit data in a repository

    def getCommitList(self, gitHubRepository = None):

        gitHubRepo = gitHubRepository

        if(gitHubRepository == None):
            gitHubRepo = self._gitHubRepository


        commitList = []
        commitDataSet = []

        commitList = self._gitHubConnection.get_user().get_repo(gitHubRepo).get_commits()
        
        if(commitList.totalCount > 0):
            for commit in commitList:
                commitData = CommitData(commiterName = commit.author.login,
                                       commitDate = commit.last_modified,
                                      commitMessage = commit.raw_data['commit']['message'])
                commitDataSet.append(commitData)
                
        return commitDataSet