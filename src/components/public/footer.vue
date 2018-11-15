<template>
    <div :class="$style.footer">
        <div :class="$style.row">
            <p>Copyright © 2004-2018 京东JD.com 版权所有</p>
        </div>
        <div :class="$style.rowtext">
            <p>投资有风险，购买需谨慎</p>
            <p>京东金融平台服务协议</p>
            <p>京东金融隐私政策</p>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" module>
@import "../../common/css/layout.scss";
.footer{
    font-size: 0.75rem;
    color:#999;
    text-align: center;
    line-height:1.6;
    margin-top:1.25rem;
    .row{
        min-height:2.25rem;
        @include border-1px(#ddd)
    }
    .rowtext{
        :last-child{
            @include border-1px(0);
        }
        p{
            min-height:2.25rem;
            display: block;
            line-height: 2.25rem;
            @include border-1px(#ddd)
        }
    }
}
</style>
