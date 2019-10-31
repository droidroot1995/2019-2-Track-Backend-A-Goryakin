from django.db import models

# Create your models here.


class User(models.Model):
    name = models.CharField(max_length=64)
    nick = models.CharField(max_length=32)
    avatar = models.CharField(max_length=128)
    last_online = models.DateTimeField()
