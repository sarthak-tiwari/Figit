#Class to manage all the data extraction from GitHub API

#import statements
import collections
from github import Github
from github import GithubException



#defining commit data format
PullRequestData = collections.namedtuple("PullRequestData", "creatorLogin, createdAt, requestTitle, requestDescription, reviewers, reviewComments")



#class definition
class GitPullRequestData:

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



    #function to get pull request data in a repository

    def getPullRequestData(self, gitHubRepository = None):

        gitHubRepo = gitHubRepository

        if(gitHubRepository == None):
            gitHubRepo = self._gitHubRepository

        try:
            #response = self._gitHubConnection.get_user().get_repo(gitHubRepo).get_issue(1)

            #print(response)
            
            response = self._gitHubConnection.get_user().get_repo(gitHubRepo).get_pulls(state='all', sort='created')

            pullRequestData = []

            for request in response:

                resp = request.get_reviews()
                for r in resp:
                    print(r)

                resp = request.get_review_requests()
                for r in resp:
                    print(len(r))
                    for i in r:
                        print(r.totalCount)
                
                requestData = PullRequestData(creatorLogin=request.user.login,
                                              createdAt=request.created_at,
                                              requestTitle=request.title,
                                              requestDescription=request.body,
                                              reviewers='NA',
                                              reviewComments='NA')

                pullRequestData.append(requestData)

            return pullRequestData
        except GithubException as err:
            if(err.status == 404):
                print("Not able to get pull requests of the specified repository.")
                return None
            raise