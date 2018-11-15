<template>
<parel title="生活服务" :class="$style.parel">
    <div :class="$style.list">
        <div :class="$style.item" v-for="(item,index) in enters" :key="index">
            <router-link :to="{name:item.href}" tag="a">
            <img :src="item.img" :alt="item.title">
            <p>{{item.title}}</p>
            </router-link>
        </div>
    </div>
</parel>    
</template>

<script>
import parel from '../core/parel'
export default {
   components:{
       parel
   } ,
   data(){
       return {
           enters:[
                {
                    href:'home',
                    img:'//img12.360buyimg.com/jrpmobile/jfs/t1/1216/39/659/4516/5b923b1cE5943d1c6/dabaf8b842f57eb9.png?width=90&height=90',
                    title:'众筹'
                },
                {
                    href:'home',
                    img:'//img12.360buyimg.com/jrpmobile/jfs/t1/3924/28/657/3552/5b9240dbE60256c31/78b52d5ab675f800.png?width=90&height=90',
                    title:'租房'
                },
                {
                    href:'home',
                    img:'//img12.360buyimg.com/jrpmobile/jfs/t1/520/34/950/3686/5b9239e3Eaaf5465c/8d8c35badacfc114.png?width=90&height=90',
                    title:'工资理财'
                },
                {
                    href:'home',
                    img:'//img12.360buyimg.com/jrpmobile/jfs/t1/479/25/929/9198/5b9243aaE826fc97b/37ef0a7cdfd24238.png?width=120&height=120',
                    title:'电影票'
                },
                {
                    href:'home',
                    img:'//img12.360buyimg.com/jrpmobile/jfs/t4393/329/2180608902/13217/c88c0cec/58ec9dcdN1534e2d7.png?width=132&height=132',
                    title:'抢钢镚'
                }
            ]
       }
   }
   
}
</script>

<style lang="scss" module>
@import '../../common/css/layout.scss';
.parel{
    @include parel;
    .list{
    @include list(row);
    background: #fff;
    padding-top:1.25rem;
    padding-bottom: 0.625rem;
    justify-content: space-around;
    .item{
        text-align: center;
        a{
            text-decoration: none;
        }
        img{
            display: inline-block;
            width:2.8rem;
            height:2.8rem;
        }
        p{
            margin-top:1.375rem;
            font-size: 0.625rem;
            color:#666;
        }
    }
}
}

</style>
