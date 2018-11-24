from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^repos/(?P<username>[A-Za-z0-9_@./#&+-]*)/',views.repository_list, name = "list"),
    url(r'^repos_collaborators/(?P<repo>[A-Za-z0-9_@./#&+-]*)/',views.repository_collaborators, name = "collaborators"),
    url(r'^commit_count/(?P<repo>[A-Za-z0-9_@./#&+-]*)/',views.commit_count, name = "commit_count"),
    url(r'^additions_count/(?P<repo>[A-Za-z0-9_@./#&+-]*)/',views.additions_count, name = "additions_count"),
    url(r'^deletions_count/(?P<repo>[A-Za-z0-9_@./#&+-]*)/',views.deletions_count, name = "additions_count"),
    url(r'^files_modified_count/(?P<repo>[A-Za-z0-9_@./#&+-]*)/',views.files_modified_count, name = "files_modified_count"),
]


