from rest_framework import serializers
from .models import Application_Users
from django.contrib.auth import get_user_model

class Application_Users_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Application_Users
        fields = ('email_id','application_username','password')

User = get_user_model()

class UserCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = [
            'email',
            'username',
            'password',
            
        ]
        extra_kwargs = {"password":
                            {"write_only": True}
                            }
    def validate(self, data):
        email = data['email']
        user_qs = User.objects.filter(email=email)
        if user_qs.exists():
             raise serializers.ValidationError("This user has already registered.")
        return data

    def create(self, validated_data):
        username = validated_data['username']
        email = validated_data['email']
        password = validated_data['password']
        user_obj = User(
                username = username,
                email = email
            )
        user_obj.set_password(password)
        user_obj.save()
        return validated_data
