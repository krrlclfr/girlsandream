# Use Node 18 for stability
FROM node:18

# Set working directory to server folder
WORKDIR /app/server

# Copy only server package.json & package-lock.json first
COPY server/package*.json ./

# Install all dependencies (including devDependencies like TypeScript)
RUN npm install

# Copy the server source code
COPY server/ ./

# Build TypeScript
RUN npx tsc

# Expose port (Render dynamic port)
EXPOSE 10000

# Start the server
CMD ["node", "dist/server.js"]