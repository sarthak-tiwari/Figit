from django.db import models

# Create your models here.
class Application_Users(models.Model):
    email_id = models.EmailField(max_length=100, primary_key=True)
    application_username = models.CharField(max_length=100, unique=True)
    password = models.CharField(max_length=100)