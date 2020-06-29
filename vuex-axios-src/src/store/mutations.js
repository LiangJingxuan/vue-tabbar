import * as TYPES from '@/store/mutations-types'
export default {
    [TYPES.INCREMENT](state){
        state.counter++
    },
    decrement(state){
        state.counter--
    },
    incrementCount(state, payload){
        state.counter += payload.num
    },
    addPeo(state, peo){
        state.peo.push(peo)
    },
    employeeEdit(state){
        // 修改属性
        state.employee.name = 'lisa'

        // 添加属性
        // state.employee.address = '河北' // 无法响应式
        // Vue.set(state.employee, 'address', '河北')

        // 删除属性
        // delete state.employee.age // 无法响应式
        // Vue.delete(state.employee, 'age')
    }
}