import Vue from 'vue'
import store from './store'
import App from './App.vue'
import { request } from './request'

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')

// 基本请求
// axios({
//   url: 'http://123.207.32.32:8000/home/multidata',
//   method: 'get'
// }).then(res => {
//   // console.log(res)
// })
// axios({
//   url: 'http://rap2.taobao.org:38080/app/mock/242548/ts/getAllHousesByAreaId',
//   method: 'get',
//   params: {
//     token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9'
//   }
// }).then(res => {
//   // console.log(res)
// })

// 并发请求
// axios.defaults.baseURL = 'http://rap2.taobao.org:38080',
// axios.defaults.timeout = 5000
// axios
//   .all([
//     axios({
//       url: '/app/mock/242548/ts/getAllHouses',
//       method: 'get',
//       params: {
//         token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9'
//       }
//     }), 
//     axios({
//       url: '/app/mock/242548/ts/getAllHousesByAreaId',
//       method: 'get',
//       params: {
//         token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9'
//       }
//     })
//   ])
//   .then(axios.spread((res1, res2) => {
//     console.log(res1)
//     console.log(res2)
//   }))


// axios创建对应的实例
// const instance1 = axios.create({
//   baseURL: 'http://rap2.taobao.org:38080',
//   timeout: 5000
// })
// instance1({
//   url: '/app/mock/242548/ts/getAllHouses',
//   method: 'get',
//   params: {
//     token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9'
//   }
// }).then( res => {
//   // console.log(res)
// })


// 使用封装的axios
request({
  url: '/app/mock/242548/ts/allDis',
  method: 'get',
  params: {
    token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9'
  }
})
.then(res => {
  console.log(res)
})
.catch(err => {
  console.log(err)
})
