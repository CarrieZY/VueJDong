<template>
    <div>
        <m-header/>
        <rasilder/>
        <check/>
        <recommend/>
        <welfare/>
        <m-footer/>
        <navbar/>
    </div>
</template>

<script>
import MHeader from '../public/header'
import rasilder from './rsilder'
import check from './check'
import welfare from './welfare'
import recommend from './recommend'
import MFooter from '../public/footer'
import navbar from '../public/navbar'
export default {
    components:{
        MHeader,
        check,
        recommend,
        welfare,
        MFooter,
        navbar,
        rasilder
    }
}
</script>

<style lang="scss">

</style>
