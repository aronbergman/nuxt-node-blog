export const actions = {
  async fetchAdmin ({ commit }) {
    try {
      return await this.$axios.$get('/api/post/admin')
    } catch (e) {
      commit('setError', e, { root: true })
      throw e
    }
  },
  async fetchAdminUsers ({ commit }) {
    try {
      return await this.$axios.$get('/api/post/admin/users')
    } catch (e) {
      commit('setError', e, { root: true })
      throw e
    }
  },
  async fetch ({ commit }) {
    try {
      return await this.$axios.$get('/api/post')
    } catch (e) {
      commit('setError', e, { root: true })
      throw e
    }
  },
  async remove ({ commit }, id) {
    try {
      return await this.$axios.$delete(`/api/post/admin/${id}`)
    } catch (e) {
      commit('setError', e, { root: true })
      throw e
    }
  },
  async update ({ commit }, { id, title, category, description, text }) {
    try {
      return await this.$axios.$put(`/api/post/admin/${id}`, { title, category, description, text })
    } catch (e) {
      commit('setError', e, { root: true })
      throw e
    }
  },
  async create ({ commit }, { title, category, text, image, description }) {
    try {
      const fd = new FormData()

      fd.append('title', title)
      fd.append('text', text)
      fd.append('category', category)
      fd.append('commentsCount', '0')
      fd.append('description', description)
      fd.append('image', image, image.name)

      return await this.$axios.$post('/api/post/admin', fd)
    } catch (e) {
      commit('setError', e, { root: true })
      throw e
    }
  },
  async fetchAdminById ({ commit }, id) {
    try {
      return await this.$axios.$get(`/api/post/admin/${id}`)
    } catch (e) {
      commit('setError', e, { root: true })
      throw e
    }
  },
  async fetchById ({ commit }, id) {
    try {
      return await this.$axios.$get(`/api/post/${id}`)
    } catch (e) {
      commit('setError', e, { root: true })
      throw e
    }
  },
  async addView ({ commit }, { views, _id }) {
    try {
      return await this.$axios.$put(`/api/post/add/view/${_id}`, { views })
    } catch (e) {
      commit('setError', e, { root: true })
      throw e
    }
  },
  async getAnalytics ({ commit }) {
    try {
      return await this.$axios.$get('/api/post/admin/get/analytics')
    } catch (e) {
      commit('setError', e, { root: true })
      throw e
    }
  }
}
