# Generated by Django 2.2.5 on 2019-11-19 18:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('chats', '0006_auto_20191119_2144'),
    ]

    operations = [
        migrations.AlterField(
            model_name='attachment',
            name='url',
            field=models.FileField(upload_to='attachmets/'),
        ),
    ]
