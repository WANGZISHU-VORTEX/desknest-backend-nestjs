FROM node:24

WORKDIR /app
COPY ./ ./
RUN npm install
RUN npm run build

RUN npm list pg || npm install pg

EXPOSE 3000
CMD ["node", "dist/src/main.js"]