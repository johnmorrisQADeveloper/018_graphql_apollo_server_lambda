
import axios from 'axios'

const state = {
  posts: []
}

const getters = {
  getUserInfo: (state) => state.userInfo,
  getPosts: (state) => state.posts
}

const actions = {
  async fetchPosts ({ commit }) {
    const response = await axios.get('http://localhost:3000/todos')
    commit('SET_POSTS', response.data)
  }
}

const mutations = {
  SET_TODOS: (state, todos) => (state.todos = todos)
}

export default {
  state,
  getters,
  actions,
  mutations
}
