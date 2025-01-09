# Use the official Nginx image as the base image
FROM nginx:alpine

# Copy the content of the current directory to /usr/share/nginx/html
COPY index.html /usr/share/nginx/html/index.html
COPY main.js /usr/share/nginx/html/main.js
COPY style.css /usr/share/nginx/html/style.css

# Expose port 80
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]