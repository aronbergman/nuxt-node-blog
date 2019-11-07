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
  async remove({ }, id) {},

  async fetchAdminById({}, id) {
    return await new Promise((resolve) => {
      setTimeout(() => {
        resolve(posts.find(p => p._id === id))
      }, 1000)
    })
  }
}
