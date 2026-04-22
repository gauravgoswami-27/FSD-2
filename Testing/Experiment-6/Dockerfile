FROM node:20.19

WORKDIR /app

COPY . .

RUN npm install
RUN npm run build

# CMD ["npm", "run", "preview"]
CMD ["npm", "run", "preview"]