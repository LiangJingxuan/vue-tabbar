import Vue from 'vue'
import Vuex from 'vuex'
import * as TYPES from '@/store/mutations-types'

Vue.use(Vuex)

const moduleA = {
    state: {
        name: 'blair'
    },
    mutations: {
        upName(state, payload){
            state.name = payload
        }
    },
    getters: {
        fullName(state, getters, rootState){
            return `${state.name} - ${rootState.counter}`
        }
    },
    actions: {
        asyncUpName(context){
            setTimeout(() => {
                context.commit('upName', 'abc')
            }, 1000)
        }
    }
}

const store = new Vuex.Store({
    state: {
        counter: 1000,
        peo: [
            {id: 1, name: 'aaa', age: 17},
            {id: 2, name: 'bbb', age: 12},
            {id: 3, name: 'ccc', age: 15},
            {id: 4, name: 'ddd', age: 10},
            {id: 5, name: 'eee', age: 9}
        ],
        employee: {
            name: 'amy',
            age: 10,
            sex: 'femininity'
        }
    },
    mutations: {
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
    },
    actions: {
        employeeUpdate(context, payload){
            return new Promise( (resolve, reject) => {
                setTimeout(() => {
                    context.commit('employeeEdit')
                    console.log(payload)
                    resolve('返回数据')
                }, 1000)
            } )
        } 
    },
    getters: {
        getPeo(state){
            return state.peo.filter( e => e.age>12 ) 
        },
        getPeoCount(state, getters){
            return getters.getPeo.length
        },
        getPeoByAge(state){
            return age => state.peo.filter( e => e.age>age ) 
        }
    },
    modules: {
        a: moduleA
    }
})

export default store