<template>
   <section :class="[panelClass,cname]">
       <h4>-{{title}}-</h4>
       <slot></slot>
   </section>
</template>

<script>
export default {
    props:{
        cname:{
            type:String,
            default:'' 
        },
        title:{
            type:String,
            default:''
        }
    },
    data(){
        return {
            panelClass:'parel'
        }
    }
}
</script>

<style lang="scss">
@import '../../common/css/layout.scss';
.parel{
  @include parel;
}
</style>
