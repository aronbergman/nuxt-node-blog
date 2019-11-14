export const actions = {
  async create ({ commit }, data) {
    try {
      return await this.$axios.$post('/api/comment', data)
    } catch (e) {
      commit('setError', e, { root: true })
    }
  },
  async fetchAdminComments ({ commit }) {
    try {
      return await this.$axios.$get('/api/comment/admin/comments')
    } catch (e) {
      commit('setError', e, { root: true })
      throw e
    }
  },
  async removeComment ({ commit }, id) {
    try {
      return await this.$axios.$delete(`/api/comment/admin/comments/${id}`)
    } catch (e) {
      commit('setError', e, { root: true })
      throw e
    }
  },
}
