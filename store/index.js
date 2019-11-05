export const state = () => ({
  error: null
})

export const mutations = {
  setError (state, error) {
    state.error = error
  },
  clearError (state) {
    state.error = null
  }
}

// получаем доступ до ошибки
export const getters = {
  error: state => state.error
}
