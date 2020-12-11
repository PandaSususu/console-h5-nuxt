FROM node:14-alpine as build-stage

LABEL maintainer=1271250334@qq.com

# 创建一个工作目录
WORKDIR /app

COPY .nuxt .
COPY package.json .
COPY nuxt.config.js .

# 安装依赖
RUN npm install  --registry=https://registry.npm.taobao.org

EXPOSE 3000

CMD ["npm", "run", "start"]
