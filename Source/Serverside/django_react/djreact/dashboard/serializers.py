from rest_framework.serializers import ModelSerializer
from .models import User_Repositories, Repository_Collaborators

class User_Repositories_Serializer(ModelSerializer):
    class Meta:
        model = User_Repositories
        fields = ('id','application_username','repository_link','repository_name','cache_status')

class  Repository_Collaborators_Serializer(ModelSerializer):
    class Meta:
        model = Repository_Collaborators
        fields = ('id','application_username','repository_link','repository_name','collaborator_username','collaborator_name')
