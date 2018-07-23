import * as types from '../types'

const state = {
  isBlur: false,
}
const actions = {
  changeActive({commit}, type) {
    commit(types.CHANGE_ACTIVE)
  },

}
const getters = {
  isBlur: state => state.isBlur
}
const mutations = {
  [types.CHANGE_ACTIVE](state) {
    state.isBlur = !state.isBlur
  },
}
export default {
  state,
  actions,
  getters,
  mutations
}
