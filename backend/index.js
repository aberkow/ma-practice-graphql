const { GraphQLServer } = require('graphql-yoga');
const { Prisma } = require('prisma-binding');

const Query = require('./src/resolvers/Query');
const Mutation = require('./src/resolvers/Mutation');

const server = new GraphQLServer({
  typeDefs: 'src/schema.graphql',
  resolvers: { Query, Mutation },
  context: req => ({
    ...req,
    db: new Prisma({
      typeDefs: 'src/generated/prisma.graphql',
      endpoint: process.env.PRISMA_ENDPOINT,
      debug: false
    })
  })
})

server.start(() => console.log(`Server is running on localhost:4000`));