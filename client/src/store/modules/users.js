const state = {
  userInfo: []
}

const getters = {
  getUserInfo: (state) => state.userInfo
}

const actions = {
  async setUserInfo ({ commit }, data) {
    commit('SET_USER_INFO', data)
    window.localStorage.setItem('token', data.login.token)
    window.localStorage.setItem('username', data.login.username)
    window.sessionStorage.setItem('token', data.login.token)
    window.sessionStorage.setItem('username', data.login.username)
  }
}

const mutations = {
  SET_USER_INFO: (state, user) => (state.userInfo = user)
}

export default {
  state,
  getters,
  actions,
  mutations
}
