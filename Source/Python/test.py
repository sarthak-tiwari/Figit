#Dummy file to simulate and test under development python classes



#import statements
from github import Github
from GitConnectionManager import GitConnectionManager
from GitData import GitData
from GitData import CommitData



#----------------------------------------------------------------------------------------
#Sample code to iterate through all the repositories belonging to a user_
#_and print all the collaborators in each repository

#g = Github("username", "password")

#for repo in g.get_user().get_repos():
#    print(repo.name)
#    #print(dir(repo))

#    for user in repo.get_collaborators():
#        print(" - " + user.login)



#----------------------------------------------------------------------------------------
#Sample code showing an example of how to validate a repository on gitHub_
#_using the GitConnectionManager class

#manager = GitConnectionManager()

#if(manager.isValidRepository("sarthak-tiwari/ScrumDevils-SER_515")):
#    print("valid repo")
#else:
#    print("invalid repo")



#----------------------------------------------------------------------------------------
#Sample code showing two ways of how to get a list of collaborators in a_
#_repository using the GitData class

#manager = GitConnectionManager()

#gitData = GitData(manager.getConnection())

##--(1)
#for user in gitData.getUserList("ScrumDevils-SER_515"):
#    print(user)

##--(2)
#gitData.setGitHubRepository("ScrumDevils-SER_515")
#for user in gitData.getUserList():
#    print(user)



#----------------------------------------------------------------------------------------
#Sample code showing two ways of how to get a list of commits in a_
#_repository using the GitData class
manager = GitConnectionManager()

gitData = GitData(manager.getConnection())
gitData.setGitHubRepository("ScrumDevils-SER_515")

for commit in gitData.getCommitList():
    print(commit.commiterName + "\n")
    print(commit.commitDate + "\n")
    print(commit.commitMessage + "\n")
    print("----------" + "\n")