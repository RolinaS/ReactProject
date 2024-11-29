FROM node
WORKDIR /app
COPY package.json /app
RUN npm install -g nodemon
COPY . /app
CMD ["nodemon","app.js"]