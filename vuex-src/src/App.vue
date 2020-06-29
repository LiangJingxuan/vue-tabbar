<template>
  <div id="app">
    {{message}}
    {{$store.state.counter}}

    <button @click="add">add</button>
    <button @click="sub">sub</button>

    <button @click="addCount(5)">add5</button>
    <button @click="addCount(10)">add10</button>

    <button @click="addPeo">addPeo</button>

    <Hello />

    <hr>

    <!-- {{$store.getters.getPeo}} -->
    <!-- {{$store.getters.getPeoCount}} -->
    {{$store.getters.getPeoByAge(10)}}

    <hr>

    {{$store.state.employee}}
    <button @click="upEmp">修改员工信息</button>

    <hr>

    {{$store.state.a.name}}
    {{$store.getters.fullName}}
    <button @click="upName">修改名字</button>
    <button @click="asyncUpName">修改名字(异步)</button>

  </div>
</template>

<script>
import Hello from '@/components/Hello'
import * as TYPES from '@/store/mutations-types'

export default {
  name: 'App',
  components: {
    Hello
  },
  data() {
    return {
      message: '1111aaaaxxs',
    }
  },
  methods: {
    add(){
      this.$store.commit(TYPES.INCREMENT)
    },
    sub(){
      this.$store.commit('decrement')
    },
    addCount(num){
      // 普通提交
      // this.$store.commit('incrementCount', num)

      // 特殊提交
      this.$store.commit({
        type: 'incrementCount',
        num
      })
    },
    addPeo(){
      const peo = {id: 6, name: 'fff', age: 11}
      this.$store.commit('addPeo', peo)
    },
    upEmp(){
      // this.$store.commit({
      //   type: 'employeeEdit'
      // })
      
      // 使用异步 action
      this.$store
        .dispatch('employeeUpdate', '参数....')
        .then(res => {
          console.log(res)
        }) 
    },
    upName(){
      this.$store.commit('upName', 'amy')
    },
    asyncUpName(){
      this.$store.dispatch('asyncUpName')
    }
  }
}
</script>

<style>

</style>
