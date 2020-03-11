import psycopg2
import psycopg2.extras
from datetime import datetime

def main():

    N = 10
    iter_num = 1000

    try:
        conn = psycopg2.connect("dbname='messenger_test' user='droidroot' host='localhost' password='25091995'")
        print('Connected')
    except psycopg2.Error as err:
        print('Connection error: {}'.format(err))

    try:
        cursor = conn.cursor()

        for i in range(2, N+1):
            cursor.execute('INSERT INTO users_user (id, password, is_superuser, username, first_name, last_name, email, is_staff, is_active, date_joined, avatar) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)', (i, 12345, False, 'user_{}'.format(i), 'user_{}'.format(i), 'user', 'null', False, True, datetime.now(), 'null'))
            conn.commit()

        for i in range(1, N//2 + 1):
            cursor.execute('INSERT INTO chats_chat (id, is_group_chat, topic, last_message) VALUES (%s, %s, %s, %s)', (i, False, 'topic_{}'.format(i), ''))
            conn.commit()

        cursor.execute('INSERT INTO chats_member (id, new_messages, chat_id, user_id) VALUES (%s, %s, %s, %s)', (1, 0, 1, 1))
        conn.commit()

        cursor.execute('INSERT INTO chats_member (id, new_messages, chat_id, user_id) VALUES (%s, %s, %s, %s)', (2, 0, 1, 2))
        conn.commit()

        cursor.execute('INSERT INTO chats_member (id, new_messages, chat_id, user_id) VALUES (%s, %s, %s, %s)', (3, 0, 2, 3))
        conn.commit()

        cursor.execute('INSERT INTO chats_member (id, new_messages, chat_id, user_id) VALUES (%s, %s, %s, %s)', (4, 0, 2, 4))
        conn.commit()

        cursor.execute('INSERT INTO chats_member (id, new_messages, chat_id, user_id) VALUES (%s, %s, %s, %s)', (5, 0, 3, 5))
        conn.commit()

        cursor.execute('INSERT INTO chats_member (id, new_messages, chat_id, user_id) VALUES (%s, %s, %s, %s)', (6, 0, 3, 6))
        conn.commit()

        cursor.execute('INSERT INTO chats_member (id, new_messages, chat_id, user_id) VALUES (%s, %s, %s, %s)', (7, 0, 4, 7))
        conn.commit()

        cursor.execute('INSERT INTO chats_member (id, new_messages, chat_id, user_id) VALUES (%s, %s, %s, %s)', (8, 0, 4, 8))
        conn.commit()

        cursor.execute('INSERT INTO chats_member (id, new_messages, chat_id, user_id) VALUES (%s, %s, %s, %s)', (9, 0, 5, 9))
        conn.commit()

        cursor.execute('INSERT INTO chats_member (id, new_messages, chat_id, user_id) VALUES (%s, %s, %s, %s)', (10, 0, 5, 10))
        conn.commit()

        for i in range(iter_num):

            for u in range(1, N+1):
                chat_id = 1
                if u == 1 or u == 2:
                    chat_id = 1
                elif u == 3 or u == 4:
                    chat_id = 2
                elif u == 5 or u == 6:
                    chat_id = 3
                elif u == 7 or u == 8:
                    chat_id = 4
                else:
                    chat_id = 5

                cursor.execute('INSERT INTO chats_message (content, chat_id, user_id) VALUES (%s, %s, %s)', ('Hello from user_{}'.format(u), chat_id, u))
                conn.commit()

        cursor.close()
        conn.close()

    except psycopg2.Error as err:
        print('Query error: {}'.format(err))

if __name__ == '__main__':
    main()

