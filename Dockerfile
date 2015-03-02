FROM nginx

COPY app /usr/share/nginx/html

EXPOSE 80

CMD service nginx restart