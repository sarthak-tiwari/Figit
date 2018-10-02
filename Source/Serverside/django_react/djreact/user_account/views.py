from django.shortcuts import render

from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Application_Users
from .serializers import Application_Users_Serializer


# Create your views here.
@api_view(['POST'])
def signup(request):
    #return render(request,"signup.html")
    if request.method == 'POST':
        serializer = Application_Users_Serializer(data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        