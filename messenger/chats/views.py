from django.shortcuts import render
from django.http import JsonResponse, HttpResponseNotAllowed
from django.views.decorators.csrf import csrf_exempt
from chats.models import Chat, Member

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
    
    
@csrf_exempt
def create_personal_chat(request):
    
    if request.method =='POST':
        
        uid  = request.POST['user_id']
        target_user_id = request.POST['target_user_id']
        
        member1_chat_set = set(Member.objects.filter(user_id=uid).values_list('chat_id'))
        member2_chat_set = set(Member.objects.filter(user_id=target_user_id).values_list('chat_id'))
        
        union_chats = list(member1_chat_set & member2_chat_set)
        
        if len(union_chats) != 0:
            for c in union_chats:
                chat = Chat.objects.filter(id=c)
                
                if chat.is_group_chat == False:
                    # return JsonResponse({'chat': chat})
                    return JsonResponse()
            
        chat = Chat()
        chat.is_group_chat = False
        chat.topic = ''
        chat.last_message = ''
        chat.save()
        
        user_id  = request.POST['user_id']
        target_user_id = request.POST['target_user_id']
        
        member1 = Member()
        member1.user_id = uid
        member1.chat_id = chat.id
        member1.save()
                
        member2 = Member()
        member2.user_id = target_user_id
        member2.chat_id = chat.id
        member2.save()
        
        # return JsonResponse({'chat': chat})
        return JsonResponse()
    else:
        return HttpResponseNotAllowed(['GET'])
    
    
@csrf_exempt
def user_chat_list(request, uid):
    if request.method == 'GET':
        chat_lst = []
        members = Member.objects.filter(user_id=uid)
        
        for member in members:
            chat_lst.append(Chat.objects.filter(id=member['chat_id']))
        
        # return JsonResponse({'chats': chat_lst})
        return JsonResponse()
    else:
        return HttpResponseNotAllowed(['GET'])
        