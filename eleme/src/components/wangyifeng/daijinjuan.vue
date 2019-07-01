<template>
  <!-- 我的优惠 -->
  <div id="wrap">
    <div id="top" @click="back()">
      <img src="../../../static/imgs/back.png">
      <p>我的优惠</p>
    </div>
    <div id="title1">
      <p @click="redpak()">红包</p>
      <p @click="shopcoupon()">商家代金券</p>
    </div>
    <div id="title2">
        <router-link to="/daijinjuanshuoming">
          <div id="tit2">
           <img src="../../../static/imgs/wenhao.png">
            <p>商家代金券说明</p>
        </div>
        </router-link>
        <div id="content">
            <img src="../../../static/imgs/sj.png">
            <p>无法使用代金券</p>
            <p>非客户端或客户端版本过低</p>
            <router-link to="/xiazai">
                <button>下载或升级客户端</button>
            </router-link>
        </div>
    </div>
    </div>
</template>
<script>
export default {
  name: "daijinjuan",
  data() {
    return {};
  },
  methods: {
    redpak(){
      this.$router.push({
        name:"youhui"
      })
    },
    shopcoupon(){
      this.$router.push({
        name:"daijinjuan"
      })
    },
    //返回上一级
    back() {
      this.$router.back();
    }
  }
};
</script>

<style scoped >
#wrap {
  width: 3.75rem;
  position: relative;
}
#top {
  width: 100%;
  height: 0.55rem;
  background-color: rgb(49, 143, 231);
  position: fixed;
  z-index: 2;
  left: 0;
  top: 0;
}
#top img {
  height: 0.25rem;
  position: absolute;
  left: 5%;
  top: 50%;
  transform: translate(-50%, -50%);
}
#top p {
  font-size: 0.2rem;
  color: white;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
#title1{
  margin-top: 0.55rem;
  width: 3.75rem;
  height: 0.45rem;
  background-color: white;
  font-size: 0.18rem;
  position: relative;
}
#title1 p:nth-child(1){
  position: absolute;
  left: 0.55rem;
  top: 0.04rem; 
}
#title1 p:nth-child(2){
  position: absolute;
  right: 0.55rem;
  top: 0.04rem;
  color: blue;
  padding-bottom: 0.02rem;
  border-bottom: 2px solid blue;
}
#title2{
    width: 3.75rem;
    height: 0.35rem;
    /* border: 1px solid aqua; */
    line-height: 0.35rem;
    font-size: 0.15rem;
    position: relative;
}
#tit2{
    height: 0.35rem;
    line-height: 0.35rem;
    position: absolute;
    right: 0.25rem;
    top: 0;
}
#tit2 img:nth-child(1){
    width: 0.15rem;
}
#tit2 p:nth-child(2){
    font-size: 0.12rem;
    display: inline;
}
#content {
    position: relative;
}
#content img{
    width: 0.65rem;
    position: absolute;
    left: 1.45rem;
    top: 2.35rem;
}
#content p:nth-child(2){
    font-size: 0.2rem;
    position: absolute;
    left: 1.1rem;
    top: 3.15rem;
}
#content p:nth-child(3){
    font-size: 0.12rem;
    color: gray;
    position: absolute;
    left: 1.05rem;
    top: 3.45rem;
}
#content button{
    width: 1.5rem;
    height: 0.45rem;
    background-color: green;
    color: white;
    font-size: 0.15rem;
    position: absolute;
    left: 1.05rem;
    top: 3.85rem;
}
</style>
