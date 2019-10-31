import datetime

def handler(env, start_response):

    date = datetime.datetime.now().isoformat()
    #print(date)
    data = date.encode('utf-8') #b'Hello, world!'
    headers = [('Content-Type', 'text/plain'), ('Content-Length', str(len(data)))]
    start_response('200 OK', headers)
    return [data]