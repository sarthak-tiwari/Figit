from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^repos/',views.repository_list, name = "list"),
    url(r'^repos_byuser/(?P<user>[A-Za-z0-9_@./#&+-]*)/',views.repository_list_by_user, name = "list_byUser"),
    url(r'^repos_collaborators/(?P<repository_id>[0-9]*)/',views.repository_collaborators, name = "collaborators"),
]


