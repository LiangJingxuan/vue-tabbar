import Vue from 'vue'
import Vuex from 'vuex'
import mutations from '@/store/mutations.js'
import actions from '@/store/actions.js'
import getters from '@/store/getters.js'
import moduleA from '@/store/modules/moduleA.js'

Vue.use(Vuex)

const state = {
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
}
const store = new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
    modules: {
        a: moduleA
    }
})

export default store