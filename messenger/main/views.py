from django.shortcuts import render
from django.core.exceptions import PermissionDenied
from django.contrib.auth import authenticate
from django.contrib.auth import login as auth_login
from django.http import HttpResponseRedirect
from django.views.decorators.http  import require_GET, require_POST
from django.contrib.auth.decorators import login_required
from main.forms import LoginForm
# Create your views here.

def login(request):
    form = LoginForm()
    context = {'form' : form}
    return render(request, 'login.html', context)

def legacy_login(request):
    
    try:
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(username=username, password=password)
        print(user)
        
        if user is not None:
            auth_login(request, user)
            return HttpResponseRedirect('/')
        else:
            return HttpResponseRedirect('/login/')
    except:
        return HttpResponseRedirect('/')
        


@login_required
def home(request):
    return render(request, 'home.html')
