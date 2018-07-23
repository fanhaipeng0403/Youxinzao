<template>


  <aside class="sidebar" @mouseenter="changeActive" @mouseleave="changeActive">

  </aside>

</template>

<script>

  import {mapActions} from 'vuex'

  export default {
    name: "SideBar",
    methods: {
      ...mapActions([
        'changeActive'
      ])
    }

  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .sidebar
    transition: all 250ms cubic-bezier(0.75, 0, 0.175, 1);
    width: 70px;
    background: #295d72;
    position: fixed;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 999999;
    font-size: 80%;
    overflow: hidden;
    &:hover
      width 18%


</style>

