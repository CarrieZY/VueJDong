<template>
    <parel title="更多福利" :class="$style.parel">
        <section :class="$style.content">
            <img src="//img12.360buyimg.com/jrpmobile/jfs/t7456/56/1425209238/21928/f1fe492d/599cee57Naea99020.jpg?width=250&height=330" alt="">
            <img src="//img12.360buyimg.com/jrpmobile/jfs/t7894/126/1440046618/24763/5ce6a129/599cee04Ne77b3641.jpg?width=250&height=330" alt="">
            <img src="//img12.360buyimg.com/jrpmobile/jfs/t6385/103/1675552688/24265/91be4150/59549aedNa30670f7.jpg?width=250&height=330" alt="">
            <span>专享福利 > </span>
        </section>
    </parel>
</template>

<script>
import parel from '../core/parel'
export default {
    components :{
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
        padding-bottom: 1.25rem;
        >img{
            display: inline-block;
            width:33.3333%;
            height:8.75rem;
        }
        >span{
            position: absolute;
            right:0.625rem;
            top: -2.18rem;
            color:#999;
            font-size: 0.875rem;
        }
    }
}
</style>
