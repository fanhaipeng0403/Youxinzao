<template>
  <div id="app">
    <v-header></v-header>
    <router-view/>
  </div>
</template>

<script>

  /* 通常不用改，一般都是加入一个起到fixed作用的 nav就够了
   */
  import header from '@/common/Header'

  export default {
    name: 'App',
    components: {
      'v-header': header
    }

  }
</script>


<style>


</style>
