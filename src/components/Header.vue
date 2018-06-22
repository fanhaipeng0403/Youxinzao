<template>

  <header class="main-header">
    <div class="header-inner">

      <a href="https://wwww.youxinzao.com" class="link-logo"> <img :src="logo" alt="由心造"> </a><

      <ul class="quick-menu">
        <li class="search"></li>
        <li class="message"></li>
        <li class="editor"></li>
        <li class="user"></li>
      </ul>

    </div>
    <nav class="nav-bar">
       <ul class="popular-articles">
         <li></li>
         <li></li>
         <li></li>
         <li></li>
       </ul>

    </nav>

  </header>

</template>

<script>

  // @1x @2x和@3x严格来说是苹果公司的专利。
  // 有的地方就是没有，并不一定需要填充div
  import logo from '@/assets/log@2x.png'

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

