FROM registry.access.redhat.com/ubi7/ubi

RUN curl -sL https://rpm.nodesource.com/setup_12.x | bash -
RUN yum install -y nodejs

RUN mkdir /app
WORKDIR /app

COPY package.json /app
COPY app.js /app
RUN npm install

ENV PORT 3200

EXPOSE 3200

CMD ["npm", "start"]
