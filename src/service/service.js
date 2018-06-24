//
// import axios from 'axios'
// import qs from 'qs'
//
// // 旧的用于请求C#服务器
// const oldService = axios.create({
//
//   baseURL: location.href.includes('staging') ? location.protocol + '//staging-napi.' + window.location.host.split('.')[1] + '.com/' : location.protocol + '//napi.' + window.location.host.split('.')[1] + '.com/',
//   withCredentials: true
//
// })
//
// oldService.interceptors.request.use(config => {
//   if (config.method === 'post') {
//     config.data = qs.stringify(config.data)
//     config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
//   }
//   return config
// }, (error) => {
//   console.log('err' + error) // for debug
//   return Promise.reject(error)
// })
//
// // 新 的用于请求Java服务器
// const service = axios.create({
//
//   baseURL: location.href.includes('staging') ? location.protocol + '//staging-api.' + window.location.host.split('.')[1] + '.com/' : location.protocol + '//api.' + window.location.host.split('.')[1] + '.com/',
//   withCredentials: true
//
// })
//
// service.interceptors.request.use(config => {
//   if (config.method === 'post') {
//     config.data = qs.stringify(config.data)
//     config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
//   }
//   return config
// }, (error) => {
//   console.log('err' + error) // for debug
//   return Promise.reject(error)
// })
//
// export default {
//   service,
//   oldService
// }
