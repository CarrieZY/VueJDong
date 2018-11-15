<template>
    <div>
        <m-header/>
        <ious-silder/>
        <welfare/>
        <service/>
        <m-footer/>
        <navbar/>
    </div>
</template>

<script>
import MHeader from '../public/header'
import IousSilder from './iousSilder'
import welfare from './welfare'
import service from './service'
import MFooter from '../public/footer'
import navbar from '../public/navbar'
export default {
    components:{
        MHeader,
        MFooter,
        navbar,
        IousSilder,
        welfare,
        service
    }
}
</script>

<style lang="scss">

</style>
