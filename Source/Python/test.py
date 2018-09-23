#Dummy file to simulate and test under development python classes



#import statements
from github import Github
from GitConnectionManager import GitConnectionManager



#----------------------------------------------------------------------------------------
#Sample code to iterate through all the repositories belonging to a user_
#_and print all the collaborators in each repository

#g = Github("username", "password")

#for repo in g.get_user().get_repos():
#    print(repo.name)
#    #print(dir(repo))

#    for user in repo.get_collaborators():
#        print("  - " + user.login)



#----------------------------------------------------------------------------------------
#Sample code showing an example of how to validate a repository on gitHub_
#_using the GitConnectionManager  class

manager = GitConnectionManager()

if(manager.isValidRepository("sarthak-tiwari/ScrumDevils-SER_515")):
    print("valid repo")
else:
    print("invalid repo")