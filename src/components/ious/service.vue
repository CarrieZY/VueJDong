<template>
    <parel title="更多服务" :class="$style.parel">
        <div :class="$style.content">
           <div :class="$style.item" v-for="(item,index) in services" :key="index">
                <img :src="item.img" :alt="item.title">
                <p>{{item.title}}</p>
            </div>
        </div>
    </parel>
</template>

<script>
import parel from '../core/parel'
export default {
    components:{
        parel
    },
    data(){
        return{
            services: [{
                img: "//img12.360buyimg.com/jrpmobile/jfs/t4609/245/3975151339/11019/766e751d/590aca78Nf15a7947.png?width=135&height=135",
                title: "小白卡",
            }, {
                img: "//img12.360buyimg.com/jrpmobile/jfs/t5269/224/1031852465/12646/40e0f799/590aca55N22a6f274.png?width=135&height=135",
                title: "白条商城",
            }, {
                img: "//img12.360buyimg.com/jrpmobile/jfs/t5095/216/1045040184/12370/564ae632/590ac7deN9a0eac2a.png?width=135&height=135",
                title: "消费分期",
            }, {
                img: "//img12.360buyimg.com/jrpmobile/jfs/t8311/300/1385281399/9501/130a0046/59b8da06N14f62cf3.png?width=120&height=120",
                title: "借钱",
            }, {
                img: "//img12.360buyimg.com/jrpmobile/jfs/t5488/298/1036263348/12073/b4f4de97/590ac8e8Ne9def22e.png?width=135&height=135",
                title: "白条提额",
            }, {
                img: "//img12.360buyimg.com/jrpmobile/jfs/t4417/98/4154366136/13785/5433ca92/590ac8afN5dd91d6e.png?width=135&height=135",
                title: "白条闪付",
            }, {
                img: "//img12.360buyimg.com/jrpmobile/jfs/t4453/75/4132459214/14188/939b7f34/590ac860N752d5738.png?width=135&height=135",
                title: "小白会玩",
            }, {
                img: "//img12.360buyimg.com/jrpmobile/jfs/t5371/323/1038197138/12031/3ec72f6c/590aca20N089fd34a.png?width=135&height=135",
                title: "钢镚",
            }]
        }
    }
}
</script>

<style lang="scss" module>
@import '../../common/css/layout';
.parel{
    @include parel;
    .content{
        @include flex(row);
        .item{
           text-align: center;
           width:5.625rem;
           height:4.5rem;
           margin-bottom: 1.25rem;
           >img{
               width:2.75rem;
               height:2.75rem;
           }
           >p{
               font-size: 0.8rem;
               margin-top: 0.375rem;
               color:#666;
           }
        }
    }
}
</style>
