from django import forms
from .models import Issue

class IssueForm(forms.ModelForm):
    class Meta:
        model = Issue
        fields = ['title', 'owner', 'status', 'effort', 'estimated_completion_date']
        widgets = {
            'estimated_completion_date': forms.DateInput(attrs={'type': 'date'}),
        }
