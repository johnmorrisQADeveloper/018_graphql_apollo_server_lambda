import gql from 'graphql-tag'

export const ALL_POSTS_QUERY = gql`
  query {
    getPosts {
      id body commentCount likeCount username createdAt
    }
  }
`

export const USER_REGISTRATION_MUTATION = gql`
  mutation (
    $username: String!
    $password: String!
    $confirmPassword: String!
    $email: String!
  ) {
    register(
      username: $username,
      password: $password,
      confirmPassword: $confirmPassword,
      email: $email
    ) {
      id email token username createdAt
    }
  }
`
