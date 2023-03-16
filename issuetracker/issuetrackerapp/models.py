from djongo import models

class Issue(models.Model):
    title = models.CharField(max_length=255)
    owner = models.CharField(max_length=255)
    status_choices = [
        ('OPEN', 'Open'),
        ('IN_PROGRESS', 'In Progress'),
        ('RESOLVED', 'Resolved'),
    ]
    status = models.CharField(max_length=20, choices=status_choices)
    created_date = models.DateTimeField(auto_now_add=True)
    effort_required = models.PositiveIntegerField()
    estimated_completion_date = models.DateField()

    def __str__(self):
        return self.title
