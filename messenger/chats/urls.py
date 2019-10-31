from django.urls import path
from django.urls import include
from chats.views import index, chat_detail, chat_page, chat_list

urlpatterns = [
    path('index', index, name='index'),
    path('detail/<int:pk>', chat_detail, name='chat_detail'),
    path('chat/<int:chat_id>', chat_page, name='chat_page'),
    path('list', chat_list, name='chat_list')
]