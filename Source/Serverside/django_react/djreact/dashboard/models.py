from django.db import models

# Create your models here.
class User_Repositories(models.Model):
    application_username = models.CharField(max_length=100)
    github_repository = models.CharField(max_length=200)
    cache_status = models.SmallIntegerField()
