<template>
    <parel title="每日签到" :class="$style.parel">
        <div :class="$style.content">
            <img src="//img12.360buyimg.com/jrpmobile/jfs/t3184/283/6032981290/37056/fa30c674/589bd5a2Nabdbbbd9.jpg?width=376&height=160" alt="">
            <img src="//img12.360buyimg.com/jrpmobile/jfs/t3298/196/6130416421/33755/a0536d3e/589bd5d4Nf32e7adc.jpg?width=374&height=160" alt="">
            <p>不抢白不抢</p>
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
    .content{
        @include flex(row);
        position: relative;
        margin-bottom: 0.75rem;
        >img{
            width:10rem;
            height:4.25rem;
        }
        >p{
            position: absolute;
            top:-3.5rem;
            right: 0.31rem;;
            font-size: 0.875rem;
            color: #999;
            height: 3.5rem;
            line-height: 3.5rem;
        }
    }
}
</style>
