import gql from 'graphql-tag'

export const ALL_POSTS_QUERY = gql`
  query AllPostsQuery {
    getPosts {
      id body commentCount username createdAt likeCount
    }
  }
`

export const CREATE_USER_MUTATION = gql`
  mutation registerUserMutation(
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
