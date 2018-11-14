<template>
    <div>
        <silder :items="items" :cname="$style.silder"></silder>
        <div :class="$style.list">
            <div :class="$style.item" v-for="(item,index) in enters" :key="index">
                <router-link :to="{name:item.href}" tag="a">
                <img :src="item.img" :alt="item.title">
                <p>{{item.title}}</p>
                </router-link>
            </div>
        </div>
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
            items:[
                {
                   index:'home',
                   src:'//img12.360buyimg.com/jrpmobile/jfs/t29311/7/144758099/82184/778eeafd/5be94f53N6885ac13.jpg?width=750&height=320' 
                },
                {
                    index:'home',
                    src:'//img12.360buyimg.com/jrpmobile/jfs/t25078/90/2556237720/38676/679449d/5be957eeN02d78c18.jpg?width=750&height=320'
                }
            ],
            enters:[
                {
                    href:'home',
                    img:'//img12.360buyimg.com/jrpmobile/jfs/t3991/64/2521945388/12110/93c0139/58d1e462Ncf294123.png?width=132&height=132',
                    title:'优惠券'
                },
                {
                    href:'home',
                    img:'//img12.360buyimg.com/jrpmobile/jfs/t5590/252/875247023/17343/946aa72c/59224650N0f7ffc92.png?width=132&height=132.360buyimg.com/jrpmobile/jfs/t3991/64/2521945388/12110/93c0139/58d1e462Ncf294123.png?width=132&height=132',
                    title:'领福利'
                },
                {
                    href:'home',
                    img:'//img12.360buyimg.com/jrpmobile/jfs/t1/520/34/950/3686/5b9239e3Eaaf5465c/8d8c35badacfc114.png?width=90&height=90',
                    title:'工资理财'
                },
                {
                    href:'home',
                    img:'//img12.360buyimg.com/jrpmobile/jfs/t5488/298/1036263348/12073/b4f4de97/590ac8e8Ne9def22e.png?width=135&height=135',
                    title:'白条提额'
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
.silder{
    margin-top:3.12rem;
    img{
        width:100%;
    }
}
</style>
