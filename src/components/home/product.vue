<template lang="html">
    <Panel title="新品推荐" :class="$style.panel">
        <section :class="$style.content">
            <div class="arrow">更多尖货 ></div>
            <silder :items="items" cname="product-slider" />
        </section>
    </Panel>
</template>

<script>
import Panel from "../core/parel"
import silder from '../core/silder'
export default {
    components: {
        Panel,
        silder
    },
    data() {
        return {
            items:[{
                index:'/home',
                src: "//img12.360buyimg.com/jrpmobile/jfs/t13963/267/2355123229/48850/254f797a/5a3c59aeN9cb550f6.jpg?width=335&height=421",
            }, {
                index:'/home',
                src: "//img12.360buyimg.com/jrpmobile/jfs/t13021/306/1996997425/21953/bda69db3/5a2f6a17N9da099b1.jpg?width=335&height=421",
            }, {
                index:'/home',
                src: "//img12.360buyimg.com/jrpmobile/jfs/t14125/310/1997192193/46667/3c910f8b/5a2f6a36Nad95b650.jpg?width=335&height=421",
            }, {
                index:'/home',
                src: "//img12.360buyimg.com/jrpmobile/jfs/t15784/188/381232069/39444/8878571d/5a2f6a4aNbd5a574c.jpg?width=335&height=421",
            }],
            swiperOption: {
                slidesPerView: 3,
                spaceBetween: 30,
                freeMode: true
            }
        }
    },
}
</script>

<style lang="scss">
  .product-slider{
    .swiper-container{  
      box-sizing: border-box;
      padding: 0 1.25rem;
      .swiper-slide{
        a{
          width:100%;
          display: inline-block;
          img{ 
            width:100%;  
            display: inline-block;
            height: 9.28rem;
            border: 1px solid #fafafa;
          }
        }
      }
    }
    .swiper-pagination {
        display: none;
    }
  }
</style>

<style lang="scss" module>
  @import "../../common/css/layout.scss";
  .panel{
    @include parel;
    .content{
      padding-bottom: 1.25rem;
      position: relative;
      &>div{
        position: absolute;
        font-size: 0.875rem;
        color: #999;
        right:0.625rem;
        top: -2.18rem;
      }
    }
  }
</style>
