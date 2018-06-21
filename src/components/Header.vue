<template>

  <div class="header">
    <div class="header-inner">

      <div class="site-log">
        <img :src="logo" alt="由心造">
        <h1><a href="wwww.youxinzao.com" class="link-logo"></a></h1>
      </div>

      <ul class="quick-menu">

        <li class="search"></li>
        <li class="message"></li>
        <li class="editor"></li>
        <li class="user"></li>
      </ul>

    </div>
    <div class="nav">

    </div>

  </div>

</template>

<script>

  import logo from '@/assets/log@2x.png'
  // @1x @2x和@3x严格来说是苹果公司的专利。

  export default {
    name: "Header"
  }
</script>


<style lang="stylus" rel="stylesheet/stylus" scoped>

  .container
    width: 100%
    height: 136px
    position: fixed
    top: 0
    .header
      width: 100%
      height: 88px
      font-size: 16px;
      color: #333;
      .site-log
        width: 89px
        height: 46px
        float: left
        background: url("assets/image/logo@2x.png")
      .quick-menu

</style>

