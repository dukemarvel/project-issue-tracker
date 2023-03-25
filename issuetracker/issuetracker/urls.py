"""issuetracker URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from rest_framework_mongoengine import routers
#from issuetrackerapp import api
from issuetrackerapp.views import IssueListCreateView, IssueRetrieveUpdateDestroyView

#router = routers.DefaultRouter()
#router.register(r'issues', api.IssueViewSet, 'issue')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/issues/', IssueListCreateView.as_view(), name='issue-list-create'),
    path('api/issues/<str:pk>/', IssueRetrieveUpdateDestroyView.as_view(), name='issue-detail'),
    #path('api/', include(router.urls)),
]
