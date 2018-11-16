<template>
    <div :class="$style.info">
        <div :class="$style.item" v-for="(item,index) in items" :key="index">
                <img :src="item.src" alt="">
                <div>
                    <h4>{{item.info}}</h4>
                </div>
                <em>{{item.em}}</em>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            items:[
            {
                src:'//img12.360buyimg.com/jrpmobile/jfs/t8971/199/1863233880/2035/56d04776/59cb5fbdNa7c682c3.png?width=70&height=70',
                info:'我的资产',
                em:'查看全部资产 >'
            },
            {
                src:'//img12.360buyimg.com/jrpmobile/jfs/t8836/18/2342020923/2120/a9b7a8ff/59cb6124N31cb2889.png?width=70&height=70',
                info:'我的优惠券',
                em:'查看全部 >'
            },
            {
                src:'//img12.360buyimg.com/jrpmobile/jfs/t10264/48/2521964269/2177/cb479501/59f945edNc1197b64.png?width=90&height=90',
                info:'我的金币',
                em:'赚金币兑好物 >'
            },
            {
                src:'//img12.360buyimg.com/jrpmobile/jfs/t12115/250/469950434/3906/ad97c994/5a0bdf3aN22efb724.png?width=90&height=90',
                info:'我的金条',
                em:'查看额度 >'
            },
            {
                src:'//img12.360buyimg.com/jrpmobile/jfs/t9244/132/2364556535/1134/334cd5d9/59cb612dN5b974dc5.png?width=70&height=70',
                info:'我的借钱',
                em:'查看全部产品 >'
            },
            {
                src:'//img12.360buyimg.com/jrpmobile/jfs/t9121/110/2300703915/1348/91af205c/59cb613bN1e749e58.png?width=70&height=70',
                info:'我的白条',
                em:'去提额 >'
            },
            {
                src:'//img12.360buyimg.com/jrpmobile/jfs/t9649/171/293125950/1453/4cf0cc2/59cb6162N9c71da0f.png?width=70&height=70',
                info:'我的众筹',
                em:'查订单/物流 >'
            },
            {
                src:'//img12.360buyimg.com/jrpmobile/jfs/t8014/149/2344686222/2102/341ff316/59cb616bN3e1bd87d.png?width=70&height=70',
                info:'我的保障',
                em:'全方位保障 >'
            },
             {
                src:'//img12.360buyimg.com/jrpmobile/jfs/t1/3907/34/11652/2582/5bd04759Ea9acb837/f893bf98fd67c192.png?width=54&height=54',
                info:'我的爱车',
                em:'绑车享专属福利'
            },
            ]
        }
    }
}
</script>

<style lang="scss" module>
@import '../../common/css/layout';
.info{
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
          h4{
            color: #999;
            font-size: 0.75rem;
            line-height: 1.1;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
          }
        }
        >em{
          color:#999;
          font-size: 0.875rem;
          margin-right:1rem;
        }
    }
    
}
</style>
