from django.core.checks import messages
from django.shortcuts import redirect, render
from django.contrib.auth import authenticate, login
from django.contrib.auth.models import User
from authentication.models import Customer, Seller

# Create your views here.
def login_view(request):
    return render(request, 'test.html')

def login_request(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')

        user = authenticate(username = username, password = password)

        if user is not None:
            login(request, user)
            return redirect('home')
        else:
            messages.error(request, 'Invalid username/password')
            return redirect('loginPage')
    return render(request, 'login.html')

def register_customer(request, str):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        confirm_password = request.POST.get('confirmPassword')

        if len(password>=8):
            if (password == confirm_password):
                if User.objects.filter(username = username).exists():
                    messages.error(request, "Username already exists")
                    return redirect('register_view')
                else:
                    user = User.objects.create_user(username = username, password = confirm_password)
                    if (str == "customer"):
                        Customer.objects.create(customer = user)
                    elif (str == "seller"):
                        Seller.objects.create(seller = user)
                    return redirect('login_view')
            else:
                messages.error(request, "Password do not match")
                return redirect('register_view')
        else:
            messages.error(request, "Password must be atleast 8 char long")
            return redirect('register_view')
    return render(request, 'register.html')