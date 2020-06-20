import graphqlClient from '../../utils/apolloClient'
import { ALL_POSTS_QUERY, LOGIN_USER_MUTATION, CREATE_USER_MUTATION } from '../../constants/graphql'

const state = {
  posts: [],
  userDetails: [],
  token: ''
}

const getters = {
  getPosts: (state) => state.posts,
  getUserDetails: (state) => state.userDetails,
  loggedIn: (state) => state.token
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
    commit('SET_TOKEN_ON_LOCAL_STORAGE', response.data.login.token)
    commit('SET_TOKEN', response.data.login.token)
  },
  async registerUser ({ commit }, args) {
    const { username, password, confirmPassword, email } = args
    const response = await graphqlClient.mutate({
      mutation: CREATE_USER_MUTATION,
      variables: {
        username,
        password,
        confirmPassword,
        email
      }
    })
    commit('SET_USER_DETAILS', response.data)
    commit('SET_TOKEN_ON_LOCAL_STORAGE', response.data.register.token)
    commit('SET_TOKEN', response.data.register.token)
  }
}

const mutations = {
  SET_POSTS: (state, posts) => (state.posts = posts),
  SET_USER_DETAILS: (state, userDetails) => (state.userDetails = userDetails),
  CLEAR_TOKEN_ON_LOCAL_STORAGE: () => (window.localStorage.setItem('token', JSON.stringify(''))),
  SET_TOKEN_ON_LOCAL_STORAGE: (_, token) => (window.localStorage.setItem('token', JSON.stringify(token))),
  SET_TOKEN: (state, token) => (state.token = token)
}

export default {
  state,
  getters,
  actions,
  mutations
}
