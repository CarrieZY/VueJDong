<template>
    <div :class="$style.header">
        <span class="icon-back" :class="$style.left"></span>
        <span :class="$style.text">个人中心</span>
        <span class="icon-gengduo" :class="$style.right"></span>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" module>
@import '../../common/css/layout';
.header{
    width:100%;
    position: fixed;
    left:0;
    top:0;
    height:2.75rem;
    background: #fff;
    @include border-1px(#ddd);
    display: flex;
    >span{ 
      display: inline-block;
      font-weight: 700;
      line-height: 2.75rem;
      color:#333;
      font-size:1rem;  
      text-align: center;
    }
    .left{
        flex:0 0  1rem;
        width:1rem;
        margin-left:1rem;
    }
    .right{
        flex:0 0 1rem;
        width:1rem;
        margin-right:1rem;
    }
    .text{
        flex:1;
    }
}
</style>
