from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^repos/',views.repository_list),
    #url(r'^/repo_details$',views.repository_details),
]
