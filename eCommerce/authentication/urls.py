from django.urls import path
from authentication.views import login_request, login_view

urlpatterns = [
    path('login', login_view, name='login'),
    path('loggin_in', login_request, name='login_request'),
]
