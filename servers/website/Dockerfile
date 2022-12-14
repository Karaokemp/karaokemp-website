FROM node:14

RUN mkdir /app
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .

EXPOSE 80
CMD ["node", "index.js"]