# Use official Node.js image
FROM node:18

# Create app directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all files
COPY . .

# Expose port (Render uses dynamic port)
EXPOSE 10000

# Start the app
CMD ["npm", "start"]