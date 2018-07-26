<template>


    <section class="content">

      <vue-waterfall-easy :imgsArr="imgsArr" @scrollReachBottom="getData"></vue-waterfall-easy>

    </section>

</template>

<script>
  import vueWaterfallEasy from '@/components/vue-waterfall-easy/vue-waterfall-easy'
  import {mapGetters} from 'vuex'

  export default {
    name: 'MainContent',
    data() {
      return {
        imgsArr: [ { "src": "static/img/1.jpg",
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
        this.imgsArr = this.imgsArr.concat(
         [ {
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
        ] )
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
    margin: 146px 0 0 0
  .blur
    filter: blur(2px);
</style>
