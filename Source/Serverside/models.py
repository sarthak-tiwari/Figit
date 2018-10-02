from django.db import models

# Create your models here.
class Person(models.Model):
    userName = models.CharField(max_length=30)
    password = models.CharField(max_length=30)
    emailAddress = models.CharField(max_length=30)