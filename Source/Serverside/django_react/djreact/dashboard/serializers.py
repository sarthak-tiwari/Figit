from rest_framework import serializers
from .models import User_Repositories

class User_Repositories_Serializer(serializers.ModelSerializer):
    class Meta:
        model = User_Repositories
        fields = ('application_username','github_repository','cache_status') 
