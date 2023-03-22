from rest_framework import serializers
from .models import Issue

class IssueSerializer(serializers.ModelSerializer):
    class Meta:
        model = Issue
        fields = ['id', 'title', 'owner', 'status', 'created_date', 'effort_required', 'estimated_completion_date']
