from django.urls import path, include
from rest_framework import routers
from .views import issue_list, issue_filter, issue_add, issue_edit, issue_delete
from .api import IssueViewSet

router = routers.DefaultRouter()
router.register(r'issues', IssueViewSet)

urlpatterns = [
    path('', issue_list, name='issue_list'),
    path('filter/<str:status>/', issue_filter, name='issue_filter'),
    path('add/', issue_add, name='issue_add'),
    path('edit/<int:pk>/', issue_edit, name='issue_edit'),
    path('delete/<int:pk>/', issue_delete, name='issue_delete'),
    path('api/', include(router.urls)),
]
