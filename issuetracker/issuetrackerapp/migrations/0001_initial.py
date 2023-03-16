# Generated by Django 4.1.7 on 2023-03-16 12:51

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Issue',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255)),
                ('owner', models.CharField(max_length=255)),
                ('status', models.CharField(choices=[('OPEN', 'Open'), ('IN_PROGRESS', 'In Progress'), ('RESOLVED', 'Resolved')], max_length=20)),
                ('created_date', models.DateTimeField(auto_now_add=True)),
                ('effort_required', models.PositiveIntegerField()),
                ('estimated_completion_date', models.DateField()),
            ],
        ),
    ]