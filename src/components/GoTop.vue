<template>

  <div v-if='isScrollTMiddle'>
    <div class="scrollTop">
      <a href="javascript:">
        <i>xxxxxxxx</i>
      </a>
    </div>
  </div>

</template>

<script>

  import {mapGetters} from 'vuex'

  export default {
    name: "GoTop",
    computed:
      { ...mapGetters([
          'isScrollTMiddle'
        ])
      }
    ,
  }

</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

  .scrollTop
    position: fixed
    bottom: 36px
    right: 95px
    transition: all 0.3s ease 0s;
</style>
