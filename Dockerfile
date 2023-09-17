# Use the official Node.js 16 image based on Debian Buster
FROM node:16-buster-slim

# Install necessary system dependencies
RUN apt-get update && \
    apt-get install -y chromium traceroute && \
    chmod 755 /usr/bin/chromium && \
    rm -rf /var/lib/apt/lists/*

# Set the working directory to /app
WORKDIR /app

# Copy only package.json and yarn.lock first for caching
COPY package.json yarn.lock ./

# Install Node.js packages using Yarn
RUN yarn install --frozen-lockfile && \
    rm -rf /app/node_modules/.cache

# Copy the rest of the application code
COPY . .

# Add the missing dev dependency to resolve babel-preset-react-app warning
RUN yarn add --dev @babel/plugin-proposal-private-property-in-object

# Build the application
RUN yarn build

# Expose port 3000 (change this if your app listens on a different port)
EXPOSE 3000

# Set an environment variable for the Chromium path
ENV CHROME_PATH='/usr/bin/chromium'

# Define the default command to start your application
CMD ["yarn", "serve"]
