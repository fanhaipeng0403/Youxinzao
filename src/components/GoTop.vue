<template>

  <div v-if='isScrollTMiddle' @click="backTop">
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
    methods: {
      backTop() {
        jQuery('body,html').animate({scrollTop: 0}, 500)
      }
    },
    computed:
      {
        ...mapGetters([
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
