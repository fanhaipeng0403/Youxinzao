import * as types from '../types'

const state = {
  isBlur: false,
  isScrollTop: false,
  isScrollTMiddle: false,
}
const actions = {
  changeActive({commit}, type) {
    commit(types.CHANGE_ACTIVE)
  },
  scrollAction({commit}, type) {
    commit(types.JUDGE_SCROLL)
  },

}
const getters = {
  isBlur: state => state.isBlur,
  isScrollTop: state => state.isScrollTop,
  isScrollTMiddle: state => state.isScrollTMiddle
}
const mutations = {
  [types.CHANGE_ACTIVE](state) {
    state.isBlur = !state.isBlur
  },

  [types.JUDGE_SCROLL](state) {
    state.isScrollTop = (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop) > 20
    state.isScrollTMiddle =  (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop) > 850
  },

}
export default {
  state,
  actions,
  getters,
  mutations
}
