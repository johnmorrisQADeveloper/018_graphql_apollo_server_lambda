const { ApolloServer } = require('apollo-server-lambda')
require('./mongodb')
const typeDefs = require('./graphql/typeDefs')
const resolvers = require('./graphql/resolvers')

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true,
  introspection: true,
  context: ({ event, context }) => ({
    headers: event.headers,
    functionName: context.functionName,
    event,
    context
  })
})

exports.handler = server.createHandler({
  cors: {
    origin: '*',
    credentials: true
  }
})
