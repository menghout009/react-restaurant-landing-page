# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install -f

# Copy the rest of the application files to the container
COPY . .

# Build the React app
RUN npm run build

# Expose a port (e.g., 80) for the app to listen on
EXPOSE 80

# Start the React app when the container is run
CMD ["npm", "start"]