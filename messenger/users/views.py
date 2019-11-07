from django.shortcuts import render
from django.http import JsonResponse, HttpResponseNotAllowed
from django.views.decorators.csrf import csrf_exempt
from users.models import User
# Create your views here.


@csrf_exempt
def index(request):
    if request.method == 'GET':
        return render(request, 'users_index.html')
    else:
        return HttpResponseNotAllowed(['GET'])


@csrf_exempt
def profile_details(request, pk):
    if request.method == 'GET':
        return JsonResponse({'profile': {
            'name': 'Name',
            'avatar': 'avatar',
            'last_online': 'last online'
        }})
    else:
        return HttpResponseNotAllowed(['GET'])


@csrf_exempt
def contacts_list(request):
    if request.method == 'GET':
        return JsonResponse({'contacts': [
            {
                'name': 'Anton',
                'avatar': 'http://localhost/16.jpg',
                'last_online': 'last online 2 hours ago'
            },
            {
                'name': 'Alena',
                'avatar': 'http://localhost/17.jpg',
                'last_online': 'last online 20 minutes ago'
            }
        ]})
    else:
        return HttpResponseNotAllowed(['GET'])
    
    
@csrf_exempt
def search_users(request, name, limit):
    if request.method == 'GET':
        users = User.objects.filter(username__contains=name)[:limit]
        
        # return JsonResponse({'users': users})
        return JsonResponse()
    else:
        return HttpResponseNotAllowed(['GET'])