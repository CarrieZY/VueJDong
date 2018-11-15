<template>
    <div>
        <m-header/>
        <fin-silder/>
        <ada/>
        <choice/>
        <adb/>
        <money/>
        <abc/>
        <m-footer/>
        <navbar/>
    </div>
</template>

<script>
import MHeader from '../public/header'
import finSilder from './finSilder'
import ada from './ada'
import choice from './choice'
import adb from './adb'
import money from './money'
import abc from './abc'
import MFooter from '../public/footer'
import navbar from '../public/navbar'
export default {
    components:{
        MHeader,
        finSilder,
        ada,
        choice,
        adb,
        money,
        abc,
        MFooter,
        navbar
    }
}
</script>

<style lang="scss">

</style>
