<template>
    <div>
        <m-header></m-header>
        <home-slider></home-slider>
        <novice/>
        <rapid/>
        <choice/>
        <product/>
        <life/>
        <m-footer/>
        <navbar/>
    </div>
</template>

<script>
import MHeader from '../public/header'
import HomeSlider from './homeSilde'
import novice from './novice'
import rapid from './rapid'
import choice from './choice'
import product from './product'
import life from './life'
import MFooter from '../public/footer'
import navbar from '../public/navbar'
export default {
    components:{
        MHeader,
        HomeSlider,
        novice,
        rapid,
        choice,
        product,
        life,
        MFooter,
        navbar
    }
}
</script>

<style lang="scss">

</style>
