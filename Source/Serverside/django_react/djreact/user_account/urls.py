from django.conf.urls import url
from django.contrib.auth.views import LogoutView
from .views import (
    UserCreateAPIView,
    UserLoginAPIView,
    UserExistAPIView
)

urlpatterns = [
    url(r'^register/$', UserCreateAPIView.as_view(), name='register'),
    url(r'^login/$', UserLoginAPIView.as_view(), name='login'),
    url(r'^logout/$', LogoutView.as_view(), name='logout'),
    url(r'^user_exists/$', UserExistAPIView.as_view(), name='user_exists'),
]
