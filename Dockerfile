FROM node:14-alpine as build-stage

LABEL maintainer=1271250334@qq.com

ENV NODE_ENV=prodution
ENV HOST 0.0.0.0

# 创建一个工作目录
WORKDIR /app

COPY . .

# 安装依赖
RUN npm install -g cnpm --registry=https://registry.npm.taobao.org
RUN cnpm install

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]
