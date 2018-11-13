<template>
    <div :class="$style.header">
        <span :class="$style.left">
            <em>注册</em>|<em>登录</em>
        </span>
        <btn :class="$style.btndwon">APP下载</btn>
    </div>
</template>

<script>
import btn from '../core/btn.vue'
export default {
    components:{
        btn
    }
}
</script>

<style lang="scss" module>
.header{
    width:100%;
    height:3.12rem;
    position: fixed;
    top:0;
    left:0;
    right:0;
    background:#f4f4f4;
    .left{
        color:#444;
        font-size: 1rem;
        line-height:3.12rem;
        float:left;
        em{
            padding: 0 1rem;
        }
    }
    .btndwon{
        float:right;
        border-radius: 0;
        min-width:3.75rem;
        margin: 0.9rem;
    }
}
</style>
