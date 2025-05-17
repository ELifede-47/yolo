# Stage 1: Build
FROM node:14 AS build

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .

# ✅ Stage 2: Production with Node + npm already included
FROM node:14-alpine

WORKDIR /app

# Copy app from build stage
COPY --from=build /usr/src/app /app

EXPOSE 5000

CMD ["node", "server.js"]
