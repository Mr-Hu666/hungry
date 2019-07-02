<template>
  <div id="wrap">
    <div class="top">

      <p class="left">
        <img src="../../../static/imgs/back.png" @click="gowh()">
      </p>
        <span @click="yueshuoming()" class="yue">我的余额</span> 

      <div class="center">
        <p class="dq">当前余额</p>
        <router-link to="yueshuoming">
             <img class="img1" src="../../../static/imgs/wenhao.png">
<p class="sm">余额说明</p></router-link>
        <p class="qian">0.00元</p>
         <p class="tx">提现</p>
      </div>
    </div>
    <div class="butt">
        <p class="jy">交易明细</p>
        <p class="jilu"><img src="../../../static/imgs/dingdan.png"></p>
        <p class="zw">暂无明细记录</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "ye",
  data() {
    return {
     
    }
  },
  methods: {
     gowh(){
         this.$router.push({name:"wode"});
      },
    yueshuoming(){
   this.$router.push({name:"yueshuoming"});

    }
  }
};
</script>
 <style scoped>
#wrap {
  width: 3.75rem;
  overflow: hidden;
  position: relative;
}
.top {
  width: 3.75rem;
  height: 2.4rem;
  background-color: #3190e8;
}
.left {
  float: left;
  padding-left: 0.1rem;
}
.left img {
  width: 0.3rem;
  height: 0.3rem;
}
.yue {
  position: absolute;
  text-align: center;
  color: white;
  margin-top:0.2rem; 
  left:1.5rem; 
   
}
.center {
  width: 95%;
    margin: 0 auto;
  height: 1.8rem;
  position: absolute;
    top: 0.5rem;
    left: 0.1rem;
   border-radius: 0.1rem;
background-color: white;
}
.dq {
    float: left;
  margin-left: 0.1rem;
margin-top: 0.05rem;
  font-size: 0.1rem;
}
.img1{
  position: absolute;
  width: 0.1rem;
 top: 0.1rem;
 right:0.7rem;
  
}
.sm {
  margin-top: 0.05rem;
  float: right;
 margin-right: 0.1rem;
  color: #3190e8;
}
.qian {
  margin-top: 0.2rem;
 margin-left: 0.1rem;
  font-size: 0.2rem;
}

.tx {
   margin-left: 0.15rem;
  margin-right: 0.15rem;
  margin-top: 0.85rem;
  padding: 0.1rem;
  text-align: center;
  background-color: grey;
  color: white;
}
.butt{
    width: 3.75rem;
   
}
.jy{
    margin-left: 0.1rem;
    margin-top: 0.1rem;
    }
.jilu{
    margin-top: 1.5rem;
    margin-left: 1.5rem;
   }
.jilu img{
     width:0.8rem;
     }
.zw{
 margin-top: 0.2rem;
    margin-left: 1.4rem
}
</style>
 
