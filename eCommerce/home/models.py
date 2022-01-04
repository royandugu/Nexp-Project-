from django.db import models
from authentication.models import Seller

# Create your models here.
class Product(models.Model):
    name = models.CharField(max_length=50)
    price = models.FloatField()
    desc = models.TextField()
    stock = models.IntegerField()
    seller = models.ForeignKey(Seller, on_delete=models.CASCADE, blank=False) #seller name rakhnai parxa kunai pani product ko

    def __str__(self):
        return self.name

class Cart(models.Model):
    total = models.IntegerField()
    product = models.ForeignKey(Product, on_delete=models.CASCADE)