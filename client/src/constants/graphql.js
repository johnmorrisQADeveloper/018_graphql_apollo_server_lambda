import gql from 'graphql-tag'

export const ALL_POSTS_QUERY = gql`
  query {
    getPosts {
      id body commentCount likeCount username createdAt
    }
  }
`
