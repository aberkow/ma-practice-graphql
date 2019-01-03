FROM uconn/node-8-official

COPY prisma-graphql/src /project
COPY prisma-graphql/wait-for-it.sh /project/wait-for-it.sh
COPY prisma-graphql/entrypoint.sh /entrypoint.sh

RUN apk update && apk upgrade && apk add git \
  && npm set progress=false \
  && npm install -g prisma \
  && npm install \
  && chmod +x /entrypoint.sh \
  && chmod +x /project/wait-for-it.sh

EXPOSE 4000



