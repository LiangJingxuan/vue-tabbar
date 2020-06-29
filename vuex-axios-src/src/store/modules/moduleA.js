export default {
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