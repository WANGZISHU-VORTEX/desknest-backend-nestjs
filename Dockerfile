FROM node:24 AS builder

WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
COPY .env.example .env
RUN npm run build

FROM node:24 AS production

WORKDIR /app
COPY --from=builder /app/dist /app/dist
COPY --from=builder /app/node_modules /app/node_modules
COPY --from=builder /app/package*.json /app/
COPY --from=builder /app/.env /app/

EXPOSE 3000
CMD ["node", "dist/src/main.js"]