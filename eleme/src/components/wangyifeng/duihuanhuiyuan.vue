<template>
    <div id="wrap">
    <div class="top">
      <p @click="back()" class="left">
        <img src="../../../static/imgs/back.png">
      </p>
      <p class="dy">兑换会员</p>
    </div>
    <p class="cg">成功兑换后将关联到当前账号:</p>
    
<input v-model="inpvalue" class="kh" type="text" placeholder="请输入10位卡号"><br>
    <input v-model="inpvalue" class="km" type="text" placeholder="请输入6位卡密 ">
    <button class="dh">兑换</button>
    <div class="butt">
    <p>——温馨提示——</p>
    <p>新兑换的会员服务，权益以「会员说明」为准。</p>
    <p>月卡：30次减免配送费。</p>
    <p>季卡：90次减免配送费。</p>
    <p>年卡：360次减免配送费。</p>
    <p>＊仅限蜂鸟专送订单，每日最多减免3单，每单最高减</p>
    <p>免4元（一个月按31天计算）</p></div>
    </div>
</template>
<script>
export default {
    name:"duihuanhuiyuan",
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
  overflow: hidden;
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
.dy{
    padding-top: 0.2rem;
  margin-left: 1.3rem;
  font-size: 0.2rem;
  color: white;
}
.cg{
    width: 3.75rem;
    margin-left:0.2rem;
    margin-top:0.1rem;
    color: #666;  
}
.kh{
background-color: white;
 width:3.75rem;
    margin-top: 0.1rem;
line-height: 0.4rem;
font-size: 0.15rem;
padding-left: 0.1rem;
border-bottom: 1px solid gainsboro;
 }
.km{
background-color: white;
 width:3.75rem;
   
line-height: 0.4rem;
font-size: 0.15rem;
padding-left: 0.1rem;
}
.dh {
    width:3.5rem;
    height: 0.4rem;
    line-height: 0.4rem;
     margin-left: 0.1rem;
     margin-top: 0.1rem;
     color: white;
     border-radius: 0.05rem;
     background-color: #ccc;
}
.butt{
    width:3.75rem;
color: #aaa;
padding-top: 0.2rem;
}
.butt>p:nth-child(1){
    text-align: center;
    font-size: 0.18rem;
}
.butt>p:nth-child(2){
   margin-left: 0.5rem;
   margin-top: 0.15rem;
    font-size: 0.1rem;
}
.butt>p:nth-child(3){
   margin-left: 0.5rem;
   margin-top: 0.05rem;
    font-size: 0.1rem;
}
.butt>p:nth-child(4){
   margin-left: 0.5rem;
   margin-top: 0.05rem;
    font-size: 0.1rem;
}
.butt>p:nth-child(5){
   margin-left: 0.5rem;
   margin-top: 0.05rem;
    font-size: 0.1rem;
}
.butt>p:nth-child(6){
   margin-left: 0.5rem;
   margin-top: 0.05rem;
    font-size: 0.1rem;
}
.butt>p:nth-child(7){
   margin-left: 0.5rem;
   margin-top: 0.05rem;
    font-size: 0.1rem;
}
</style>
