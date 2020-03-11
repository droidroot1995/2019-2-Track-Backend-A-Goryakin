class LFUCache():

    def __init__(self, capacity=10):
        self.cache = {}
        self.obj_lst = []
        self.capacity = capacity

    def get(self, key):
        if key in self.cache:
            return self.cache[key]['elem']
        else:
            return ''

    def set(self, key, value):
        if key in self.cache:
            self.obj_lst.remove(self.cache[key]['elem'])

        else:
            if len(self.obj_lst) == self.capacity:
                tmp_key = ''
                min_li = self.cache[list(self.cache.keys())[0]]['lindex']
                for k, v in self.cache.items():
                    if v['lindex'] <= min_li:
                        min_li = v['lindex']
                        tmp_key = k
                        break
                self.del_i(tmp_key)
                '''self.obj_lst.remove(self.cache[tmp_key]['elem'])
                del self.cache[tmp_key]'''


        self.obj_lst.append(value)

        if key in self.cache:
            self.cache[key]['lindex'] += 1
        else:
            self.cache[key] = {}
            self.cache[key]['lindex'] = 1

        self.cache[key]['elem'] = self.obj_lst[-1]


    def del_i(self, key):
        if key in self.cache:
            self.obj_lst.remove(self.cache[key]['elem'])
            del self.cache[key]


def main():
    cache = LFUCache(100)
    cache.set('Jesse', 'Pinkman')
    cache.set('Walter', 'White')
    cache.set('Jesse', 'James')

    print(cache.get('Jesse'))
    cache.del_i('Walter')
    print(cache.get('Walter'))
    return


if __name__ == "__main__":
    main()
