<template>

  <div class="content-wrapper">
    <section>

      <vue-waterfall-easy :imgsArr="imgsArr" @scrollReachBottom="getData"></vue-waterfall-easy>

    </section>

  </div>
</template>

<script>
  import vueWaterfallEasy from 'vue-waterfall-easy'
  import axios from 'axios'

  export default {
    name: 'MainContent',
    data() {
      return {
        imgsArr: [],
        group: 0,// request param
      }
    },
    components: {
      vueWaterfallEasy
    },
    methods: {
      getData() {
        // In the real environment,the backend will return a new image array based on the parameter group.
        // Here I simulate it with a stunned json file.
        axios.get('../../node_modules/vue-waterfall-easy/demo/static/mock/data.json?group=' + this.group)
          .then(res => {
            this.imgsArr = this.imgsArr.concat(res.data)
            this.group++
          })
      },
    },
    created() {
      this.getData()
    }
  }
</script>

<style scoped>

</style>
