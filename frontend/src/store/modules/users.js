import graphqlClient from '../../utils/apolloClient'
import { ALL_POSTS_QUERY } from '../../constants/graphql'

const state = {
  posts: []
}

const getters = {
  getPosts: (state) => state.posts
}

const actions = {
  async fetchPosts ({ commit }) {
    const response = await graphqlClient.query({
      query: ALL_POSTS_QUERY
    })
    commit('SET_POSTS', response.data)
  }
}

const mutations = {
  SET_POSTS: (state, posts) => (state.posts = posts)
}

export default {
  state,
  getters,
  actions,
  mutations
}
