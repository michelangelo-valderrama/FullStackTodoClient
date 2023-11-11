FROM nginx:latest
COPY nginx.conf /etc/nginx/nginx.conf
COPY /dist/web /usr/share/nginx/html