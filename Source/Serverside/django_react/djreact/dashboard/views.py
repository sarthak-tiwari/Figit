from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

from django.shortcuts import render
from .models import User_Repositories, Repository_Collaborators
from .serializers import User_Repositories_Serializer, Repository_Collaborators_Serializer

# Create your views here.
@api_view(['GET','POST'])
def repository_list(request):
    #repos = User_Repositories.objects.all()
    #return render(request,'repository_list.html',{'repos':repos})
    if request.method == 'GET':
        repos = User_Repositories.objects.all()
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
    query = "SELECT * FROM dashboard_user_repositories WHERE application_username ='" +user+"'"
    if request.method == 'GET':
        repos = User_Repositories.objects.raw(query)
        serializer = User_Repositories_Serializer(repos,many=True)
        return Response(serializer.data)

@api_view(['GET'])
def repository_collaborators(request, repository_name):
    query = "SELECT * FROM dashboard_repository_collaborators WHERE repository_name ='" +repository_name+"'"
    if request.method == 'GET':
        collaborators = Repository_Collaborators.objects.raw(query)
        serializer = Repository_Collaborators_Serializer(collaborators,many=True)
        return Response(serializer.data)
    
