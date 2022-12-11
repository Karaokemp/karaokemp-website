FROM node: 14

# Make app directory in the container.
RUN MKDIR /app

# Copy whole code to app directory.
COPY Code/build/ /app

# Copy package.json app directory.
COPY package.json /app

# make app directory as the working directory.
WORKDIR /app

# Install dependencies.
RUN npm install -only=production

# Expose the port
EXPOSE 8080

# Start the process
CMD ["npm", "start"]