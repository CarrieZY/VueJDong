<template>
    <div class="nav">
        <router-link to="/home" tag="a">
        <img src="//img12.360buyimg.com/jrpmobile/jfs/t3451/188/644771475/2428/800d7cb7/580f2435Nbfaa8055.png?width=66&height=66">
        <p>首页</p>
        </router-link>
        <router-link to="/financial" tag="a">
        <img src="//img12.360buyimg.com/jrpmobile/jfs/t3811/55/345433999/2930/116d3dd1/580f1e25N028a1f2c.png?width=66&height=66">
        <p>理财</p>
        </router-link>
        <router-link to="/home" tag="a">
        <img src="//img12.360buyimg.com/jrpmobile/jfs/t3343/179/621044750/1484/5af6b11a/580f50e4N005181d0.png?width=66&height=66" alt="">
        <p>白条</p>
        </router-link>
        <router-link to="/home" tag="a">
        <img src="//img12.360buyimg.com/jrpmobile/jfs/t3604/98/635506544/2317/443d3a51/580f240aNbee3dcc4.png?width=66&height=66" alt="">
        <p>众筹</p>
        </router-link>
        <router-link to="/home">
        <img src="//img12.360buyimg.com/jrpmobile/jfs/t3340/68/639059082/2591/800e2d6b/580f51cdN4caf20b2.png?width=66&height=66" alt="">
        <p>我的</p>
        </router-link>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">
@import "../../common/css/layout.scss";
.nav{
    width:100%;
    height:3.12rem;
    background: #fff;
    position: fixed;
    z-index:100;
    left:0;
    bottom: 0;
    right:0;
    @include flex(row);
    justify-content: space-around;
    >a {
        display: inline-block;
        text-decoration: none;
        img{
          width: 1.375rem;
          height: 1.375rem;
          display: inline-block;
          margin: 0.375rem auto 0.18rem;
        }
        p{
          font-size: 0.68rem;
          color: #656565;
        }
    }
}
</style>
