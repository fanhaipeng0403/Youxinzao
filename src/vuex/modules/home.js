import * as types from '../types'

const state = {
  isBlur: false,
}
// const actions = {
//   // home简要
//   gethomeDesc({commit}, type) {
//     console.log('type', type)
//     data.getTypeDesc(type).then(res => {
//       // console.log('type data:', res)
//       commit(types.SET_HOME_DESC, res)
//     })
//   },
//   gethomeDetail({commit}, type, id) {
//     data.getTypeDetail(type, id).then(res => {
//       console.log('type data:', res)
//       commit(types.SET_HOME_DETAIL, res)
//     })
//   }
//
// }
const getters = {
  isBlur: state => state.isBlur
}
// const mutations = {
//   [types.SET_HOME_DESC](state, res) {
//     state.homeDesc = res
//   },
//   [types.SET_HOME_DETAIL](state, res) {
//     state.homeDetail = res
//   }
// }
export default {
  state,
  // actions,
  getters,
  // mutations
}
