<template>
    <parel title="理财精选" :class="$style.parel">
        <div :class="$style.content">
            <div :class="$style.item" v-for="(item,index) in titles" :key="index">
                <div :class="$style.title">{{item.title}}<span :class="$style.red">{{item.redtitle}}</span></div>
                <div :class="$style.rate">{{item.rate}}</div>
                <p :class="$style.text">{{item.text}}</p>
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
        return {
            titles:[
                {
                    title:'定期理财',
                    redtitle:'理财首选',
                    rate:'5.60%',
                    text:'历史年化回报率'
                },
                {
                    title: "小白理财",
                    redtitle:'理财首选',
                    rate:'4.22%',
                    text:'7日年化收益率'
                },
                {
                    title:'月月盈',
                    redtitle:'养老保障',
                    rate:'5%',
                    text:'近7日年化收益'
                },
                {
                    title:'小白基金',
                    redtitle:'天天赚钱',
                    rate:'4.27%',
                    text:'7日年化收益率'
                }
            ]
        }
    }
}
</script>

<style lang="scss" module>
@import '../../common/css/layout';
.parel{
    @include parel;
    .content{
        width:100%;
        @include flex(row);
        justify-content: space-around;
        .item{
            width:50%;
            padding-left:1rem;
            box-sizing: border-box;
            border-bottom: 1px solid #ddd;
            border-right:1px solid #ddd;
            &:nth-child(2n){
                border-right:0;
            }
            &:nth-child(3){
                border-bottom:0;
            }
            &:nth-child(4){
                border-bottom: 0;
            }
            .title{
                padding-top:1rem;
                color:#333;
                font-weight:700;
                font-size: 1rem;
                line-height:1.31rem;
                height:1.31rem;
                .red{
                    height:1.1rem;
                    line-height:1.1rem;
                    color:#FF5155;
                    border:1px solid #FF5155;
                    font-size: 0.625rem;
                    margin-left:0.2rem;
                }
            }
            .rate{
                color:#FF5155;
                font-weight: 700;
                font-size:1.375rem;
                line-height:1.8rem;
            }
            .text{
                color:#999;
                font-size: 0.75rem;
                line-height:1rem;
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
                padding-bottom: 1rem;
            }
        }
    }
}
</style>
