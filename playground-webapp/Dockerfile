FROM node:8
ARG NPM_TOKEN
RUN mkdir app
WORKDIR ./app
ADD . .
RUN npm install  --production 
USER node

CMD ["node", "./index.js"]