<template>

  <section class="content">

  <vue-waterfall-easy :imgsArr="imgsArr" @scrollReachBottom="getData"></vue-waterfall-easy>

  </section>

</template>

<script>
  import vueWaterfallEasy from 'vue-waterfall-easy'

  export default {
    name: 'MainContent',
    data() {
      return {
        imgsArr: [
          {
            "src": "static/img/1.jpg",
            "href": "https://www.baidu.com",
            "info": "一些图片描述文字"
          },
          {
            "src": "static/img/2-.jpg",
            "href": "https://www.baidu.com",
            "info": "一些图片描述文字"
          },
          {
            "src": "static/img/3.jpg",
            "href": "https://www.baidu.com",
            "info": "一些图片描述文字"
          },
          {
            "src": "static/img/4.jpg",
            "href": "https://www.baidu.com",
            "info": "一些图片描述文字"
          },
          {
            "src": "static/img/5.jpg",
            "href": "https://www.baidu.com",
            "info": "一些图片描述文字"
          },
          {
            "src": "static/img/6.jpg",
            "href": "https://www.baidu.com",
            "info": "一些图片描述文字"
          },
          {
            "src": "static/img/7.jpg",
            "href": "https://www.baidu.com",
            "info": "一些图片描述文字"
          },
          {
            "src": "static/img/8.jpg",
            "href": "https://www.baidu.com",
            "info": "一些图片描述文字"
          },
          {
            "src": "static/img/9.jpg",
            "href": "https://www.baidu.com",
            "info": "一些图片描述文字"
          },
          {
            "src": "static/img/10.jpg",
            "href": "https://www.baidu.com",
            "info": "一些图片描述文字"
          },
          {
            "src": "static/img/11.jpg",
            "href": "https://www.baidu.com",
            "info": "一些图片描述文字"
          },
          {
            "src": "static/img/12.jpg",
            "href": "https://www.baidu.com",
            "info": "一些图片描述文字"
          },
          {
            "src": "static/img/13.jpg",
            "href": "https://www.baidu.com",
            "info": "一些图片描述文字"
          },
          {
            "src": "static/img/14.jpg",
            "href": "https://www.baidu.com",
            "info": "一些图片描述文字"
          },
          {
            "src": "static/img/15.jpg",
            "href": "https://www.baidu.com",
            "info": "一些图片描述文字"
          },
          {
            "src": "static/img/16.jpg",
            "href": "https://www.baidu.com",
            "info": "一些图片描述文字"
          },
          {
            "src": "static/img/17.jpg",
            "href": "https://www.baidu.com",
            "info": "一些图片描述文字"
          },
          {
            "src": "static/img/18.jpg",
            "href": "https://www.baidu.com",
            "info": "一些图片描述文字"
          },
          {
            "src": "static/img/19.jpg",
            "href": "https://www.baidu.com",
            "info": "一些图片描述文字"
          },
          {
            "src": "static/img/20.jpg",
            "href": "https://www.baidu.com",
            "info": "一些图片描述文字"
          }
        ]
        ,
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
        // axios.get('../../node_modules/vue-waterfall-easy/demo/static/mock/data.json?group=' + this.group)
        //   .then(res => {
        //     this.imgsArr = this.imgsArr.concat(res.data)
        //     this.group++
        //   })
      },
    },
    created() {
      this.getData()
    }
  }
</script>

 <style lang="stylus" rel="stylesheet/stylus" scoped>
  .content
    height: 100vh;
    margin-top: 146px;
    overflow: visible;

</style>
