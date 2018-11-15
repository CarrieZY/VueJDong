<template lang="html">
    <parel title="白条福利" :class="$style.panel">
        <section :class="$style.content">
            <div :class="$style.item">
                <img src="//img12.360buyimg.com/jrpmobile/jfs/t4378/62/155957680/9017/16463551/58affd58Nb5c9198e.jpg?width=120&height=120" alt="">
                <div>
                    <h4>开通白条</h4>
                    <p>送188元礼包</p>
                </div>
                <em>立即开通 > </em>
            </div>
            <div :class="$style.item">
                <img src="//img12.360buyimg.com/jrpmobile/jfs/t4150/330/141981421/9147/604e3e04/58affc3bNbfa8f9d7.jpg?width=120&height=120" alt="">
                <div>
                    <h4>白条闪付</h4>
                    <p>新手享158元礼包</p>
                </div>
                <em>随机立减 > </em>
            </div>
            <div :class="$style.item">
                <img src="//img12.360buyimg.com/jrpmobile/jfs/t4270/96/1102370053/8651/58b7fa5a/58bd2e10N453e9464.jpg?width=120&height=120" alt="">
                <div>
                    <h4>白条提额</h4>
                    <p>金融app专享提额礼包</p>
                </div>
                <em>去提额 > </em>
            </div>
        </section>
    </parel>
</template>

<script>
import parel from "../core/parel.vue"
export default {
    components: {
        parel,
    },
}
</script>

<style lang="scss" module>
  @import "../../common/css/layout";
  .panel{
    @include parel;
    >h4{
      @include border-1px(#ddd);
    }
    .content{
      @include flex;
      .item{
        @include flex(row);
        align-items: center;
        height: 4.375rem;
        &:after{
          content: " ";
          box-sizing: border-box;
          height: 0;
          width: 100%;
          border-bottom: 1px solid #ddd;
          margin-left: 4.68rem;
        }
        &:last-child:after{
          @include border-1px(0);
        }
        >img{
          width: 2.75rem;
          height: 2.75rem;
          display: inline-block;
          margin: 0 1rem;
        }
        >div{
          font-size: 1rem;
          color: #333;
          line-height: 1.8;
          width: 12rem;
          p{
            color: #999;
            font-size: 0.75rem;
            line-height: 1.1;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
          }
        }
        >em{
          color: #FF801A;
          font-size: 0.875rem;
        }
      }
    }
  }
</style>
