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
            query = "INSERT INTO application_user_repositories ('application_username','repository_url') values ('"+row["application_username"]+"','"+row["repository_url"]+"')"
            with connection.cursor() as cursor:
                cursor.execute(query)
"""
@api_view(['GET'])
def repository_list_by_user(request, user):
    #repos = User_Repositories.objects.all()
    #return render(request,'repository_list.html',{'repos':repos})
    if request.method == 'GET':
        columnNames = ['committer_name', 'commit_count']
        query = "SELECT committer_name, COUNT(*) AS commit_count FROM git_commit_data GROUP BY committer_name ORDER BY commit_count DESC"
        result = Helper.executeQuery(query, columnNames)
        return result
"""

# GET List of Collaborators according to Github Repository.
@api_view(['GET'])
def repository_collaborators(request, repo):
    if request.method == 'GET':
        columnNames = ['github_username', 'github_profile_url', 'github_image_url']
        query = "select p.github_username, p.github_profile_url, p.github_image_url from git_user_profiles as p join git_repository_collaborators as g on p.github_login = g.github_login where g.github_repository = '"+ repo +"'"
        result = Helper.executeQuery(query, columnNames)
        return result

# GET Number of Commits for each Collaborator of a Github Repository
@api_view(['GET'])
def commit_count(request, repo):
    if request.method == 'GET':
        columnNames = ['committer_name', 'commit_count']
        query = "SELECT committer_name, COUNT(*) AS commit_count FROM git_commit_data where github_repository = '"+ repo +"' GROUP BY committer_name ORDER BY commit_count DESC"
        result = Helper.executeQuery(query, columnNames)
        return result
