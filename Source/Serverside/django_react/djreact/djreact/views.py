from django.http import HttpResponse
from django.shortcuts import render

def help(request):
    #return HttpResponse("Help")
    return render(request,"help.html")

def about(request):
    #return HttpResponse("About")
    return render(request,"about.html")
