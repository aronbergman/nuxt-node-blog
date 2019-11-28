export const actions = {
  async create ({ commit }, { question, answer, name }) {
    try {
      const fd = new FormData()

      fd.append('question', question)
      fd.append('answer', answer)
      fd.append('name', name)

      return await this.$axios.$post('/api/question', fd)
    } catch (e) {
      commit('setError', e, { root: true })
      throw e
    }
  },
  async fetchAdmin ({ commit }) {
    try {
      return await this.$axios.$get('/api/question/admin')
    } catch (e) {
      commit('setError', e, { root: true })
      throw e
    }
  },
  async fetch ({ commit }) {
    try {
      return await this.$axios.$get('/api/question')
    } catch (e) {
      commit('setError', e, { root: true })
      throw e
    }
  },
  async fetchAdminById ({ commit }, id) {
    try {
      return await this.$axios.$get(`/api/question/admin/${id}`)
    } catch (e) {
      commit('setError', e, { root: true })
      throw e
    }
  },
  async update ({ commit }, { id, question, answer, name }) {
    try {
      return await this.$axios.$put(`/api/question/admin/${id}`, { question, answer, name })
    } catch (e) {
      commit('setError', e, { root: true })
      throw e
    }
  },
  async remove ({ commit }, id) {
    try {
      return await this.$axios.$delete(`/api/question/admin/${id}`)
    } catch (e) {
      commit('setError', e, { root: true })
      throw e
    }
  },
}
