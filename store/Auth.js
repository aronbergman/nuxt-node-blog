export const state = () => ({
  token: true
})

export const mutations = {
  setToken (state, token) {
    state.token = token
  },
  clearToken (state) {
    state.token = null
  }
}

export const actions = {
  async login ({ commit, dispatch }, formData) {
    try {
      // eslint-disable-next-line promise/param-names
      const token = await new Promise((resolve, reject) => {
        setTimeout(() => resolve('mock-tocken'), 2000)
      })
      dispatch('setToken', token)
    } catch (e) {
      commit('setError', e, { root: true })
      throw e
    }
  },
  setToken ({ commit }, token) {
    commit('setToken', token)
  },
  // commit позволяет изменять стор через мутейшены
  logout ({ commit }) {
    commit('clearToken')
  }
}

export const getters = {
  isAuthenticated: state => Boolean(state.token)
}
