FROM nginx:1.17.1-alpine
copy /dist/dashboard-covid19 /usr/share/nginx/html
