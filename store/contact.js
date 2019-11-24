export const actions = {
  async create ({ commit }, { name, email, subject, phone, message }) {
    try {
      const fd = new FormData()

      fd.append('name', name)
      fd.append('email', email)
      fd.append('subject', subject)
      fd.append('phone', phone)
      fd.append('message', message)

      const name2 = fd.getAll('name')
      console.log(name2)

      return await this.$axios.$post('/api/contact', fd)
    } catch (e) {
      commit('setError', e, { root: true })
      throw e
    }
  }
}
