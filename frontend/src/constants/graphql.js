import gql from 'graphql-tag'

export const ALL_POSTS_QUERY = gql`
  query {
    getPosts {
      id body commentCount username createdAt likeCount
    }
  }
`

export const CREATE_USER_MUTATION = gql`
  mutation (
    $username: String!, 
    $password: String!, 
    $confirmPassword: String!,
    $email: String! ) 
    {
    register(
      username: $username,
      password: $password,
      confirmPassword: $confirmPassword,
      email: $email
    ){
      id email token username createdAt
     }
  }
`

export const LOGIN_USER_MUTATION = gql`
  mutation (
    $username: String!, 
    $password: String! ) 
    {
    login(
      username: $username,
      password: $password
    ){
      id email token username createdAt
     }
  }
`

export const CREATE_POST_MUTATION = gql`
  mutation (
    $body: String!) 
    {
    createPost(
      body: $body
    ){
      id body createdAt username
     }
  }
`
