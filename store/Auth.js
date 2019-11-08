export const state = () => ({
  token: true
})

export const mutations = {
  setToken(state, token) {
    state.token = token
  },
  clearToken(state) {
    state.token = null
  }
}

export const actions = {
  async login({ commit, dispatch }, formData) {
    try {
      // eslint-disable-next-line promise/param-names
      const { token } = this.$axios.post('/api/auth/admin/login', formData)
      console.log(token)
      dispatch('setToken', token)
    } catch (e) {
      commit('setError', e, { root: true })
      throw e
    }
  },
  async createUser({ commit }, formData) {
    try {
      await console.log('auth/createUser', formData)
    } catch (e) {

    }
  },
  setToken({ commit }, token) {
    commit('setToken', token)
  },
  // commit позволяет изменять стор через мутейшены
  logout({ commit }) {
    commit('clearToken')
  }
}

export const getters = {
  isAuthenticated: state => Boolean(state.token)
}
