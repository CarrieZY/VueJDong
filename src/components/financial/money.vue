<template lang="html">
    <parel title="理财精选" :class="$style.parel">
        <section :class="$style.content">
            <div :class="$style.item">
                <img src="//img12.360buyimg.com/jrpmobile/jfs/t3670/58/543125556/2606/a65096b9/580d80afN63b1085a.png?width=76&height=76" alt="">
                <div>
                    <h4>月度理财</h4>
                    <p>预期年化收益率4.50%</p>
                </div>
                <em>去赚钱 > </em>
            </div>
            <div :class="$style.item">
                <img src="//img12.360buyimg.com/jrpmobile/jfs/t3679/44/511862277/2728/c1c6b2bf/580d8189N6b6f8052.png?width=76&height=76" alt="">
                <div>
                    <h4>季度理财</h4>
                    <p>历史年化回报率5.50%</p>
                </div>
                <em>去赚钱 > </em>
            </div>
            <div :class="$style.item">
                <img src="//img12.360buyimg.com/jrpmobile/jfs/t3331/69/580199498/3074/d5bb21c5/580d7f6cN7f35e596.png?width=76&height=76" alt="">
                <div>
                    <h4>一年理财</h4>
                    <p>历史年化回报率5.80%</p>
                </div>
                <em>去赚钱 > </em>
            </div>
        </section>
    </parel>
</template>

<script>
import parel from "../core/parel.vue"
export default {
    components: {
        parel,
    }
}
</script>

<style lang="scss" module>
  @import "../../common/css/layout";
  .parel{
    @include parel;
    >h4{
      border-bottom: 1px solid #ddd;
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
          border-color: #fff;
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
          width: 14rem;
          p{
            color: #ff3232;
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
          margin-right:1rem;
        }
      }
    }
  }
</style>
