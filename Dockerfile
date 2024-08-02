FROM node:20.15.0-bullseye

RUN mkdir /app

WORKDIR ./app

COPY package.json ./
COPY package-lock.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 8080

CMD ["npm", "run", "start"]
