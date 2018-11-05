from django.db import models

# Create your models here.
class User_Repositories(models.Model):
    application_username = models.CharField(max_length=100)
    repository_link = models.CharField(max_length=200)
    repository_name = models.CharField(max_length=200)
    cache_status = models.SmallIntegerField()

class Repository_Collaborators(models.Model):
    application_username = models.CharField(max_length=100)
    repository_link = models.CharField(max_length=200)
    repository_name = models.CharField(max_length=200)
    collaborator_username = models.CharField(max_length=100)
    collaborator_name = models.CharField(max_length=100)

#Commit Data Model for Django
class Repository_Commit_Data(models.Model):
    repository_link = models.CharField(max_length=200)
    commiterName = models.CharField(max_length=200)
    commitDate = models.DateTimeField()
    commitMessage = models.CharField(max_length=200)
    numberOfAdditions = models.IntegerField()
    numberOfDeletions = models.IntegerField()
    filesModified = models.IntegerField()