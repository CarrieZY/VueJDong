<template>
    <div :class="$style.finSilder">
        <silder :items="items" :cname="$style.silder"></silder>
    </div>
</template>

<script>
import silder from '../core/silder'
export default {
    components:{
        silder
    },
    data(){
        return {
            items: [{
                href: "home",
                src: "//img12.360buyimg.com/jrpmobile/jfs/t11149/181/856008463/68797/dc303e9/59f97baeN3cdae084.jpg?width=750&height=400",
            }, {
                href: "home",
                src: "//img12.360buyimg.com/jrpmobile/jfs/t9994/205/2575467053/189117/125e7b05/59f97c36N7599be57.png?width=750&height=400",
            }]
        }
    }
}
</script>

<style lang="scss" module>
.finSilder{
    margin-top:3.75rem;
    img{
        width:100%;
    }
}
</style>
