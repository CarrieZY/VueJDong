<template>
    <div>
        <persheader/>
        <arror/>
        <info/>
        <real-name/>
        <help/>
        <navbar/>
    </div>
</template>

<script>

import navbar from '../public/navbar'
import persheader from './persheader'
import arror from './arror'
import info from './info'
import help from './help'
import RealName from './realname'
export default {
    components:{
        navbar,
        persheader,
        arror,
        info,
        help,
        RealName
    }
}
</script>

<style lang="scss">

</style>
