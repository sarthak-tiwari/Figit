#Class to manage all the data extraction regarding pull requests from GitHub API

#import statements
import collections
from github import Github
from github import GithubException



#defining data format
PullRequestData = collections.namedtuple("PullRequestData", "github_repository, request_id, requester_login, request_date, request_title, request_body, request_url")
PullReviewData = collections.namedtuple("PullReviewData", "github_repository, request_id, reviewer_login, review_date, review_comment, review_url")



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
            
            response = self._gitHubConnection.get_user().get_repo(gitHubRepo).get_pulls(state='all', sort='created')

            pullRequestData = []
            pullReviewData = []

            for request in response:

                reviews = request.get_reviews()
                for review in reviews:
                    reviewData = pullReviewData(github_repository=gitHubRepo,
                                                request_id='',
                                                reviewer_login='',
                                                review_date='',
                                                review_comment='',
                                                review_url='')
                    pullReviewData.append(reviewData)
                
                    

                requestData = PullRequestData(github_repository=gitHubRepo,
                                                  request_id='',
                                                  requester_login=request.user.login,
                                                  request_date=request.created_at,
                                                  request_title=request.title,
                                                  request_body=request.body,
                                                  request_url='')
                pullRequestData.append(requestData)

            return pullRequestData
        except GithubException as err:
            if(err.status == 404):
                print("Not able to get pull requests of the specified repository.")
                return None
            raise