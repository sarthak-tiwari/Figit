from django.shortcuts import render
from .models import User_Repositories

# Create your views here.
def repository_list(request):
    repos = User_Repositories.objects.all()
    return render(request,'repository_list.html',{'repos':repos})
