from django.contrib import admin
from django.urls import path
from blogCrias_app import views

urlpatterns = [
    path("", views.home, name="home"),
    path('admin/', admin.site.urls) # pra ir pra pág do admin
]
