# Етап 1: Збірка проекту
FROM node:20-slim AS build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Етап 2: Роздача статики через Nginx
FROM nginx:stable-alpine
# Копіюємо результати збірки Vite (папка dist) у папку Nginx
COPY --from=build-stage /app/dist /usr/share/nginx/html
# Копіюємо конфіг для підтримки SPA (якщо у вас є роутинг)
COPY --from=build-stage /app/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]