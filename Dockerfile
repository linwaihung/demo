FROM node:14

WORKDIR /app

COPY server.js . 
COPY package.json . 
COPY public ./public

RUN npm install

EXPOSE 3000

ENV NODE_ENV=production
ENV APP_VERSION=1.0.0

CMD ["node", "server.js"]
