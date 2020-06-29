export default {
    getPeo(state){
        return state.peo.filter( e => e.age>12 ) 
    },
    getPeoCount(state, getters){
        return getters.getPeo.length
    },
    getPeoByAge(state){
        return age => state.peo.filter( e => e.age>age ) 
    }
}