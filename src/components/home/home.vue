<template>
    <div>
        <m-header></m-header>
        <home-slider></home-slider>
        <novice/>
        <rapid/>
        <choice/>
        <product></product>
    </div>
</template>

<script>
import MHeader from '../public/header'
import HomeSlider from './homeSilde'
import novice from './novice'
import rapid from './rapid'
import choice from './choice'
import product from './product'
export default {
    components:{
        MHeader,
        HomeSlider,
        novice,
        rapid,
        choice,
        product
    }
}
</script>

<style lang="scss">

</style>
