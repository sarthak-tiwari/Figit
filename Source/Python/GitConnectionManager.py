from github import Github

class GitConnectionManager:

    _gitHubConnection = None

    def getConnection(self):
        if(not(self._gitHubConnection)):
            self._gitHubConnection = Github("sarthak-tiwari", "sarthak1!")

        return self._gitHubConnection

    def isValidRepository(self, repositoryURL):
        
        connection = self.getConnection()

        try:
            connection.get_repo(repositoryURL)
        except:
            return False

        return True