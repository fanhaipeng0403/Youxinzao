<template>
  <div id="app">
    <v-header></v-header>
    <side-bar></side-bar>
    <router-view/>
  </div>
</template>

<script>

  /* 通常不用改，一般都是加入一个起到fixed作用的 nav就够了
   */
  import header from '@/common/Header'
  import sideBar from '@/common/sideBar'

  export default {
    name: 'App',
    components: {
      'v-header': header,
      sideBar,
    },
  }
</script>


<style>


</style>
