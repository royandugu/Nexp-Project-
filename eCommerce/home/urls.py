from django.urls import path
from authentication.views import login

urlpatterns = [
    path('', login, name='login'),
]
