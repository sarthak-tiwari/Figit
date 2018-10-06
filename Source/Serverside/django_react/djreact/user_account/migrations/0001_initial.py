# Generated by Django 2.1.1 on 2018-10-05 06:43

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Application_Users',
            fields=[
                ('email_id', models.EmailField(max_length=100, primary_key=True, serialize=False)),
                ('application_username', models.CharField(max_length=100, unique=True)),
                ('password', models.CharField(max_length=100)),
            ],
        ),
    ]
