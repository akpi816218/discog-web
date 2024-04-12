# Start your image with a node base image
FROM node:21

# The /app directory should act as the main application directory
WORKDIR /app

# Copy the app package and package-lock.json file
COPY package*.json ./

# Copy local directories to the current local directory of our docker image (/app)
COPY ./src ./src
COPY ./public ./public
COPY ./next.config.js ./next.config.js
COPY ./tailwind.config.ts ./tailwind.config.ts
COPY ./tsconfig.json ./tsconfig.json

# Install node packages, install serve, build the app, and remove dependencies at the end
RUN npm urn build

EXPOSE 3001

ENV PORT 3001

# Start the app using serve command
CMD [ "npm", "start" ]