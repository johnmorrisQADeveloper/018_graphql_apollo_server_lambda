const { ApolloServer } = require('apollo-server-lambda')
require('./mongodb')
const typeDefs = require('./graphql/typeDefs')
const resolvers = require('./graphql/resolvers')

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ context, event }) => {
    context.callbackWaitsForEmptyEventLoop = false
  }
})

exports.handler = server.createHandler()
