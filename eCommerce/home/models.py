from django.db import models
from authentication.models import Profile
from django.contrib.auth.models import User

# Create your models here.
class Product(models.Model):
    seller = models.ForeignKey(Profile, on_delete=models.CASCADE, blank=True, null=True) #seller name rakhnai parxa kunai pani product ko
    name = models.CharField(max_length=50)
    image= models.ImageField(upload_to='images', blank=False, default='')
    price = models.FloatField()
    desc = models.TextField()
    stock = models.IntegerField()
    rating = models.IntegerField(blank=True, null=True)

    def __str__(self):
        return self.name

#
# class Cart(models.Model):
#     total = models.IntegerField()
#     product = models.ForeignKey(Product, on_delete=models.CASCADE)