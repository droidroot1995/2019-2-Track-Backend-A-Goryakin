from django.shortcuts import render
from django.http import JsonResponse, HttpResponseNotAllowed
from django.views.decorators.csrf import csrf_exempt

# Create your views here.
@csrf_exempt
def index(request):
    if request.method == 'GET':
        return render(request, 'chats_index.html')
    else:
        return HttpResponseNotAllowed(['GET'])


@csrf_exempt
def chat_detail(request, pk):
    if request.method == 'GET':
        return JsonResponse({'test' : 'App'})
    else:
        return HttpResponseNotAllowed(['GET'])


@csrf_exempt
def chat_page(request, chat_id):
    if request.method == 'GET':
        return JsonResponse({'chat': {
            'id': chat_id,
            'name': 'Name',
            'last_online': 'Last online',
            'avatar': 'http://localhost/16.jpg',
            'messages': []
        }})
    else:
        return HttpResponseNotAllowed(['GET'])


@csrf_exempt
def chat_list(request):
    if request.method == 'GET':
        return JsonResponse({'chat_list': [
            {
                'id': 1,
                'type': 'single',
                'name': 'Anton',
                'last_online': '3 hours ago',
                'avatar': 'http://localhost/16.jpg',
                'last_message': 'Добрый день!',
                'state': 'sent'
            },
            {
                'id': 2,
                'type': 'single',
                'name': 'Alena',
                'last_online': '20 minutes ago',
                'avatar': 'http://localhost/17.jpg',
                'last_message': 'Добрый вечер!',
                'state': 'sent_read'
            },
        ]})
    else:
        return HttpResponseNotAllowed(['GET'])
