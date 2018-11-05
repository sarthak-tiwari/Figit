from rest_framework.serializers import ModelSerializer
from .models import User_Repositories

class User_Repositories_Serializer(ModelSerializer):
    class Meta:
        model = User_Repositories
        fields = ('id','application_username','repository_link','repository_name','cache_status') 
