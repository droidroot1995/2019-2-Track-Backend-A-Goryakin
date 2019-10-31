from django.db import models
from users.models import User

# Create your models here.


class Chat(models.Model):
    is_group_chat = models.BooleanField()
    topic = models.TextField(max_length=64)
    last_message = models.TextField(max_length=256)
    

class Message(models.Model):
    chat = models.ForeignKey(to=Chat, on_delete=models.CASCADE)
    user = models.ForeignKey(to=User, on_delete=models.CASCADE)
    content = models.TextField(max_length=256)
    added_at = models.DateTimeField()
    

class Attachment(models.Model):
    chat = models.ForeignKey(to=Chat, on_delete=models.CASCADE)
    user = models.ForeignKey(to=User, on_delete=models.CASCADE)
    message = models.ForeignKey(to=Message, on_delete=models.CASCADE)
    att_type = models.TextField(max_length=64)
    url = models.TextField(max_length=128)
    

class Member(models.Model):
    user = models.ForeignKey(to=User, on_delete=models.CASCADE)
    chat = models.ForeignKey(to=Chat, on_delete=models.CASCADE)
    new_messages = models.IntegerField()
    last_read_message = models.ForeignKey(to=Message, on_delete=models.CASCADE)
