from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^repos/(?P<username>\w{0,50})$',views.repository_list),
    #url(r'^/repo_details$',views.repository_details),
]
