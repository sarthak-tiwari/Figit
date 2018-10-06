from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

from django.shortcuts import render
from .models import User_Repositories
from .serializers import User_Repositories_Serializer

# Create your views here.
@api_view(['GET','POST'])
def createUser(request):
    if request.method == 'POST':
        serializer = User_Repositories_Serializer(data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
