from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

from django.shortcuts import render
from .models import User_Repositories, Repository_Collaborators, Repository_Commit_Data
from .serializers import User_Repositories_Serializer, Repository_Collaborators_Serializer, commitCountInfo_Serializer

from django.db import connection
import json
from django.http import JsonResponse
from django.core import serializers
from django.http import HttpResponse

from .helper.helper import Helper

# Create your views here.
@api_view(['GET','POST'])
def repository_list(request, username):
    #repos = User_Repositories.objects.all()
    #return render(request,'repository_list.html',{'repos':repos})
    if request.method == 'GET':
        query = "SELECT * FROM dashboard_user_repositories WHERE application_username='" + username + "'"
        repos = User_Repositories.objects.raw(query)
        #repos = User_Repositories.objects.all()
        serializer = User_Repositories_Serializer(repos,many=True)
        return Response(serializer.data)
    if request.method == 'POST':
        serializer = User_Repositories_Serializer(data = request.data, many = True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def repository_list_by_user(request, user):
    #repos = User_Repositories.objects.all()
    #return render(request,'repository_list.html',{'repos':repos})
    if request.method == 'GET':
        columnNames = ['committer_name', 'commit_count']
        query = "SELECT committer_name, COUNT(*) AS commit_count FROM git_commit_data GROUP BY committer_name ORDER BY commit_count DESC"
        result = Helper.executeQuery(query, columnNames)
        return result

@api_view(['GET'])
def repository_collaborators(request, repository_id):
    query1 = "SELECT * FROM dashboard_user_repositories WHERE id ='" +repository_id+"'"
    repo = User_Repositories.objects.raw(query1)[0]

    query2 = "SELECT * FROM dashboard_repository_collaborators WHERE repository_link ='" + repo.repository_link +"'"
    if request.method == 'GET':
        collaborators = Repository_Collaborators.objects.raw(query2)
        serializer = Repository_Collaborators_Serializer(collaborators,many=True)
        return Response(serializer.data)
    
#getCommitDataForRepository
@api_view(['GET'])
def getCommitDataForRepository(request, repository_id):
    #(repo, collaboratorList) = getCollaboratorList(repository_id)
    getInfoByRepoIdSql = "SELECT * FROM dashboard_user_repositories WHERE id ='" +str(repository_id)+"'"
    repo = User_Repositories.objects.raw(getInfoByRepoIdSql)[0]
    
    getInfoByRepoLinkSql = "SELECT * FROM dashboard_Repository_Commit_Data WHERE repository_link ='" + repo.repository_link +"'"
    
    collaboratorList = Repository_Commit_Data.objects.raw(getInfoByRepoLinkSql)

    serializer = commitCountInfo_Serializer(collaboratorList, many = True)
    return Response(serializer.data)