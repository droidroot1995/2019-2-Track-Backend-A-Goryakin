FROM python:3.7
RUN mkdir /messenger/
ADD ./messenger /messenger
RUN pip install -r /messenger/requirements.txt
WORKDIR /messenger
EXPOSE 8000
CMD ["gunicorn", "--chdir", "application", "--certfile=/messenger/dev.crt", "--keyfile=/messenger/dev.key", "--bind", ":8000", "application.wsgi:application"]
#CMD ["python", "manage.py", "runsslserver", "0.0.0.0:8000"]

