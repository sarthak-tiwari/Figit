from django.conf.urls import url
from .views import (
    signup,
    UserCreateAPIView
)

urlpatterns = [
    url(r'^signup/',signup),
    url(r'^register/$', UserCreateAPIView.as_view(), name='register'),
]
