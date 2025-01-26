# Use the official Node.js 20 image as the base image
FROM node:20

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files into the container
COPY . .

# Set environment variables
ENV PORT=4000

# Expose the container's port 4000
EXPOSE 4000

# Use npm script 'startall' to run both servers
CMD ["npm", "run", "startall"]
