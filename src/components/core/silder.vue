<template>
    <section :class="cname">
        <swiper :options="swiperOption" :not-next-tick="swiperOption.notNextTick">
            <swiper-slide v-for="(item,index) in items" :key="index">
                <router-link :to="{name:item.index}" tag="a">
                    <img :src="item.src">
                </router-link>
            </swiper-slide>
            <div class="swiper-pagination" v-if="swiperOption.pagination" slot="pagination"></div>
        </swiper>
    </section>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
export default {
    props:{
        cname:{
            type:String,
            default:''
        },
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
</style>
