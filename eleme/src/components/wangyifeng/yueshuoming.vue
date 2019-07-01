<template>
    <div id="wrap">
        <div class="top">
            <p @click="back()" class="left"> <img src="../../../static/imgs/back.png"></p>
            <p class="wt">余额问题</p>
        </div>
        <ul class="bott">
<li class="p1">Q1:使用余额的条件</li>
<li class="p2">为了保护账户安全,使用余额钱必须先绑定手机号。</li>
<li class="p3">Q2:余额可以怎么用?</li>
<li class="p4">余额可以在饿了么平台上提现,当余额大于等于待支付金额时可以在线支付的商家中进行消费。提现功能将于2016年12月25日00:00全面开放。</li>
<li class="p5">Q3:我要如何提现?</li>
<li class="p6">为了保护账户安全和资金安全,您在提现前需要输入真实姓名和用该姓名开通的银行卡号、选择开户行,并验证已绑定饿了么账号的手机号。每日只能提现一次,每次限额50元。若提现超过50元,点击【提现】时系统会提示您已超额,请您修改提现金额。</li>
<li class="p7">Q4:为什么会提现失败?</li>
<li class="p8">可能原因有:您的姓名、开户行、银行卡号等信息不匹配;您当日的提现次数和金额超过限制;您的账户存在异常,被风控拦截。</li>
       </ul>
    </div>
</template>
<script>
export default {
    name:"yueshuoming",
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
 line-height: 0.2rem;
 font-style: normal;
 text-decoration: none;
 background-color: white;
 }
   .p1{
    margin-top: 0.1rem;
       margin-left: 0.1rem;
       font-size: 0.15rem;
   }
    .p2{
    margin-top: 0.1rem;
       margin-left: 0.1rem;
       font-size: 0.1rem;
   }
    .p3{
    margin-top: 0.1rem;
       margin-left: 0.1rem;
       font-size: 0.15rem;
   }
    .p4{
    margin-top: 0.1rem;
       margin-left: 0.1rem;
       font-size: 0.1rem;
       /* margin-right: 0.1rem; */
   }
    .p5{
    margin-top: 0.1rem;
       margin-left: 0.1rem;
       font-size: 0.15rem;
   }
    .p6{
    margin-top: 0.1rem;
       margin-left: 0.1rem;
       font-size: 0.1rem;
       margin-right: 0.1rem;
   }
    .p7{
    margin-top: 0.1rem;
       margin-left: 0.1rem;
       font-size: 0.1rem;
   }
    .p8{
    margin-top: 0.1rem;
       margin-left: 0.1rem;
       font-size: 0.1rem;
       margin-right: 0.1rem;
   }
</style>

