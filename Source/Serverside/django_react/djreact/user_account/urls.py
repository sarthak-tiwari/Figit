from django.conf.urls import url
from django.contrib.auth.views import LogoutView
from .views import (
    signup,
    UserCreateAPIView,
    UserLoginAPIView
)

urlpatterns = [
    url(r'^signup/',signup),
    url(r'^register/$', UserCreateAPIView.as_view(), name='register'),
    url(r'^login/$', UserLoginAPIView.as_view(), name='login'),
    url(r'^logout/$', LogoutView.as_view(), name='logout'),
]
