<template>
     <div id="wrap">
        <div class="top">
           <p @click="back()" class="left"><img src="../../../static/imgs/back.png"></p> 
           <p class="xz">下载</p>
        </div>
        <div class="center">
        <p class="tu"><img src="../../../static/imgs/eliaomo.png"></p>
        <p class="app">下载饿了么App</p>
        <button @click="xi()" class="xia">下载</button>
        </div>
        <!-- 弹框 -->
      <div id="tankuang" v-if="tk">
 <img src="../../../static/imgs/pi.png" alt>
 <p>IOS用户请前往AppStore下载</p>
 <p @click="qr()">确认</p>
    </div>
    </div>
</template>
<script>
export default {
    name:"xiazai",
    data() {
        return {
            tk:false,
         
        }
    },
    methods: {
        back(){
                this.$router.back();
            },
        xi(){
            if(this.tk == false){
        this.tk=true
      }
        },
         qr(){
      if(this.tk==true){
        this.tk=false
      }
    },
    }
}
</script>
<style scoped>
*{
    margin: 0;
    padding: 0;
}
#wrap{
    width:3.75rem;
    height: 100vh;
    position: relative;
    overflow: hidden;
    background-color: white;
}
.top{
    width:3.75rem;
    height:0.4rem;
    line-height: 0.4rem;
    background-color: #3190e8;
}
.left{
margin-left: 0.1rem;
margin-top: 0.1rem;
}
.left img{
    width:0.25rem;
    height: 0.25rem;
 }
 .center{
background-color: white;
 }
 .xz{
     text-align: center;
     margin-left: 0.1rem;
     color: white;
     font-size: 0.2rem;
 }
 .tu{
     margin-top: 0.3rem;
     margin-left:1.1rem; 
 }
 .tu img{
     width:1.6rem;
     height:1.6rem;
 }
 .app{
    margin-top: 0.1rem;
     margin-left:1.2rem; 
     font-size: 0.2rem; 
     color: #666;
 }
 .xia{
       margin-top: 0.3rem;
     margin-left:0.2rem; 
     width: 3.3rem;
     height: 0.4rem;
     background-color:#4cd964;
     font-size: 0.15rem;
     color: white;
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
