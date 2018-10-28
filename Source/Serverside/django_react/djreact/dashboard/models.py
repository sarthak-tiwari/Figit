from django.db import models

# Create your models here.
class User_Repositories(models.Model):
    application_username = models.CharField(max_length=100)
    repository_link = models.CharField(max_length=200)
    repository_name = models.CharField(max_length=200)
    cache_status = models.SmallIntegerField()
