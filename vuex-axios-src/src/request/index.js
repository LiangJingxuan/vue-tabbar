import axios from 'axios'

export function request(config){
    // 创建axios的实例
    const instance = axios.create({
        baseURL: 'http://rap2.taobao.org:38080',
        timeout: 5000
    })
    // axios拦截器-请求拦截
    instance.interceptors.request.use(config => {
        // console.log(config)
        return config
    }, err => {

    })
    // axios拦截器-响应拦截
    instance.interceptors.response.use(res => {
        // console.log(res)
        // 过滤数据
        return res.data._root_
    }, err => {

    })
    // 发送网络请求
    return instance(config)
}