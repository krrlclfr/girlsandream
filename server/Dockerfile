FROM node:18

WORKDIR /app

# Copy package files and install ALL dependencies
COPY package*.json ./
RUN npm install

# Copy source files
COPY . .

# ✅ Directly run tsc via node (no permission issues)
RUN node ./node_modules/typescript/bin/tsc

# Expose port (Render dynamic)
EXPOSE 10000

# Start server
CMD ["node", "dist/server.js"]