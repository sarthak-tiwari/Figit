from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.shortcuts import render
from django.db import connection
import json
from django.http import JsonResponse
from django.core import serializers
from django.http import HttpResponse
from .helper.helper import Helper
from .dataFromGitHub import test

# GET and POST Repository List according to Application Users.
@api_view(['GET','POST'])
def repository_list(request, username):
    if request.method == 'GET':
        columnNames = ['github_repository', 'repository_url']
        query = "SELECT github_repository, repository_url FROM application_user_repositories where application_username = '" + username + "'"
        result = Helper.executeQuery(query, columnNames)
        return result
    if request.method == 'POST':
        rows = request.data
        for row in rows:
            repo_url_split = row["repository_url"].split("/")
            repo_name = repo_url_split[3]+"_"+repo_url_split[4]
            query = "INSERT INTO application_user_repositories ('application_username','github_repository','repository_url') values ('"+username+"','"+repo_name+"','"+row["repository_url"]+"')"
            with connection.cursor() as cursor:
                cursor.execute(query)
            test.getDataFromGitHubIntoDB(repo_url_split[4])
        return HttpResponse("Repositories Added", content_type="application/json")

# GET List of Collaborators according to Github Repository.
@api_view(['GET'])
def repository_collaborators(request, repo):
    if request.method == 'GET':
        columnNames = ['github_username', 'github_profile_url', 'github_image_url']
        query = "select p.github_username, p.github_profile_url, p.github_image_url from git_user_profiles as p join git_repository_collaborators as g on p.github_login = g.github_login where g.github_repository = '"+ repo +"'"
        result = Helper.executeQuery(query, columnNames)
        return result

# GET Number of Commits for each Collaborator of a Github Repository (Pie Chart)
@api_view(['GET'])
def commit_count(request, repo):
    if request.method == 'GET':
        columnNames = ['committer_name', 'commit_count']
        query = "SELECT committer_name, COUNT(*) AS commit_count FROM git_commit_data where github_repository = '"+ repo +"' GROUP BY committer_name ORDER BY commit_count DESC"
        result = Helper.executeQuery(query, columnNames)
        return result

# GET Number of Additions for each Collaborator of a Github Repository (Pie Chart)
@api_view(['GET'])
def commit_additions_count(request, repo):
    if request.method == 'GET':
        columnNames = ['committer_name', 'additions_count']
        query = "SELECT committer_name, SUM(number_of_additions) AS additions_count FROM git_commit_data where github_repository = '"+ repo +"' GROUP BY committer_name ORDER BY additions_count DESC"
        result = Helper.executeQuery(query, columnNames)
        return result

# GET Number of Deletions for each Collaborator of a Github Repository (Pie Chart)
@api_view(['GET'])
def commit_deletions_count(request, repo):
    if request.method == 'GET':
        columnNames = ['committer_name', 'deletions_count']
        query = "SELECT committer_name, SUM(number_of_deletions) AS deletions_count FROM git_commit_data where github_repository = '"+ repo +"' GROUP BY committer_name ORDER BY deletions_count DESC"
        result = Helper.executeQuery(query, columnNames)
        return result

# GET Number of Files Modified for each Collaborator of a Github Repository (Pie Chart)
@api_view(['GET'])
def commit_files_modified_count(request, repo):
    if request.method == 'GET':
        columnNames = ['committer_name', 'modified_count']
        query = "SELECT committer_name, SUM(number_of_files_modified) AS files_modified_count FROM git_commit_data where github_repository = '"+ repo +"' GROUP BY committer_name ORDER BY files_modified_count DESC"
        result = Helper.executeQuery(query, columnNames)
        return result

# GET Number of Pull Requests Raised for each Collaborator of a Github Repository (Pie Chart)
@api_view(['GET'])
def pull_requests_raise_count(request, repo):
    if request.method == 'GET':
        columnNames = ['requester_login', 'raise_count']
        query = "SELECT requester_login, COUNT(*) AS raise_count FROM git_pull_request_data where github_repository = '"+ repo +"' GROUP BY requester_login ORDER BY raise_count DESC"
        result = Helper.executeQuery(query, columnNames)
        return result

# GET Number of Pull Requests Reviewed for each Collaborator of a Github Repository (Pie Chart)
@api_view(['GET'])
def pull_requests_review_count(request, repo):
    if request.method == 'GET':
        columnNames = ['reviewer_login', 'review_count']
        query = "SELECT reviewer_login, COUNT(*) AS review_count FROM git_pull_review_data where github_repository = '"+ repo +"' GROUP BY reviewer_login ORDER BY review_count DESC"
        result = Helper.executeQuery(query, columnNames)
        return result

# GET Details of a Pull Requests Raised of a Github Repository
@api_view(['GET'])
def pull_requests_raise_details(request, repo, req_id):
    if request.method == 'GET':
        columnNames = ['requester_login', 'request_date','request_title','request_body','request_url']
        query = "SELECT requester_login, request_date, request_title, request_body, request_url FROM git_pull_request_data where github_repository = '"+ repo +"' and request_id = '"+ req_id +"'"
        result = Helper.executeQuery(query, columnNames)
        return result

# GET Details of a Pull Requests Reviewed of a Github Repository
@api_view(['GET'])
def pull_requests_review_details(request, repo, req_id):
    if request.method == 'GET':
        columnNames = ['reviewer_login', 'review_date','review_comment','review_url']
        query = "SELECT reviewer_login, review_date, review_comment, review_url FROM git_pull_review_data where github_repository = '"+ repo +"' and request_id = '"+ req_id +"'"
        result = Helper.executeQuery(query, columnNames)
        return result

# GET Number of Commits according to date of a Github Repository (TimeLine Graph)
@api_view(['GET'])
def timeline_commit_count(request, repo):
    if request.method == 'GET':
        columnNames = ['commit_date', 'commit_count']
        query = "select date(commit_date) as commit_date, count(*) as commit_count from git_commit_data where github_repository = '"+ repo +"' group by date(commit_date) order by date(commit_date)"
        result = Helper.executeQuery(query, columnNames)
        return result

# GET Number of Pull Requests according to date of a Github Repository (TimeLine Graph)
@api_view(['GET'])
def timeline_pull_request_count(request, repo):
    if request.method == 'GET':
        columnNames = ['pull_request_date', 'pull_request_count']
        query = "select date(request_date) as pull_request_date, count(*) as pull_request_count from git_pull_request_data where github_repository = '"+ repo +"' group by date(pull_request_date) order by date(pull_request_date)"
        result = Helper.executeQuery(query, columnNames)
        return result

# GET Number of Commits of each Contributors according to date (Bar Graph)
@api_view(['GET'])
def bargraph_commit_count(request, repo):
    if request.method == 'GET':
        columnNames1 = ["committer_name","commit_details"]
        query1 = "select distinct(committer_name) as committer_name from git_commit_data where github_repository = '"+ repo +"'"
        columnNames2 = ['week_name', 'commit_count']
        result = Helper.executeQueryForAnalysingCommit(query1, columnNames1, columnNames2, repo)
        return result 

# GET Number of Pull Requests of each Contributors according to date (Bar Graph)
@api_view(['GET'])
def bargraph_pull_request_count(request, repo):
    if request.method == 'GET':
        columnNames1 = ["requester_name","request_details"]
        query1 = "select distinct(requester_login) as requester_name from git_pull_request_data where github_repository = '"+ repo +"'"
        columnNames2 = ['week_name', 'request_count']
        result = Helper.executeQueryForAnalysingPullRequest(query1, columnNames1, columnNames2, repo)
        return result

# GET List of Commit Details of a Contributor of a Github Repository
def commit_details_of_collaborator(request, repo, collaborator):
    if request.method == 'GET':
        columnNames = ['commit_date', 'commit_message','number_of_additions','number_of_deletions','number_of_files_modified','link_to_github']
        query = "select commit_date, commit_message, number_of_additions, number_of_deletions, number_of_files_modified, link_to_github from git_commit_data where github_repository = '"+ repo +"' and committer_name = '"+ collaborator +"' order by date(commit_date)"
        result = Helper.executeQuery(query, columnNames)
        return result

# GET List of Pull Requests Details of a Contributor of a Github Repository
def pull_request_details_of_collaborator(request, repo, collaborator):
    if request.method == 'GET':
        columnNames = ['request_date', 'request_title','request_body','request_url']
        query = "select request_date, request_title, request_body, request_url from git_pull_request_data where github_repository = '"+ repo +"' and requester_login = '"+ collaborator +"' order by date(request_date)"
        result = Helper.executeQuery(query, columnNames)
        return result