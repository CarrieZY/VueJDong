<template>
    <div :class="$style.arror">
        <span  :class="$style.pic">
            <img src="//img12.360buyimg.com/jrpmobile/jfs/t2644/238/1420176553/1442/96e2885/573d96deN06201af5.png">
        </span>
        <span :class="$style.right">会员福利 ></span>
        <span class="info"></span>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" module>
@import '../../common/css/layout';
.arror{
    margin-top:1.25rem;
    height:4.375rem;
    width:100%;
    background: #fff;
    .pic{
        width:3.125rem;
        height:3.125rem;
        margin-left:1rem;
        border-radius: 50%;
        border:1px solid #ddd;
        float:left;
        margin-top:0.5rem;
        >img{
            width:100%;
            height:100%;
        }
    }
    .right{
        float:right;
        margin-right: 1rem;
        font-size: 0.8rem;
        line-height: 4.375rem;
        color:#999;
    }
}
</style>
