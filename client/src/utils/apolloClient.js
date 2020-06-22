import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { setContext } from 'apollo-link-context'

const setAuthorizationLink = setContext(() => {
  let token = window.localStorage.getItem('token')
  console.log(token)
  token = token.substring(1, token.length - 1)
  return {
    headers: { Authorization: token ? `Bearer ${token}` : '' }
  }
})

export default new ApolloClient({
  link: setAuthorizationLink.concat(new HttpLink({ uri: 'http://localhost:3000/graphql' })),
  cache: new InMemoryCache(),
  connectToDevTools: true
})
