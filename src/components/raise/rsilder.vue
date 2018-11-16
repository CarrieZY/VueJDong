<template lang="html">
    <Panel title="金融头条" :class="$style.panel">
        <section :class="$style.content">
            <swiper :options="options">
                <swiper-slide>百万白条券免费送，速来领取！！ <em>></em> </swiper-slide>
                <swiper-slide>签到领流量，1元500M！<em>></em> </swiper-slide>
            </swiper>
        </section>
    </Panel>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper"
import Panel from "../core/parel"
export default {
    components: {
        Panel,
        swiper,
        swiperSlide,
    },
    data() {
        return {
            options: {
                autoplay: true,
                loop: true,
                direction: "vertical",
            },
        }
    },
}
</script>

<style lang="scss">
  .swiper-container-vertical{
    height: 72px;
    .swiper-slide{
      font-family: PingFangSC-Medium;
      font-size: 0.875rem;
      color: #333;
      em{
        color: #ddd;
        float: right;
        margin-right: 0.75rem;
      }
    }
  }
</style>

<style lang="scss" module>
  @import "../../common/css/layout";
  .panel{
    @include parel;
    >h4{
      display: none;
    }
    margin-top: 3.75rem !important;
    .content{
      height: 2rem;
      line-height: 2rem;
      overflow: hidden;
      padding-left: 5.25rem;
      background: url(//m.jr.jd.com/spe/qyy/main/images/scroll_title_img.png) left top no-repeat;
      background-size:5rem 1.8rem;
    }
  }
</style>
