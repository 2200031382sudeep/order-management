# Stage 1: Build the React app
FROM node:18 AS build

WORKDIR /app

# Copy package files first for efficient caching
COPY package*.json ./

RUN npm install

# Copy all frontend source files
COPY . .

# Build the React app for production
RUN npm run build

# Stage 2: Serve the app with Nginx
FROM nginx:alpine

# Copy build output from Stage 1 into Nginx
COPY --from=build /app/build /usr/share/nginx/html

# Copy a default nginx config (optional, improves React Router support)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80 for the frontend
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
