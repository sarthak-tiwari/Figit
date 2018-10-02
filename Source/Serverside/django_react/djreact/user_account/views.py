from django.shortcuts import render

from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Application_Users
from .serializers import Application_Users_Serializer


# Create your views here.
@api_view(['GET','POST'])
def signup(request):
    #return render(request,"signup.html")
    if request.method == 'GET':
        users = Application_Users.objects.all()
        serializer = Application_Users_Serializer(users, many=True)
        return Response(serializer.data)
    if request.method == 'POST':
        serializer = Application_Users_Serializer(data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def signin(request):
    if request.method == 'POST':
        serializer = Application_Users_Serializer(data = request.data)
        if serializer.is_valid():
            try:
                user = Application_Users.objects.get(
                       email_id=serializer.email_id,
                       application_username=serializer.application_username,
                       password=serializer.password)
                return Response("User Found ! Successful SignIn", status=status.HTTP_200_OK)
            except:
                return Response("User Not Found ! Unsuccessful SignIn", status=status.HTTP_404_NOT_FOUND)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
