<template>
    <section :class="cname">
        <swiper :options="swiperOption" :not-next-tick="swiperOption.notNextTick">
            <swiper-slide v-for="(item,indexUrl )in items" :key="indexUrl">
                <router-link to="{item.indexUrl}">
                    <img :src="item.src" alt="">
                </router-link>
            </swiper-slide>
            <div class="swiper-pagination" v-if="swiperOption.pagination"></div>
        </swiper>
    </section>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
    props:{
        swiperOption:{
            type:Object,//对象默认是一个函数
            default(){
                return {
                    autoplay:true,
                    loop:true,
                    pagination:{
                        el:'.swiper-pagination'
                    },
                    notNextTick:false
                }
            }
        },
        items:{
            type:Array,
            default(){
                return {}
            }
        }
    },
    components:{
        swiper,
        swiperSlide
    }
}
</script>

<style lang="scss">
@import '~swiper/dist/css/swiper.css';

</style>
