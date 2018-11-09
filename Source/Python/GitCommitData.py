#Class to manage all the data extraction from GitHub API

#import statements
import collections
from github import Github
from github import GithubException



#defining commit data format
CommitData = collections.namedtuple("CommitData", "commiterName, commitDate, commitMessage, numberOfAdditions, numberOfDeletions, filesModified, linkToGithub")



#class definition
class GitCommitData:

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

        #try to get collaborator list of the gitHubRepo repository
        userList = []
        try:
            collaboratorList = self._gitHubConnection.get_user().get_repo(gitHubRepo).get_collaborators()
        
            if(collaboratorList.totalCount > 0):
                for user in collaboratorList:
                    userList.append(user.login)
        except GithubException as err:
            if(err.status == 404):
                print("Not able to get collaborator list of the specified repository.")
                return []
            raise
                
        return userList



    #function to get commit data in a repository

    def getCommitData(self, gitHubRepository = None):

        gitHubRepo = gitHubRepository

        if(gitHubRepository == None):
            gitHubRepo = self._gitHubRepository

        #try to get branch names of all the branches in the gitHubRepo repository
        try:
            branchList = []
            branchList = self._gitHubConnection.get_user().get_repo(gitHubRepo).get_branches()
        except GithubException as err:
            if(err.status == 404):
                print("Not able to get branch structure of the specified repository.")
                return branchList
            raise

        #try to get commit data from all the branches stored in branchList
        commitList = []
        commitDataSet = set([])         #to eliminate redundancy in commit list we are using a set here
        for branch in branchList:
            try:
                commitList = self._gitHubConnection.get_user().get_repo(gitHubRepo).get_commits(branch.name)

                if(commitList.totalCount > 0):
                    for commit in commitList:
                        #creating a single comma-separated list of all files modified in this commit
                        filesModified = ""
                        count=0
                        for file in commit.files:
                            if(count < 20):
                                filesModified += file.filename + ","
                            else:
                                filesModified += " + " + str(len(commit.files) - 20) + " files"
                                break

                        commitData = CommitData(commiterName = commit.commit.author.name,
                                                commitDate = commit.raw_data['commit']['author']['date'],
                                                commitMessage = commit.commit.message,
                                                numberOfAdditions = commit.stats.additions, 
                                                numberOfDeletions = commit.stats.deletions,
                                                filesModified = filesModified)
                        commitDataSet.add(commitData)

            except GithubException as err:
                if(err.status == 404):
                    print("Not able to get commit data from the branch.")
                    return set([])
                raise
                
        return commitDataSet



    #function to get commit data in a repository

    def getCommitDataUsingUsers(self, gitHubRepository = None):

        gitHubRepo = gitHubRepository

        if(gitHubRepository == None):
            gitHubRepo = self._gitHubRepository

        #try to get user names of all the collaborators in the gitHubRepo repository
        try:
            userList = self.getUserList()
        except GithubException as err:
            if(err.status == 404):
                print("Not able to get collaborator names of the specified repository.")
                return userList
            raise

        #try to get commit data from all the branches stored in branchList
        commitList = []
        commitDataSet = set([])         #to eliminate redundancy in commit list we are using a set here
        for user in userList:
            try:
                commitList = self._gitHubConnection.get_user().get_repo(gitHubRepo).get_commits(author=user)

                if(commitList.totalCount > 0):
                    for commit in commitList:

                        #skipping merge commits
                        if(len(commit.parents) > 1):
                            continue

                        commitData = CommitData(commiterName = commit.committer.login,
                                                commitDate = commit.raw_data['commit']['author']['date'],
                                                commitMessage = commit.commit.message,
                                                numberOfAdditions = commit.stats.additions, 
                                                numberOfDeletions = commit.stats.deletions,
                                                filesModified = str(len(commit.files)),
                                                linkToGithub = commit.commit.html_url)
                        commitDataSet.add(commitData)

            except GithubException as err:
                if(err.status == 404):
                    print("Not able to get commit data from the branch.")
                    return set([])
                raise
                
        return commitDataSet