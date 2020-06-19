import graphqlClient from '../../utils/apolloClient'
import { ALL_POSTS_QUERY, LOGIN_USER_MUTATION } from '../../constants/graphql'

const state = {
  posts: [],
  userDetails: []
}

const getters = {
  getPosts: (state) => state.posts,
  getUserDetails: (state) => state.userDetails,
  loggedIn: (state) => state.userDetails.token
}

const actions = {
  async fetchPosts ({ commit }) {
    const response = await graphqlClient.query({
      query: ALL_POSTS_QUERY
    })
    commit('SET_POSTS', response.data)
  },
  async fetchUserDetails ({ commit }, args) {
    const { username, password } = args
    console.log(username, password)
    const response = await graphqlClient.mutate({
      mutation: LOGIN_USER_MUTATION,
      variables: {
        username,
        password
      }
    })
    commit('SET_USER_DETAILS', response.data)
  }
}

const mutations = {
  SET_POSTS: (state, posts) => (state.posts = posts),
  SET_USER_DETAILS: (state, userDetails) => (state.userDetails = userDetails)
}

export default {
  state,
  getters,
  actions,
  mutations
}
