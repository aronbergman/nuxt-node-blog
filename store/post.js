const posts = [
  { title: 'Post 1', date: new Date(), views: 22, comments: [1, 2], _id: 'yotyg' },
  { title: 'Post 3', date: new Date(), views: 22, comments: [1, 2], _id: 'gcjgh' }
]

export const actions = {
  fetchAdmin() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(posts)
      }, 1000)
    })
  },
  async remove({ }, id) { },

  async update({ }, { id, text }) {
    console.log(id, text)
  },

  async fetchAdminById({ }, id) {
    return await new Promise((resolve) => {
      setTimeout(() => {
        resolve(posts.find(p => p._id === id))
      }, 1000)
    })
  },

  async create({ commit }, { title, text, image }) {
    try {
      const fd = new FormData()

      fd.append('title', title)
      fd.append('text', text)
      fd.append('image', image, image.name);

      return await new Promise(resolve => {
        setTimeout(() => {
          resolve();
          // axios
        }, 1000)
      })
    } catch (e) {
      commit('setError', e, { root: true });
      throw e
    }
  }
}
