from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    profile_pic = models.ImageField(upload_to='images', null=True, blank=True)
    contact = models.CharField(max_length=15)
    is_customer = models.BooleanField(default=False)
    is_seller = models.BooleanField(default=False)

    def __str__(self) -> str:
        return self.user.username


#   dont make many table for auth user model
#
# class Customer(models.Model):
#     customer = models.OneToOneField(User, on_delete=models.CASCADE)
#     profile_pic = models.ImageField(upload_to='images', null=True, blank=True)

#     def __str__(self) -> str:
#         return self.customer.username

# class Seller(models.Model):
#     seller = models.OneToOneField(User, on_delete=models.CASCADE)
#     profile_pic = models.ImageField(upload_to='images', null=True, blank=True)
#     contact = models.CharField(max_length=15)

#     def __str__(self) -> str:
#         return self.seller.username