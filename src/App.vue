<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

  /* 通常不用改，一般都是加入一个起到fixed作用的 nav就够了
   */
export default {
  name: 'App'
}
</script>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
