<template>
  <div id="app">
    <router-view />
    <tab-bar>
      <tab-bar-item path="/home">
        <img slot="item-icon" src="./assets/img/tabbar/icon_home_off.png">
        <img slot="item-icon-active" src="./assets/img/tabbar/icon_home_on.png">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/hot">
        <img slot="item-icon" src="./assets/img/tabbar/icon_hot_off.png">
        <img slot="item-icon-active" src="./assets/img/tabbar/icon_hot_on.png">
        <div slot="item-text">热门</div>
      </tab-bar-item>
      <tab-bar-item path="/msg">
        <img slot="item-icon" src="./assets/img/tabbar/icon_msg_off.png">
        <img slot="item-icon-active" src="./assets/img/tabbar/icon_msg_on.png">
        <div slot="item-text">消息</div>
      </tab-bar-item>
      <tab-bar-item path="/user">
        <img slot="item-icon" src="./assets/img/tabbar/icon_user_off.png">
        <img slot="item-icon-active" src="./assets/img/tabbar/icon_user_on.png">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
  import TabBar from './components/tabbar/TabBar'
  import TabBarItem from './components/tabbar/TabBarItem'

  export default {
    name: 'App',
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>

<style lang="less">
  @import url('./assets/css/base.less');
  
</style>
