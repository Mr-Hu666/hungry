<template>
    <div id="wrap">
    <div class="top">
      <p @click="back()" class="left">
        <img src="../../../static/imgs/back.png">
      </p>
      <p class="gj">购买记录</p>
     </div>
      
         <p class="tu"> <img src="../../../static/imgs/xiaoren.png"></p>
      <p class="no">没有购买记录</p></div>
    
</template>
<script>
export default {
    name:"goumaijilu",
    data() {
        return {
           
        }
    },
    methods: {
       back(){
                this.$router.back();
            }
    },
}
</script>
<style scoped>
#wrap {
  width: 3.75rem;
  position: relative;
  height: 100vh;
  overflow: hidden;
  background-color: #fff;
}
.top {
  width: 3.75rem;
  background-color: #3190e8;
  height: 0.5rem;
}
.left {
  float: left;
  padding-left: 0.1rem;
  margin-top: 0.15rem;
}
.left img {
  width: 0.2rem;
  height: 0.2rem;
}
.gj {
  padding-top: 0.2rem;
  margin-left: 1.3rem;
  font-size: 0.2rem;
  color: white;
}
 
.tu{
   margin-top: 1rem;
  margin-left: 1.3rem;
 
}
.tu img{
    width: 0.7rem;
    height: 0.7rem;
}
.no{
     margin-top: 0.1rem;
  margin-left: 1.3rem;
  color:#999;
    
}
</style>
