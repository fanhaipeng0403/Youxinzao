<template>

  <header >
    <div class="header-inner">

      <a href="https://wwww.youxinzao.com" class="link-logo"> <img class="logo" :src="logo" alt="由心造"> </a>

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

  import logo from '@/assets/site-log.png'


  export default {
    name: "Header",
    data() {
      return {
        logo,
      }
    }

  }
</script>


<style lang="stylus" rel="stylesheet/stylus" scoped>

  .header-inner
    width 100%
    height 88px
    &:after
     box-shadow: 0 2px 3px 0 rgba(0,0,0,0.07);
     display: block
     position: absolute
     color: rgba(202, 18, 18, 0.07)
     content: "";
     width: 100%;
     height: 2px;
    a
      .logo
        width 89px
        height 46px
        margin 10px 10px 10px 30px





</style>

