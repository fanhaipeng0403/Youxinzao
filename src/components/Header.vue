<template>

  <header>
    <div class="header-inner">

      <a href="https://wwww.youxinzao.com" class="link-logo"> <img class="logo" :src="logo" alt="由心造"> </a>

      <ul class="quick-menu">
        <li class="search">
          <input type="text">
        </li>
        <li class="message">
          <img class="logo" :src="message" alt="由心造">
        </li>
        <li class="editor">

          <img class="logo" :src="editor" alt="由心造">
        </li>
        <li class="user">

          <img class="logo" :src="avatar" alt="由心造">

        </li>
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

  import logo from '@/assets/image/site-log.png'
  import message from '@/assets/image/message.png'
  import popular from '@/assets/image/popular.png'
  import editor from '@/assets/image/editor.png'
  import avatar from '@/assets/image/avatar.png'

  export default {
    name: "Header",
    data() {
      return {
        logo,
        message,
        popular,
        editor,
        avatar,
      }
    }

  }
</script>


<style lang="stylus" rel="stylesheet/stylus" scoped>

  .header-inner
    width 100%
    height 88px
    &:after
      box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.07);
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
        margin 15px 10px 0px 25px

        /*position flex*/




</style>

