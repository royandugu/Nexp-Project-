from django.urls import path
from django.urls.conf import include
from authentication.views import login_request, login_view, logout_user, register, register_view

urlpatterns = [
    path('login', login_view, name='login'),
    path('loggin_in', login_request, name='login_request'),
    path('register', register_view, name='register'),
    path('registering_in', register, name='register_request'),
    path('logout', logout_user, name='logout'),
]
