<template>
     <div :class="$style.help">
        <div :class="$style.item" >
                <img src="//img12.360buyimg.com/jrpmobile/jfs/t9832/294/292213011/2420/30888b3d/59cb61c9Nc2bbc057.png?width=70&height=70">
                <div>
                    <h4>帮助中心</h4>
                </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" module>
@import '../../common/css/layout';
.help{
    margin-top:1.25rem;
    @include flex;
    background: #fff;
    .item{
        @include flex(row);
        align-items: center;
        height: 3.5rem;
        @include border-1px(#ddd);
        &:last-child{
          @include border-1px(0);
        }
        >img{
          width: 1.5rem;
          height: 1.5rem;
          display: inline-block;
          margin: 0 1rem;
        }
        >div{
          font-size: 1rem;
          color: #333;
          line-height: 1.8;
          width: 12rem;
        }
    }
    
}
</style>
