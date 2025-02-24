FROM node:latest AS base
WORKDIR /app
RUN npm install -g npm
COPY package.json package-lock.json ./

RUN npm install

COPY . .
RUN npm run build

FROM node:latest as release
WORKDIR /app
RUN npm install -g npm

COPY --from=base /app/node_modules ./node_modules
COPY --from=base /app/package.json ./package.json
COPY --from=base /app/.next ./.next

EXPOSE 3000

CMD ["npm", "start"]