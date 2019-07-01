<template>
  <div id="wrap">
    <div class="top">
 <p @click="go()" class="left">
        <img src="../../../static/imgs/back.png">
      </p>
        <span class="jf">我的积分</span> 

      <div class="center">
        <p class="dq">当前积分</p>
        <router-link to="/jifenshuoming">
          <img class="img1" src="../../../static/imgs/wenhao.png">
<p class="sm">积分说明</p>
</router-link>
        <p class="qian">0分</p>
         <p @click="dh()" class="jl">积分兑换商品</p>
      </div>
    </div>
    <div class="butt">
        <p class="jy">最近30天积分纪录</p>
        <p class="jilu"><img src="../../../static/imgs/jifen.png"></p>
         <p class="jf">最近30天无积分纪录</p>
        <p class="zw">快去下单赚取大量积分吧</p>
    </div>
    <!-- 弹框 -->
    <div id="tankuang" v-if="tk">
 <img src="../../../static/imgs/pi.png" alt>
 <p>快去下单赚取大量积分吧</p>
 <p @click="qr()">确认</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "jifen",
  data() {
    return {
      
      tk:false,
     
    }
  },
  methods: {
     go(){
         this.$router.back(); 
      },
    yueshuoming(){
   this.$router.push({name:"jifenshuoming"});

    },
    dh(){
      if(this.tk==false){
        this.tk=true;
      }
    },
qr(){
if(this.tk==true){
  this.tk=false;
}
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
.jf{
  position: absolute;
  text-align: center;
  color:white;
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
  font-size: 0.13rem;
}
.img1{
  width: 0.1rem;
   margin-top: 0.05rem;
  
}
/* .img1 img{
   margin-top: 0.1rem;
  margin-right: 0.1rem; 
} */
.sm {
  margin-top: 0.05rem;
  float: right;
 margin-right: 0.1rem;
  color: #3190e8;
}
.qian {
    float: left;
    margin-top: 0.25rem;
 left: 0.1rem;
  font-size: 0.2rem;
}

.jl{
  margin-left: 0.15rem;
  margin-right: 0.15rem;
  margin-top: 1.1rem;
  padding: 0.1rem;
  height: 0.3rem;
  line-height: 0.3rem;
  text-align: center;
  color: white;
  background-color: #fe6d47;
  
}
.butt{
    width: 3.75rem;
   
}
.jy{
    margin-left: 0.1rem;
    margin-top: 0.1rem;
    }
.jilu{
    margin-top: 0.7rem;
    margin-left: 1.4rem;
   }
.jilu img{
     width:1rem;
     height: 1rem;
     }
   .jf{
margin-top: 0.1rem;
 left: 1.1rem;
font-size: 0.15rem;
color: #666;
   }  
   .zw{
margin-top: 0.4rem;
margin-left: 1.1rem;
font-size: 0.1rem;
color: #666;
   } 
   #tankuang {
  position: absolute;
  left: 0.3rem;
  top: 2.1rem;
  width: 3rem;
  height: 1.9rem;
  background-color: white;
  border-radius: 0.03rem;
  animation: 2s bounceIn;
}
#tankuang img {
  width: 0.7rem;
  height: 0.7rem;
  margin-left: 1rem;
 margin-top: 0.1rem;
}
#tankuang span {
  font-size: 0.17rem;
  color: #333;
  position: absolute;
  left: 0.83rem;
  bottom: 1.25rem;
  font-size: 0.3rem;
}
#tankuang p:nth-child(2){
  font-size: 0.18rem;
  text-align: center;
  margin-top: 0.2rem;
}
#tankuang p:nth-child(3) {
   width: 2.95rem;
  height: 0.4rem;
  background-color: #4cd964;
  position: absolute;
  bottom: 0;
  text-align: center;
  line-height: 0.4rem;
  margin-top: 0.1rem;
  font-weight: 700;
  color: white;
}
</style>
 
