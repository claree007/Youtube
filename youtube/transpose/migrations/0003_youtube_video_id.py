# Generated by Django 2.1.7 on 2019-08-27 10:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('transpose', '0002_auto_20190827_1221'),
    ]

    operations = [
        migrations.AddField(
            model_name='youtube',
            name='video_id',
            field=models.CharField(default=None, max_length=15),
        ),
    ]
