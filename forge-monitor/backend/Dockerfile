FROM node:18

WORKDIR /app

# Copy only package files first (leverages Docker cache)
COPY package*.json .

# Install dependencies
RUN npm install

# Copy the rest of your app code
COPY . .

# Expose the app port
EXPOSE 3000

CMD ["node", "server.js"]