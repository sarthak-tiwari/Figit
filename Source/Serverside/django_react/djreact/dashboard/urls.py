from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^repos/(?P<username>[A-Za-z0-9_@./#&+-]*)/',views.repository_list, name = "list"),
    url(r'^repos_collaborators/(?P<repo>[A-Za-z0-9_@./#&+-]*)/',views.repository_collaborators, name = "collaborators"),
    url(r'^commit_count/(?P<repo>[A-Za-z0-9_@./#&+-]*)/',views.commit_count, name = "commit_count"),
    url(r'^commit/additions_count/(?P<repo>[A-Za-z0-9_@./#&+-]*)/',views.commit_additions_count, name = "commit_additions_count"),
    url(r'^commit/deletions_count/(?P<repo>[A-Za-z0-9_@./#&+-]*)/',views.commit_deletions_count, name = "commit_deletions_count"),
    url(r'^commit/files_modified_count/(?P<repo>[A-Za-z0-9_@./#&+-]*)/',views.commit_files_modified_count, name = "commit_files_modified_count"),
    url(r'^pull_requests/raise_count/(?P<repo>[A-Za-z0-9_@./#&+-]*)/',views.pull_requests_raise_count, name = "pull_requests_raise_count"),
    url(r'^pull_requests/review_count/(?P<repo>[A-Za-z0-9_@./#&+-]*)/',views.pull_requests_review_count, name = "pull_requests_review_count"),   
    url(r'^pull_requests/raise_details/(?P<repo>[A-Za-z0-9_@./#&+-]*)/(?P<req_id>[0-9]*)/',views.pull_requests_raise_details, name = "pull_requests_raise_details"),
    url(r'^pull_requests/review_details/(?P<repo>[A-Za-z0-9_@./#&+-]*)/(?P<req_id>[0-9]*)/',views.pull_requests_review_details, name = "pull_requests_review_details"),
    url(r'^timeline/commit_count/(?P<repo>[A-Za-z0-9_@./#&+-]*)/',views.timeline_commit_count, name = "timeline_commit_count"),
    url(r'^timeline/pull_request_count/(?P<repo>[A-Za-z0-9_@./#&+-]*)/',views.timeline_pull_request_count, name = "timeline_pull_request_count"),
    url(r'^bargraph/commit_count/(?P<repo>[A-Za-z0-9_@./#&+-]*)/',views.bargraph_commit_count, name = "bargraph_commit_count"),
    url(r'^bargraph/pull_request_count/(?P<repo>[A-Za-z0-9_@./#&+-]*)/',views.bargraph_pull_request_count, name = "bargraph_pull_request_count"),
]


