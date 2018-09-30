#Class to manage all the data extraction from GitHub API

#import statements
import collections
from github import Github
from github import GithubException



#defining commit data format
CommitData = collections.namedtuple("CommitData", "commiterName, commitDate, commitMessage, numberOfAdditions, numberOfDeletions, filesModified")



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

    def getCommitData(self, gitHubRepository = None):

        gitHubRepo = gitHubRepository

        if(gitHubRepository == None):
            gitHubRepo = self._gitHubRepository


        branchList = []
        branchList = self._gitHubConnection.get_user().get_repo(gitHubRepo).get_branches()

        commitList = []
        commitDataSet = set([])         #to eliminate redundancy in commit list we are using a set here
        for branch in branchList:
            commitList = self._gitHubConnection.get_user().get_repo(gitHubRepo).get_commits(branch.name)
            if(commitList.totalCount > 0):
                for commit in commitList:
                    #creating a single comma-separated list of all files modified in this commit
                    filesModified = ""
                    for file in commit.files:
                        filesModified += file.filename + ","

                    commitData = CommitData(commiterName = commit.author.login,
                                            commitDate = commit.raw_data['commit']['author']['date'],
                                            commitMessage = commit.commit.message,
                                            numberOfAdditions = commit.stats.additions, 
                                            numberOfDeletions = commit.stats.deletions,
                                            filesModified = filesModified)
                    commitDataSet.add(commitData)       
                
        return commitDataSet