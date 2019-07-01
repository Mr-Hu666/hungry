<template>
    <div id="wrap">
    <div class="top">
      <p @click="back()" class="left">
        <img src="../../../static/imgs/back.png">
      </p>
      <p class="yh">我的优惠</p>
       </div>
        <div class="center">
            <p>尊敬的用户,随着会员体系逐渐完善,自</p>
            <p>2016年10月10日起,饿了么会员权益将做</p>
            <p>如下优化:购卡后31天内,累积享有30单</p>
            <p>减免配送费服务（每日最多3单,每单最高</p>
            <p>减免4元）。 注:已购买的会员服务不受影</p>
            <p>响,当前会员服务失效前无法购买新卡。</p>
        </div>
        <div class="butt">
            <p>Q1:特权介绍</p>
            <p>身份标识:饿了么会员服务有效期内,享有专属皇冠标</p>
            <p>识。</p>
            <p>减免配送费:饿了么会员卡自绑定账户之日起31天</p>
            <p>内,在「蜂鸟专送」标识商家下单，享有30次减免配送</p>
            <p>费特权，每日最多减免3单，每单最高可减4元。</p>
         <p>更多特权，敬请期待！</p>
            <p>Q2: 资费介绍</p>
            <p>饿了么会员卡：20元</p>
            <p>Q3: 使用说明</p>
            <p>当用户满足以下任一条件，会员服务自动失效：</p>
            <p>自绑定之日起超过31天；</p>
            <p>在31天内累计使用减免配送费的蜂鸟订单数量达到</p>
            <p>30单;</p>
            <p>Q4:购卡说明</p>
            <p>在线购买：饿了么App>我的>饿了么会员卡</p>
            <p>Q5: 温馨提示</p>
            <p>用户在当前会员服务失效前，无法购买新卡。</p>
              <p>请认准饿了么官方渠道，任何从其他第三方途径获得</p>
            <p>的会员卡，饿了么不保证其可用性。</p>
          </div>
    </div>
</template>
<script>
export default {
  name:"huiyuanshuoming " ,
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
.yh{
    padding-top: 0.2rem;
  margin-left: 1.3rem;
  font-size: 0.2rem;
  color: white;
}
.center{
padding-top: 0.2rem;
   width: 3.75rem;
  list-style:none;  
   line-height: 0.4 m rem;  
   font-style: normal;
 text-decoration: none;  
   background-color: white;
} 
.center>p{
    font-size: 0.15rem;
    padding-left: 0.45rem;
padding-right: 0.45rem;
 padding-top:0.05rem; 
}
.butt{
    background-color: white;
}
.butt>p:nth-child(1){
    padding-top:0.2rem; 
    margin-left: 0.1rem;
    font-size: 0.18rem;
}
.butt>p:nth-child(2){
    padding-top: 0.05rem;
    margin-left: 0.1rem;
    font-size: 0.14rem;
     color: #666;
}
.butt>p:nth-child(3){
    padding-top: 0.05rem;
    margin-left: 0.1rem;
    font-size: 0.14rem;
     color: #666;
}
.butt>p:nth-child(4){
    padding-top: 0.05rem;
    margin-left: 0.1rem;
    font-size: 0.14rem;
     color: #666;
}
.butt>p:nth-child(5){
    padding-top: 0.05rem;
    margin-left: 0.1rem;
    font-size: 0.14rem;
     color: #666;
}
.butt>p:nth-child(6){
    padding-top: 0.05rem;
    margin-left: 0.1rem;
    font-size: 0.14rem;
    color: #666;
}
.butt>p:nth-child(7){
    padding-top: 0.08rem;
    margin-left: 0.1rem;
    font-size: 0.14rem;
     color: #666;
}
.butt>p:nth-child(8){
    padding-top:0.2rem; 
    margin-left: 0.1rem;
    font-size: 0.18rem;
    }
    .butt>p:nth-child(9){
    padding-top: 0.08rem;
    margin-left: 0.1rem;
    font-size: 0.14rem;
     color: #666;
}
.butt>p:nth-child(10){
    padding-top:0.2rem; 
    margin-left: 0.1rem;
    font-size: 0.18rem;
    }
    .butt>p:nth-child(11){
    padding-top: 0.08rem;
    margin-left: 0.1rem;
    font-size: 0.14rem;
     color: #666;
}
.butt>p:nth-child(12){
    padding-top: 0.2rem;
    margin-left: 0.5rem;
    font-size: 0.14rem;
     color: #666;
}
.butt>p:nth-child(13){
    padding-top: 0.05rem;
    margin-left: 0.5rem;
    font-size: 0.14rem;
     color: #666;
}
.butt>p:nth-child(14){
    padding-top: 0.05rem;
    margin-left: 0.5rem;
    font-size: 0.14rem;
     color: #666;
}
.butt>p:nth-child(15){
    padding-top:0.2rem; 
    margin-left: 0.1rem;
    font-size: 0.18rem;
    }
    .butt>p:nth-child(16){
    padding-top: 0.08rem;
    margin-left: 0.1rem;
    font-size: 0.14rem;
     color: #666;
}
.butt>p:nth-child(17){
    padding-top:0.2rem; 
    margin-left: 0.1rem;
    font-size: 0.18rem;
    }
    .butt>p:nth-child(18){
    padding-top: 0.08rem;
    margin-left: 0.1rem;
    font-size: 0.14rem;
     color: #666;
}
.butt>p:nth-child(19){
    padding-top: 0.08rem;
    margin-left: 0.1rem;
    font-size: 0.14rem;
     color: #666;
}
.butt>p:nth-child(20){
    padding-top: 0.08rem;
    margin-left: 0.1rem;
    font-size: 0.14rem;
     color: #666;
}
</style>
