from __future__ import absolute_import, unicode_literals
import socket

from django.core.mail import EmailMessage, send_mail, get_connection
from application.celery import app
from celery import shared_task

@app.task()
def send_email(subject, sender, recipients, text):
    # send_mail(subject, text, sender, recipients, auth_user='apikey', auth_password='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', fail_silently=False)
    # connection = get_connection()
    
    message = EmailMessage(
        subject,
        text,
        sender,
        recipients,
    )
    
    message.send()
    
    # connection.send_messages([message])
    # connection.close()
    
@app.task()
def get_shortened_url(url):
    address_to_server = ('localhost', 7000)
    
    client = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    client.connect(address_to_server)
    
    client.send(bytes(url, encoding='UTF-8'))
    
    data = client.recv(1024)
    
    data = data.decode(encoding='UTF-8')
    
    client.close()
    
    return data

@app.task()
def get_url_og(url):
    address_to_server = ('localhost', 7070)
    
    client = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    client.connect(address_to_server)
    
    client.send(bytes(url, encoding='UTF-8'))
    
    data = b''
    tmp = client.recv(1024)
    while tmp:
        data += tmp
        tmp = client.recv(1024)
    client.close()
    
    return data