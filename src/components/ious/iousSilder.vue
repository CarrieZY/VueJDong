<template>
    <div :class="$style.iousSilder">
        <silder :options="swiperOption" :items="items" :cname="$style.silder"></silder>
    </div>
</template>

<script>
import silder from '../core/silder'
export default {
    components:{
        silder
    },
    data(){
        return {
            items: [{
                href: "ious",
                src: "//img12.360buyimg.com/jrpmobile/jfs/t8491/303/504628479/60643/100648de/59a94358N92475fca.jpg?width=750&height=320",
            }, {
                href: "home",
                src: "//img12.360buyimg.com/jrpmobile/jfs/t8437/321/1758527686/40952/f66d552f/59bf1f41N50d846f9.jpg?width=750&height=320",
            }],
            swiperOption:{
                pagination:{
                    el:'.swiper-pagination'
                }
            }
        }
    }
}
</script>

<style lang="scss" module>
.iousSilder{
    margin-top:3.75rem;
    img{
        width:100%;
    }
}
</style>
