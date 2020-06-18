import gql from 'graphql-tag'

export const ALL_POSTS_QUERY = gql`
  query AllPostsQuery {
    getPosts {
      id body commentCount username
    }
  }
`
