<template>
    <parel :cname="$style.parel" title="新手特权">
        <div :class="$style.content">
            <div :class="$style.item">
                <h4>下载APP<span class="red">送888元礼包</span></h4>
                <p :class="$style.gray">新手专享</p>
                <img src="//img12.360buyimg.com/jrpmobile/jfs/t10384/155/1759179594/9776/185bd062/59e5f0ebNec4cf494.png?width=100&height=100">
            </div>
            <div :class="$style.item">
                <ul>
                    <li>
                        <img src="//img12.360buyimg.com/jrpmobile/jfs/t4639/162/1782623297/60754/98ea03b4/58e60952N7fdb2b85.png?width=200&height=200" alt="">
                        <h4 :class="$style.red">领128元新手礼包</h4>
                        <p :class="$style.gray">立即开通</p>
                    </li>
                    <li>
                        <img src="//img12.360buyimg.com/jrpmobile/jfs/t4804/179/657713323/5908/66dce262/58e6095fNd3dc3f39.png?width=100&height=100" alt="">
                        <h4>打白条<span :class="$style.red">享免息</span></h4>
                        <p :class="$style.gray">立即开通享豪礼</p>
                    </li>
                </ul>
            </div>
        </div>        
    </parel>
</template>

<script>
import parel from '../core/parel'
export default {
    components:{
        parel
    }
}
</script>

<style lang="scss" module>
@import '../../common/css/layout';
.parel{
    @include parel;
    >h4{
        border-bottom: 1px solid #ddd;
    }
    .content{
        @include list(row);
        .item{
        width: 50%;
        box-sizing: border-box;
        &:first-child{
          padding: 1rem 0.625rem;
          text-align: center;
          border-right: 1px solid #ddd;
          img{
            width: 4.125rem;
            height: 4.125rem;
            margin: 0.625rem auto 0;
          }
        }
        h4{
          font-size: 0.8rem;
          line-height: 1.25rem;
        }
        .red{
          color: #f00;
        }
        .gray{
          color: #999;
          font-size: 0.75rem;
        }
        p{
          margin-top: 0.18rem;
          font-size: 0.75rem;
        }
        ul{
          width: 100%;
          li{
            height: 4.5rem;
            width: 100%;
            padding: 1rem 0.8rem;
            box-sizing: border-box;
            &:first-child{
              border-bottom: 1px solid #ddd;
            }
            h4{
              white-space: nowrap;
              text-overflow: ellipsis;
              overflow: hidden;
              text-align: left;
            }
            img{
              width: 2.5rem;
              height: 2.5rem;
              float: right;
            }
          }
        }
      }
    }
}
</style>
