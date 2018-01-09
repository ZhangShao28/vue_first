<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';

body {
  background-color: #fbf9fe;
}
  .clearF{
    clear: both;
  }
  .vux-header .vux-header-title{
    font-size: .5rem;
  }
  .floatL{
    float: left;
  }
  .floatR{
    float: right;
  }
</style>
