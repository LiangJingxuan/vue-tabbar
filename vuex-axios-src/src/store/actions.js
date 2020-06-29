export default {
    employeeUpdate(context, payload){
        return new Promise( (resolve, reject) => {
            setTimeout(() => {
                context.commit('employeeEdit')
                console.log(payload)
                resolve('返回数据')
            }, 1000)
        } )
    } 
}