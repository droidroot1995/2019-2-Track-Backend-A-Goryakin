class LRUCache():

    def __init__(self, capacity=10):
        self.cache = {}
        self.obj_lst = []
        self.capacity = capacity

    def get(self, key):
        if key in self.cache:
            return self.cache[key]
        else:
            return ''

    def set(self, key, value):
        if key in self.cache:
            self.obj_lst.remove(self.cache[key])

        else:
            if len(self.obj_lst) == self.capacity:
                tmp_key = ''
                for k, v in self.cache.items():
                    if v == self.obj_lst[0]:
                        tmp_key = k
                        break
                self.del_i(tmp_key)
                '''self.obj_lst.remove(self.cache[tmp_key])
                del self.cache[tmp_key]'''
        
        self.obj_lst.append(value)
        self.cache[key] = self.obj_lst[-1]

    def del_i(self, key):
        if key in self.cache:
            self.obj_lst.remove(self.cache[key])
            del self.cache[key]


def main():
    cache = LRUCache(100)
    cache.set('Jesse', 'Pinkman')
    cache.set('Walter', 'White')
    cache.set('Jesse', 'James')

    print(cache.get('Jesse'))
    cache.del_i('Walter')
    print(cache.get('Walter'))
    return


if __name__ == "__main__":
    main()
