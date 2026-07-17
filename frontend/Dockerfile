FROM nginx:alpine

WORKDIR app/

COPY index.html script.js style.css /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80