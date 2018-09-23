from github import Github

g = Github("sarthak-tiwari", "sarthak1!")

for repo in g.get_user().get_repos():
    print(repo.name)
    #print(dir(repo))

    for user in repo.get_collaborators():
        print("  - " + user.login)