<template>
    <div id="wrap">
        <div class="top">
            <p @click="back()" class="left"> <img src="../../../static/imgs/back.png"></p>
            <p class="wt">积分问题</p>
        </div>
        <ul class="bott">
<li class="p1">Q1:怎么获得积分？</li>
<li class="p2">在线支付的订单将获得订单积分奖励：</li>
<li class="p3">积分将在用户完成评价后获得。</li>
<li class="p4">可获得积分=订单金额×10（即1元=10点积分）。</li>
<li class="p5">订单金额指实际付款金额，不包含活动优惠金额。</li>
<li class="p6">每位用户每天最多可以获得2000积分,体验商家的订单</li>
<li class="p7">和评价不会增加积分。</li>
 
<li class="p8">Q2:积分用来做什么?</li>
<li class="p9">可以在积分商城兑换各种礼品。</li>
<li class="p10">Q3:礼品兑换很多天了还没有收到,该怎么办？</li>
<li class="p11"> 礼品从兑换日起,3个工作日(周末不算)内处理发货,发货后,通常会在3个工作日左右送达</li>
<li class="p12">Q4:礼品兑换中的手机充值款兑换,怎么样进行</li>
<li class="p13">充值,充值之前会和我电话联系嘛?</li>
<li class="p14">不会,手机充值卡兑换,是直接充值到您填写的手机号</li>
<li class="p15">上,充值之前不会和您电话确认,所以您在填写电话的时</li>
<li class="p16">候,请确认电话是否正确。</li>
       </ul>
    </div>
</template>
<script>
export default {
    name:"jifenshuoming",
data() {
    return {
      
    }
},
methods: {
     back(){
            this.$router.back( ); 
    
        }
},
}
</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
}
#wrap{
    width:3.75rem;
    height: 6.66rem;
position: relative;
background-color: white;
}
.top{
    background-color:  #3190e8;
    width: 3.75rem;
    height: 0.4rem;;
}
.left{
    margin-top: 0.1rem;
    float: left;
    margin-left: 0.2rem;
}
.left img{
  width: 0.2rem;
  height: 0.2rem;
  }
.wt{
  position: absolute;
  text-align: center;
  color: white;
  margin-top:0.1rem; 
  left:1.5rem; 
   }
   .bott{
width: 3.75rem;
list-style:none;
 font-style: normal;
 text-decoration: none;
 background-color: white;
 }
   .p1{
    margin-top: 0.1rem;
       margin-left: 0.1rem;
       font-size: 0.2rem;
   }
    .p2{
    margin-top: 0.2rem;
       margin-left: 0.1rem;
       font-size: 0.15rem;
       color: grey;
   }
    .p3{
    margin-top: 0.1rem;
       margin-left: 0.1rem;
       font-size: 0.15rem;
       color: grey;
   }
    .p4{
    margin-top: 0.1rem;
       margin-left: 0.1rem;
       font-size: 0.15rem;
       color: grey;
   }
    .p5{
    margin-top: 0.1rem;
       margin-left: 0.1rem;
        font-size: 0.15rem;
       color: grey;
   }
    .p6{
    margin-top: 0.1rem;
       margin-left: 0.1rem;
       font-size: 0.15rem;
       color: grey;
   
   }
    .p7{
    margin-top: 0.1rem;
       margin-left: 0.1rem;
       font-size: 0.15rem;
       color: grey;
   }
    .p8{
     margin-top: 0.1rem;
       margin-left: 0.1rem;
       font-size: 0.2rem;
   }
    .p9{
    margin-top: 0.1rem;
       margin-left: 0.1rem;
       font-size: 0.15rem;
       color: grey;
   }
    .p10{
     margin-top: 0.1rem;
       margin-left: 0.1rem;
       font-size: 0.18rem;
   }
   .p11{
    margin-top: 0.1rem;
       margin-left: 0.1rem;
       font-size: 0.15rem;
       color: grey;
   }
   .p12{
     margin-top: 0.1rem;
       margin-left: 0.1rem;
       font-size: 0.18rem;
   }
    .p13{
    margin-top: 0.1rem;
       margin-left: 0.1rem;
       font-size: 0.15rem;
       color: grey;
   }
    .p14{
    margin-top: 0.1rem;
       margin-left: 0.1rem;
       font-size: 0.15rem;
       color: grey;
   }
    .p15{
    margin-top: 0.1rem;
       margin-left: 0.1rem;
       font-size: 0.15rem;
       color: grey;
   }
    .p16{
    margin-top: 0.1rem;
       margin-left: 0.1rem;
       font-size: 0.15rem;
       color: grey;
   }
</style>

