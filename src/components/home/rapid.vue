<template>
    <parel title="急速借贷" :class="$style.parel">
        <div :class="$style.content">
            <img src="//img12.360buyimg.com/jrpmobile/jfs/t12721/42/2497849749/26333/ec584be4/5a421756N2416c88f.png?width=750&height=280" alt="">
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
       padding-bottom: 1.25rem;
       img{
         display: block;
         width:100%;
        }
    }
}
</style>
