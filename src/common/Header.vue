<template>

  <header>
    <div class="header-inner">

      <a href="https://wwww.youxinzao.com" class="link-logo"> <img class="logo" :src="logo" alt="由心造"> </a>

      <ul class="quick-menu">
        <li class="search">
      
        </li>

         <li class="message">
          <img :src="message" alt="由心造">
        </li>

        <li class="user">

          <img :src="avatar" alt="由心造">

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
  import avatar from '@/assets/image/avatar.jpg'

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
    height 100px
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
        width (89/1.2)px
        height (46/1.2)px
        margin 10px 10px 5px 25px
    .quick-menu
      position absolute
      right 200px
      top 0
      display: flex;
      align-items: center;
      margin: 0px;
      .message
        display inline-block
        margin 0px 20px 0px 0px
        img
         width 25px
         height 25px
      .user
        display inline-block
        margin 5px 20px 0px 0px
        img
         width 45px
         height 45px
         border: 1px solid #ddd;
         border-radius: 50%;


</style>

