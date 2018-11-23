from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^repos/(?P<username>[A-Za-z0-9_@./#&+-]*)/',views.repository_list, name = "list"),
    url(r'^repos_collaborators/(?P<repo>[A-Za-z0-9_@./#&+-]*)/',views.repository_collaborators, name = "collaborators"),
]


