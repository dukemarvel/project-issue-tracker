from django.shortcuts import render, redirect, get_object_or_404
from django.http import HttpResponse
from .models import Issue
from .forms import IssueForm

def issue_list(request):
    issues = Issue.objects.all()
    return render(request, 'issuetracker/issue_list.html', {'issues': issues})

def issue_filter(request, status):
    issues = Issue.objects.filter(status=status)
    return render(request, 'issuetracker/issue_list.html', {'issues': issues})

def issue_add(request):
    if request.method == 'POST':
        form = IssueForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('issue_list')
    else:
        form = IssueForm()
    return render(request, 'issuetracker/issue_form.html', {'form': form})

def issue_edit(request, pk):
    issue = get_object_or_404(Issue, pk=pk)
    if request.method == 'POST':
        form = IssueForm(request.POST, instance=issue)
        if form.is_valid():
            form.save()
            return redirect('issue_list')
    else:
        form = IssueForm(instance=issue)
    return render(request, 'issuetracker/issue_form.html', {'form': form})

def issue_delete(request, pk):
    issue = get_object_or_404(Issue, pk=pk)
    if request.method == 'POST':
        issue.delete()
        return redirect('issue_list')
    return render(request, 'issuetracker/issue_confirm_delete.html', {'issue': issue})
