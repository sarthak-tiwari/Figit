from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

from django.shortcuts import render
from .models import User_Repositories
from .serializers import User_Repositories_Serializer

# Create your views here.
@api_view(['GET','POST'])
def repository_list(request):
    #repos = User_Repositories.objects.all()
    #return render(request,'repository_list.html',{'repos':repos})
    if request.method == 'GET':
        repos = User_Repositories.objects.all()
        serializer = User_Repositories_Serializer(repos,many=True)
        return Response(serializer.data)
