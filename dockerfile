# You should always specify a full version here to ensure all of your developers
# are running the same version of Node.
FROM node:10.10.0-alpine

# set working directory
RUN mkdir app
WORKDIR /app

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH
ENV NODE_ENV development
# install and cache app dependencies
COPY package.json /app/package.json
RUN npm install --silent

# start app
CMD npm start