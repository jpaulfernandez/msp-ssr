# You should always specify a full version here to ensure all of your developers
# are running the same version of Node.
FROM node:10.10.0-alpine

WORKDIR /usr/src/app

ENV NODE_ENV development
RUN npm install --silent
COPY . .
# start app
EXPOSE 5000
CMD npm start
# If you are building your code for production
# RUN npm install --only=production

# Bundle app source