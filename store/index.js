export const state = () => ({
  user: {}
})

export const mutations = {
  SET_LOGGED(state, user) {
    state.user = user
  }
}

export const actions = {
  setLogged ({commit}, payload) {
    commit('SET_LOGGED', payload)
  }
}