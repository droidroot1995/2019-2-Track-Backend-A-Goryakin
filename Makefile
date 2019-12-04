up:
	docker-compose up
build:
	docker-compose build

drop:
	docker-compose rm -s -f

test: up
	docker-compose exec messenger python /messenger/manage.py test

collect_static:
	docker-compose run messenger python /messenger/manage.py collectstatic

migrate: up
	docker-compose exec messenger python /messenger/manage.py migrate

create_su: up
	docker-compose run messenger python /messenger/manage.py createsuperuser
