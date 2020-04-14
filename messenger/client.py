import socket

MAX_CONNECTIONS = 20
address_to_server = ('172.19.0.2', 7000)

urls = ['https://paperswithcode.com/sota', 'https://arxiv.org/', 'https://arxiv.org/list/cs.LG/recent', 
        'https://paperswithcode.com/sota', 'https://arxiv.org/', 'https://arxiv.org/list/cs.LG/recent', 
        'https://paperswithcode.com/sota', 'https://arxiv.org/', 'https://arxiv.org/list/cs.LG/recent',
         'https://paperswithcode.com/sota', 'https://arxiv.org/', 'https://arxiv.org/list/cs.LG/recent',
         'https://paperswithcode.com/sota', 'https://arxiv.org/', 'https://arxiv.org/list/cs.LG/recent',
         'https://paperswithcode.com/sota', 'https://arxiv.org/', 'https://arxiv.org/list/cs.LG/recent',
         'https://paperswithcode.com/sota', 'https://arxiv.org/']

clients = [socket.socket(socket.AF_INET, socket.SOCK_STREAM) for i in range(MAX_CONNECTIONS)]
for client in clients:
    client.connect(address_to_server)

for i in range(MAX_CONNECTIONS):
    clients[i].send(bytes(urls[i], encoding='UTF-8'))

for client in clients:
    data = client.recv(1024)
    print(str(data))