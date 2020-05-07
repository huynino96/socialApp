FROM node:latest

## Create app dir
# RUN mkdir -p /usr/src/app

WORKDIR '/app'

COPY package.json .

RUN npm install

# ADD src /usr/src/app/src

# ADD public /usr/app/public

# RUN npm run build   

COPY . .
CMD ["npm", "start"]