from mongoengine import Document, StringField, DateTimeField, IntField, DateField
from mongoengine import connect
db_name = "issuetrackerdb"
connect(db=db_name, host='localhost:27017')
class Issue(Document):
    title = StringField(max_length=255, required=True)
    owner = StringField(max_length=255, required=True)
    status_choices = [
        ('OPEN', 'Open'),
        ('IN_PROGRESS', 'In Progress'),
        ('RESOLVED', 'Resolved'),
    ]
    status = StringField(max_length=20, choices=status_choices, required=True)
    created_date = DateTimeField(required=True)
    effort_required = IntField(required=True)
    estimated_completion_date = DateField(required=True)

    def __str__(self):
        return self.title
