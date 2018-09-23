from github import Github
from GitConnectionManager import GitConnectionManager

g = Github("sarthak-tiwari", "sarthak1!")

for repo in g.get_user().get_repos():
    print(repo.name)
    #print(dir(repo))

    for user in repo.get_collaborators():
        print("  - " + user.login)

manager = GitConnectionManager()
if(manager.isValidRepository("hi")):
    print("function_worked")