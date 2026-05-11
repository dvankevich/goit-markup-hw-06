FROM nginx:stable-alpine

# Копіюємо всі ваші файли (index.html, css/, js/ тощо) 
# прямо в папку, з якої Nginx роздає контент
COPY . /usr/share/nginx/html

# Якщо у вас є специфічний nginx.conf, розкоментуйте рядок нижче:
# COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]