export const actions = {
  async create ({ commit }, { name, text, image, contacts }) {
    try {
      const fd = new FormData()

      fd.append('name', name)
      fd.append('text', text)
      fd.append('contacts', contacts)
      fd.append('image', image, image.name)

      return await this.$axios.$post('/api/about/admin', fd)
    } catch (e) {
      commit('setError', e, { root: true })
      throw e
    }
  },
  async fetch ({ commit }) {
    try {
      return await this.$axios.$get('/api/about/fetch')
    } catch (e) {
      commit('setError', e, { root: true })
      throw e
    }
  }
}
