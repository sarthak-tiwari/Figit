from django.shortcuts import render
from django.http import HttpResponse
from datetime import datetime
#from django.utils.timezone import datetime
import datetime
from django.shortcuts import render
from django.shortcuts import HttpResponse
from .models import Person
from .forms import LoginForm
from django.core.exceptions import *

"""def hello(request):
   text = "<h1>welcome to my app !</h1>"
   #today = datetime.datetime.now().date()
   #return render(request, "hello.html", {"today" : today})
   return HttpResponse(text)


"""
def hello(request):
   today1 = datetime.datetime.now().date()
   
   daysOfWeek1 = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
   return render(request, 'hello.html',{'today' :today1, 'days_of_week' : daysOfWeek1})


def index(request):
    return render(request, 'form.html')

def search(request):
    str = "<h1>In search</h1>"
    if request.method == "POST":
        search_id = request.POST.get('userId', None)
        try:
            user = Person.objects.get(name = search_id)
            #do something with user
            html = ("<H1>%s</H1>", user)
            return HttpResponse(html)
        except Person.DoesNotExist:
            str = str + "no such userrr"
            #return HttpResponse("no such user")  
    else:
        str = str + "no such user"
        #return HttpResponse("no such user")
        #return render(request, 'form.html')

    return HttpResponse(str)

def login(request):
   username = "not logged in"
   
   if request.method == "POST":
      #Get the posted form
      MyLoginForm = LoginForm(request.POST)
      
      if MyLoginForm.is_valid():
         username = MyLoginForm.cleaned_data['username']
  # else:
   #   MyLoginForm = Loginform()
		
   return render(request, 'loggedin.html', {"username" : username})