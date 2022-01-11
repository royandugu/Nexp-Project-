from django.urls import path
from home.views import addProduct, addProductPage, index, seller

urlpatterns = [
    path('', index, name='home'),
    path('seller', seller, name='seller'),
    path('add-product', addProductPage, name='addProductPage'),
    path('product-added', addProduct, name='addProduct')
]
