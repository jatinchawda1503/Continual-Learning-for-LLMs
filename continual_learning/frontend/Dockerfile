FROM node:latest

COPY . /continual_learning/

WORKDIR /continual_learning/frontend

RUN npm install
RUN npm run build    

EXPOSE 3000

CMD ["npm", "start"]