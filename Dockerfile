# For building stage 
FROM node:18-alpine AS builder 
WORKDIR /app
COPY package*.json ./
RUN npm install 
COPY . . 
RUN npm run build 

#For deployment stage 
FROM nginx:latest
COPY --FROM=builder /app/dist /user/share/nginx/html
EXPOSE 80
CMD ["nginx","-g","-daemon off"]

