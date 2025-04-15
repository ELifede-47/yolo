# /my-frontend/Dockerfile

# Step 1: Use Node 18 as a base image
FROM node:18

# Step 2: Set working directory inside the container
WORKDIR /app

# Step 3: Copy package.json and package-lock.json to install dependencies
COPY package*.json ./
RUN npm install

# Step 4: Copy the rest of the React app code
COPY . .

# Step 5: Build the React app for production
RUN npm run build

# Step 6: Expose port 3000 to the outside world
EXPOSE 3000

# Step 7: Start the React app
CMD ["npm", "start"]
