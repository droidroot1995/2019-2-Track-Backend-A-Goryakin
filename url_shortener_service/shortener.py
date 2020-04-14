import select
import socket
import json

from bitlyshortener import Shortener

def shorten_address(url):
    tokens_pool = ['a2039c392dd9545fc3df1002a4441d9dfc534797']
    shortener = Shortener(tokens=tokens_pool, max_cache_size=8192)
    
    urls = [url]
    
    result = shortener.shorten_urls_to_dict(urls)
    
    return result

def get_non_blocking_socket_server(addr, max_conn):
    
    server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    server.setblocking(False)
    server.bind(addr)
    server.listen(max_conn)
    
    return server

def handle_readables(readables, server, inputs, outputs, results):
    for res in readables:
        if res is server:
            conn, cli_addr = res.accept()
            conn.setblocking(False)
            inputs.append(conn)
            
            print(f'new conn from {cli_addr}')
            
        else:
            dat = ''
            
            try:
                dat = res.recv(1024)
                
            except ConnectionResetError:
                pass
            
            if dat:
                print(f'getting data: {dat}')
                
                if res not in outputs:
                    outputs.append(res)
                    
                idx = outputs.index(res)
                results[str(idx)] = shorten_address(dat.decode(encoding='UTF-8'))
                    
            else:
                clear_resource(res, inputs, outputs)
                
def handle_writables(writables, inputs, outputs, results):
    for res in writables:
        try:
            idx = writables.index(res)
            res.send(bytes(json.dumps(results[str(idx)]), encoding='UTF-8'))
            
        except OSError:
            clear_resource(res, inputs, outputs)
    

def clear_resource(res, inputs, outputs):
    
    if res in outputs:
        outputs.remove(res)
        
    if res in inputs:
        inputs.remove(res)
        
    res.close()
    
def main():
    inputs = []
    outputs = []
    results = {}
    max_conn = 20
    addr = ('0.0.0.0', 7000)
    
    serv_sock = get_non_blocking_socket_server(addr, max_conn)
    inputs.append(serv_sock)
    
    print("server is running, please, press ctrl+c to stop")
    
    try:
        while inputs:
            readables, writables, exceptional = select.select(inputs, outputs, inputs)
            handle_readables(readables, serv_sock, inputs, outputs, results)
            handle_writables(writables, inputs, outputs, results)
            
    except KeyboardInterrupt:
        clear_resource(serv_sock, inputs, outputs)
        print("Server stopped! Thank you for using!")
        
        
if __name__ == '__main__':
    main()