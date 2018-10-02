from rest_framework import serializers
from .models import Application_Users

class Application_Users_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Application_Users
        fields = ('email_id','application_username','password')
