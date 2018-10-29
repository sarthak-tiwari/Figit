from django.conf.urls import url
from .views import repository_list, repository_list_by_user

urlpatterns = [
    url(r'^repos/',repository_list, name = "list"),
    url(r'^repos_byuser/(?P<user>[A-Za-z0-9_@./#&+-]*)/',repository_list_by_user, name = "list_byUser"),
    #url(r'^/repo_details$',views.repository_details),
]


