const { ApolloServer, gql } = require('apollo-server-lambda')
require('./mongodb')
const Post = require('./models/Post')

const typeDefs = gql`
  type Post {
    id: ID!
    body: String!
    createdAt: String!
    username: String!
  }
  type Query {
    getPosts: [Post]
  }
`

const resolvers = {
  Query: {
    async getPosts () {
      try {
        const posts = await Post.find()
        return posts
      } catch (err) {
        throw new Error(err)
      }
    }
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ context, event }) => {
    context.callbackWaitsForEmptyEventLoop = false
  }
})
// mongoose.connect(url, { useNewUrlParser: true }).then(res => console.log(`Connected to mongo at ${res.url}`))
exports.handler = server.createHandler()
