const { gql } = require('apollo-server-lambda')

const typeDefs = gql`
  type Post {
    id: ID!
    body: String!
    createdAt: String!
    username: String!
    comments: [Comment]!
    likes: [Like]!
    likeCount: Int!
    commentCount: Int!
  }
  type Comment {
    id: ID!
    createdAt: String!
    username: String!
    body: String!
  }
  type Like {
    id: ID!
    createdAt: String!
    username: String!
  }
  input RegisterInput {
    username: String!
    password: String!
    confirmPassword: String!
    email: String!
  }
  type User {
    id: ID!
    email: String!
    token: String!
    username: String!
    createdAt: String!
  }
  type Query {
    getPosts: [Post]
    getPost(postId: ID!): Post
  }
  type Mutation {
    register(username: String!, password: String!, confirmPassword: String!, email: String! ): User!
    login(username: String!, password: String!): User!
    createPost(body: String): Post!
    deletePost(postId: ID!):  String!
    createComment(postId: String!, body: String!): Post!
    deleteComment(postId: String!, commentId: ID!): Post!
    likePost(postId: ID!): Post!
  }
`

module.exports = typeDefs
