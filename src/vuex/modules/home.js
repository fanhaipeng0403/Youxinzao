import * as types from '../types'

const state = {
  isBlur: false,
  isScrollTop:0,
}
const actions = {
  changeActive({commit}, type) {
    commit(types.CHANGE_ACTIVE)
  },
  headerMini({commit}, type) {
    commit(types.JUDGE_SCROLL)
  },


}
const getters = {
  isBlur: state => state.isBlur,
  isScrollTop: state => state.isScrollTop
}
const mutations = {
  [types.CHANGE_ACTIVE](state) {
    state.isBlur = !state.isBlur
  },
  [types.JUDGE_SCROLL](state) {
    state.isScrollTop = (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop) > 20
  },


}
export default {
  state,
  actions,
  getters,
  mutations
}
