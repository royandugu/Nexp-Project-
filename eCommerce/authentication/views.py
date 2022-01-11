from django.core.checks import messages
from django.shortcuts import redirect, render
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
from authentication.models import Profile
from django.contrib import messages
from django.contrib.auth.decorators import login_required

# Create your views here.
def login_view(request):
    return render(request, 'login.html')

def login_request(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')

        user = authenticate(username = username, password = password)

        if (user is not None):
            login(request, user)
            return redirect('home')
        else:
            messages.error(request, 'Invalid username/password')
            return redirect('login')
    return render(request, 'login.html')

@login_required
def logout_user(request):
    logout(request)
    return redirect('home')

def register_view(request):
    return render(request, 'register.html')

def register(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        confirm_password = request.POST.get('confirmPassword')

        if len(password)>=8:
            if (password == confirm_password):
                if User.objects.filter(username = username).exists():
                    messages.error(request, "Username already exists")
                    print("Username already exists")
                    return redirect('register')
                else:
                    user = User.objects.create_user(username = username, password = confirm_password)
                    Profile.objects.create(user = user)
                    return redirect('login')
            else:
                messages.error(request, "Password do not match")
                print("Password dont match")

                return redirect('register')
        else:
            messages.error(request, "Password must be atleast 8 char long")
            print("8 char")
            return redirect('register')
    return render(request, 'register.html')