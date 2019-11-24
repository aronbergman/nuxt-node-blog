export const actions = {
  async create ({ commit }, { name, specialty, dob, goal, titleFirst, titleSecond, titleThird, image, contentFirst, contentSecond, contentThird }) {
    try {
      const fd = new FormData()

      fd.append('name', name)
      fd.append('specialty', specialty)
      fd.append('dob', dob)
      fd.append('goal', goal)
      fd.append('titleFirst', titleFirst)
      fd.append('titleSecond', titleSecond)
      fd.append('titleThird', titleThird)
      fd.append('contentFirst', contentFirst)
      fd.append('contentSecond', contentSecond)
      fd.append('contentThird', contentThird)
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
