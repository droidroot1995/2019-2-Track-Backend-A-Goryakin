import subprocess
import os
import glob
from time import strftime


def main():

    n = 1
    db_name = 'messenger'

    dir_content = os.listdir()
    if not 'backups' in dir_content:
        print('Backups dir was not found. Creating backups dir.')
        os.mkdir('backups') 
        print('Backups dir was created')

    if 'backuper.config' in dir_content:
        with open('backuper.config', 'r') as bc:
            print('Initialization from config started')
            lines = bc.readlines()
            if len(lines) == 2:
                n = int(lines[0].split('=')[1])
                db_name = lines[1].split('=')[1]
            elif len(lines) == 1:
                n = int(lines[0].split('=')[1])
            print('Initialization from config ended')
    else:
        print('Config file was not found. Using default settings')

    

    user = 'droidroot'
    password = '25091995'
    host = 'localhost'
    backup_dir = os.getcwd() + '/backups/'

    dump_cmd = 'pg_dump -U %s -Z 9 -f %s -F c %s'

    os.putenv('PGPASSWORD', password)

    db_list = subprocess.Popen('echo "select datname from pg_database" | psql -t -U %s -h %s template1' % (user, host) , shell=True, stdout=subprocess.PIPE).stdout.readlines()

    db_list = [name.decode('utf-8').strip() for name in db_list]

    curr_time = str(strftime("%Y-%m-%d-%H-%M-%S"))

    if db_name in db_list:
        print('Backup started')
        cmd = dump_cmd % (user, backup_dir + db_name + '_' + curr_time + '.pgdump', db_name)
        subprocess.call(cmd, shell=True)
        print('Backup ended')
    else:
        print('Database not found. Backup failed')

    files_list = glob.glob(backup_dir + str(db_name) + '*.pgdump')
    files_list.sort(key=lambda x: os.path.getmtime(x))
    
    if len(files_list) > n:
        print('Clearing old backups started')
        remove_lst = files_list[0: (len(files_list) - n)]

        for dump in remove_lst:
            print('Removing backup file: ' + str(dump))
            os.unlink(dump)
            print(str(dump) + ' was removed')

        print('Clearing old backups ended')
        



if __name__ == '__main__':
    main()