<template>


  <aside class="sidebar" @mouseenter="enter" @mouseleave="leave">

  </aside>

</template>

<script>
  export default {
    name: "SideBar",
    data() {
      return {
        seen: false
      }
    },
    methods: {
      enter: function () {
        console.log(
          'xxxx'
        )
      },
      leave: function () {
        console.log('yyy')
      }
    }

  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .sidebar
    transition: all 350ms cubic-bezier(0.75, 0, 0.175, 1);
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
      width 370px


</style>

