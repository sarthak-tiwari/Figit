from django.shortcuts import render

from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

from django.contrib.auth import get_user_model
from .serializers import UserCreateSerializer, UserLoginSerializer, UserExistSerializer

from rest_framework.views import APIView
from rest_framework.generics import (
    CreateAPIView,
    DestroyAPIView,
    ListAPIView, 
    UpdateAPIView,
    RetrieveAPIView,
    RetrieveUpdateAPIView,
)
from rest_framework.permissions import (
    AllowAny,
    IsAuthenticated,
    IsAdminUser,
    IsAuthenticatedOrReadOnly,
)

User = get_user_model()

class UserCreateAPIView(CreateAPIView):
    serializer_class = UserCreateSerializer
    queryset = User.objects.all()

class UserLoginAPIView(APIView):
    permission_classes = [AllowAny]
    serializer_class = UserLoginSerializer
    
    def post(self, request, *args, **kwargs):
        data = request.data
        serializer = UserLoginSerializer(data=data)
        if serializer.is_valid(raise_exception=True):
            new_data = serializer.data
            return Response(new_data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class UserExistAPIView(APIView):
    serializer_class = UserExistSerializer
    
    def post(self, request, *args, **kwargs):
        data = request.data
        serializer = UserExistSerializer(data=data)
        if serializer.is_valid(raise_exception=True):
            new_data = serializer.data
            if new_data["email"] == "NOT_EXISTS":
                return Response("false", status=status.HTTP_200_OK)
            else:
                return Response("true", status=status.HTTP_200_OK)
        return Response("false", status=status.HTTP_400_BAD_REQUEST)
