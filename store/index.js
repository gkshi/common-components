export const state = () => ({
  modals: []
})

export const actions = {
  openModal ({ commit }, id) {
    commit('MODAL_ADD', id)
  },
  closeModal ({ commit }, id) {
    commit('MODAL_REMOVE', id)
  }
}

export const mutations = {
  MODAL_ADD (state, id) {
    state.modals.push(id)
  },
  MODAL_REMOVE (state, id) {
    state.modals = state.modals.filter(i => i !== id)
  }
}
