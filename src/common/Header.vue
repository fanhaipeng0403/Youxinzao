<template>
  <div :class="{'blur':isBlur}">
    <header :class="[isScrollTop ? 'header-mini' : 'header']">

      <nav>
        <h1 class="logo"><a href="http://muuuuu.org/"><img
          src="http://muuuuu.org/common/img/logo.png"></a></h1>
        <ul>
          <li><a :class="[isScrollTop?  'link-mini':'link']" href="http://muuuuu.org/">阅览</a></li>
          <li><a :class="[isScrollTop? 'link-mini':'link']" href="http://muuuuu.org/">优选</a></li>
          <li><a :class="[isScrollTop? 'link-mini':'link']" href="http://muuuuu.org/">定制</a></li>
          <li><a :class="[isScrollTop?  'link-mini':'link']" href="/category">社区</a></li>
          <li><a :class="[isScrollTop? 'link-mini':'link']" href="https://www.facebook.com/muuuuu.chang"
                 target="_blank">关于</a></li>
        </ul>
      </nav>


    </header>

  </div>

</template>

<script>


  import {mapGetters} from 'vuex'

  export default {
    name: "Header",
    data() {
      return {
      }
    },

    computed:
      {
        ...mapGetters([
        'isBlur',
        'isScrollTop'
      ])
      }
    ,
  }
</script>


<style lang="stylus" rel="stylesheet/stylus" scoped>
  header
    transition: all 1300ms

  .logo
    display inline-block

  ul
    display inline-block
    margin-left: 72px;
    li
      display inline-block

  img
    width 170px
    height 21px

  .header-mini
    background: url(../assets/image/navibg.png) no-repeat scroll left bottom rgba(0, 0, 0, 0);
    left: 14.5%;
    overflow: hidden;
    padding-bottom: 0;
    padding-top: 40px;
    position: fixed;
    top: -65px;
    width: 80%;
    z-index: 99999;

  .header
    background: url(../assets/image/navibg.png) no-repeat scroll left bottom rgba(0, 0, 0, 0);
    left: 14.5%;
    overflow: hidden;
    padding-bottom: 15px;
    padding-top: 40px;
    position: fixed;
    top: 0;
    width: 80%;
    z-index: 99999;

  .link-mini
    text-decoration: none
    color: #333
    margin-right: 30px;
    font-size: 13px;
    letter-spacing: 0.1em
    font-weight: 400
    padding-bottom: 1.3rem
    &:hover
      border-bottom: 1px solid #ec652b

  .link
    text-decoration: none
    color: #333
    margin-right: 30px;
    font-size: 13px;
    letter-spacing: 0.1em
    font-weight: 400
    padding-bottom: 2.3rem
    &:hover
      border-bottom: 1px solid #ec652b

  .blur
    filter: blur(2px);

</style>

