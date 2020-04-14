FROM python:3.7
RUN mkdir /shortener_ms/
ADD . /shortener_ms
RUN pip install -r /shortener_ms/requirements.txt
WORKDIR /shortener_ms
EXPOSE 7000
CMD python /shortener_ms/shortener.py

