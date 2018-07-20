<template>
  <header style="top: 0px; padding-bottom: 54px;">

    <nav id="mainnavi">
      <h1 class="logo"><a href="http://muuuuu.org/"><img style="width: 170px; height: 21px"
                                                         src="http://muuuuu.org/common/img/logo.png"></a></h1>
      <ul>
        <li><a href="http://muuuuu.org/">阅览</a></li>
        <li><a href="/about/">游记</a></li>
        <li><a href="http://muuuuu.org/">移民</a></li>
        <li><a class="current" href="/category" style="padding-bottom: 54px;">国家</a></li>
        <li><a href="https://www.facebook.com/muuuuu.chang" target="_blank">论坛</a></li>
      </ul>
    </nav>

  </header>
</template>

<script>

  // @1x @2x和@3x严格来说是苹果公司的专利。
  // 有的地方就是没有，并不一定需要填充div


  export default {
    name: "Header",
    data() {
      return {}
    }

  }
</script>


<style lang="stylus" rel="stylesheet/stylus" scoped>
  header
    background: url(../assets/image/navibg.png) no-repeat scroll left bottom rgba(0, 0, 0, 0);
    left: 50%;
    margin: 0 auto 60px -713px;
    overflow: hidden;
    padding-bottom: 54px;
    padding-top: 90px;
    position: fixed;
    top: 0;
    width: 1425px;
    z-index: 99999;

  .logo
    display inline-block

  ul
    display inline-block
    li
      display inline-block
      a
        text-decoration: none
        color: #333
        margin-right: 25px;
        font-size: 12px;
        letter-spacing: 0.1em
        font-weight: 400


</style>

