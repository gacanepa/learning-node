FROM node:18-alpine3.19
RUN adduser -D app
USER app
WORKDIR /app
COPY 001-simple-web-server.js constants.js package.json app/
CMD ["npm", "start"]
EXPOSE 3000
