FROM node:18.13-alpine AS build
WORKDIR /app
COPY packaje.json
RUN npm install
COPY .  .
RUN npm run build --prod


FROM nginx:1.17.1-alpine AS prod-stage
COPY --from=build /app/dist/angular-docker /usr/share/ng
EXPOSE 80
CMD ["nginx","-g","daemon off;"]
