<template>
  <div id="wrap">
    <div class="top">
      <p @click="back()" class="left">
        <img src="../../../static/imgs/back.png">
      </p>
      <p class="hs">红包说明</p>
    </div>
     
      <ul class="center">
        <li class="p1">Q1:怎么获得红包？</li>
        <li class="p2">通过邀请好友获得</li>
        <li class="p3">在下单返红包的商家下单获得</li>
        <li class="p4">强微信朋友分享的红包获得</li>
        <li class="p5">Q2:红包用来做什么?</li>
        <li class="p6">可以抵扣在线支付时的实际支付金额</li>
        <li class="p7">Q3:红包的门槛金额按照什么金额计算</li>
        <li class="p8">红包的门槛金额按照(选购菜品折后价+餐盒费)的金</li>
        <li class="p9">额作为计算]槛，即购物车显示的金额(7.3以上版</li>
        <li class="p10">本)。假设红包满30可用,只要选购的菜品现价(折后</li>
        <li class="p11">价) +餐盒费超过30,就可以使用红包。</li>
        <li class="p12">Q4:一个红包能拆开多次使用吗?</li>
        <li class="p13">不能，-个红包只能一次性使用,不能分开使用。</li>
        <li class="p14">Q5:下单的时候使用了红包,但是后来订单取消</li>
        <li class="p15">了，红包还会返还吗?</li>
        <li class="p16">会的,订单无效后红包会自动返还到您的账户里。</li>
        <li class="p17">Q6:红包兑换码怎样兑换成红包,怎样查看红</li>
        <li class="p18">包?</li>
        <li class="p19">在个人中心>我的红包>兑换红包,输入兑换码进行兑换。</li>
        <li class="p20">Q7:邀请好友了,为什么没获得红包?</li>
        <li class="p21">先检查下您是否在同一设备上进行的邀请?或者被邀请人</li>
        <li class="p22">是否通过您发给对方的链接进行注册?而非自已复制链接</li>
        <li class="p23">注册的。同一设备上邀请或没有按照点击发送的链接邀请</li>
        <li class="p24">都是无效邀请。如果您是正常邀请没获得红包,可以致电</li>
        <li class="p25">客服进行查实。</li>
        <li class="p26">Q8:预订早餐、预订午餐的红包怎么使用?在哪</li>
        <li class="p27">里查询?</li>
        <li class="p28">预订早餐、预订午餐的红包暂时不支持直接点外卖使用,</li>
        <li class="p29">并且当前点</li>
        <li class="p30">外卖的红包也暂时不支持在预订早餐、预订午</li>
        <li class="p31">餐时使用。</li>
        <li class="p32">预订早餐、预订午餐的红包从APP首页点击“预订早</li>
        <li class="p33">餐”按钮进入后在右上角的个人中心中查找预订早餐、预</li>
        <li class="p34">午餐的红包。</li>
        <li class="p35">Q9:互斥红包怎么使用?</li>
        <li class="p36">互斥红包不与其他优惠活动(包含但不限于:新用户专</li>
        <li class="p37">享、满X元减X元、满X元赠XX)同时使用。</li>
        <li class="p38">Q10:返红包活动，红包领取规则是什么?</li>
        <li class="p39">同一个手机号-天限领取三个。</li>
        <li class="p40">同一注册用户-天限领取三个。</li>
        <li class="p41">注册用户红包直接发送至用户账户里。</li>
        <li class="p42">非注册用户红包以兑换码短信的形式发送至用户手机，注</li>
        <li class="p43">册后凭兑换码兑换即可。</li>
        <li class="p44">红包的使用周期为1周，自红包发放的第2天开始计算。</li>
        <li class="p45">同一个手机号-天最多使用两个红包。</li>
        <li class="p46">未收到红包短信的用户注意查看手机里的拦截短信。</li>
        <li class="p47">有任何问题请拨打客服电话: 10105757.</li>
      </ul>
     
  </div>
</template>
<script>
export default {
  name: "hongbaoshuoming",
  data() {
    return {
     
    };
  },
  methods: {
     back() {
        this.$router.back();
      }
  },
};
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
.hs {
  padding-top: 0.2rem;
  margin-left: 1.3rem;
  font-size: 0.2rem;
  color: white;
}
.center {
  width: 3.75rem;
  list-style:none;  
  line-height: 0.2rem;
    font-style: normal;
 text-decoration: none;  
   background-color: white;
}
.p1 {
 padding-top: 0.1rem;
  margin-left: 0.1rem;
  font-size: 0.18rem;
}
.p2 {
    color: gray;
 padding-top: 0.2rem;
  margin-left: 0.1rem;
  font-size: 0.15rem;
}
.p3{
 padding-top: 0.01rem;
  margin-left: 0.1rem;
  font-size: 0.15rem;
  color: gray;
}
.p4{
 padding-top: 0.01rem;
  margin-left: 0.1rem;
  font-size: 0.15rem;
  color: gray;
}
.p5 {
 padding-top: 0.1rem;
  margin-left: 0.1rem;
  font-size: 0.18rem;
}
.p6{
 padding-top: 0.1rem;
  margin-left: 0.1rem;
  font-size: 0.15rem;
  color: gray;
}
.p7 {
 padding-top: 0.1rem;
  margin-left: 0.1rem;
  font-size: 0.18rem;
}
.p8{
 padding-top: 0.1rem;
  margin-left: 0.1rem;
  font-size: 0.15rem;
  color: gray;
}
.p9{
 padding-top: 0.01rem;
  margin-left: 0.1rem;
  font-size: 0.15rem;
  color: gray;
}
.p10{
 padding-top: 0.01rem;
  margin-left: 0.1rem;
  font-size: 0.15rem;
  color: gray;
}
.p11{
 padding-top: 0.01rem;
  margin-left: 0.1rem;
  font-size: 0.15rem;
  color: gray;
}
.p12{
 padding-top: 0.1rem;
  margin-left: 0.1rem;
  font-size: 0.18rem;
}
.p13{
 padding-top: 0.1rem;
  margin-left: 0.1rem;
  font-size: 0.15rem;
  color: gray;
}
.p14{
 padding-top: 0.1rem;
  margin-left: 0.1rem;
  font-size: 0.18rem;
}
.p15{
 padding-top: 0.1rem;
  margin-left: 0.1rem;
  font-size: 0.18rem;
}
.p16{
 padding-top: 0.1rem;
  margin-left: 0.1rem;
  font-size: 0.15rem;
  color: gray;
}
.p17{
 padding-top: 0.1rem;
  margin-left: 0.1rem;
  font-size: 0.18rem;
}
.p18{
 padding-top: 0.1rem;
  margin-left: 0.1rem;
  font-size: 0.18rem;
}
.p19{
 padding-top: 0.1rem;
  margin-left: 0.1rem;
  font-size: 0.15rem;
  color: gray;
}
.p20{
 padding-top: 0.1rem;
  margin-left: 0.1rem;
  font-size: 0.18rem;
}
.p21{
 padding-top: 0.1rem;
  margin-left: 0.1rem;
   color: gray;
}
.p22{
 padding-top: 0.01rem;
  margin-left: 0.1rem;
   color: gray;
}
.p23{
 padding-top: 0.01rem;
  margin-left: 0.1rem;
   color: gray;
}
.p24{
 padding-top: 0.01rem;
  margin-left: 0.1rem;
   color: gray;
}
.p25{
 padding-top: 0.01rem;
  margin-left: 0.1rem;
   color: gray;
}
.p26{
 padding-top: 0.1rem;
  margin-left: 0.1rem;
  font-size: 0.18rem;
}
.p27{
 padding-top: 0.1rem;
  margin-left: 0.1rem;
  font-size: 0.18rem;
}
.p28{
 padding-top: 0.1rem;
  margin-left: 0.1rem;
   color: gray;
}
.p29{
 padding-top: 0.01rem;
  margin-left: 0.1rem;
   color: gray;
}
.p30{
 padding-top: 0.01rem;
  margin-left: 0.1rem;
   color: gray;
}
.p31{
 padding-top: 0.01rem;
  margin-left: 0.1rem;
   color: gray;
}
.p32{
 padding-top: 0.01rem;
  margin-left: 0.1rem;
   color: gray;
}
.p33{
 padding-top: 0.01rem;
  margin-left: 0.1rem;
   color: gray;
}
.p34{
 padding-top: 0.01rem;
  margin-left: 0.1rem;
   color: gray;
}
.p35{
 padding-top: 0.1rem;
  margin-left: 0.1rem;
  font-size: 0.18rem;
}
.p36{
 padding-top: 0.1rem;
  margin-left: 0.1rem;
   color: gray;
}
.p37{
 padding-top: 0.01rem;
  margin-left: 0.1rem;
   color: gray;
}
.p38{
 padding-top: 0.1rem;
  margin-left: 0.1rem;
  font-size: 0.18rem;
}
.p39{
 padding-top: 0.1rem;
  margin-left: 0.1rem;
   color: gray;
}
.p40{
 padding-top: 0.01rem;
  margin-left: 0.1rem;
   color: gray;
}
.p41{
 padding-top: 0.01rem;
  margin-left: 0.1rem;
   color: gray;
}
.p42{
 padding-top: 0.01rem;
  margin-left: 0.1rem;
   color: gray;
}
.p43{
 padding-top: 0.01rem;
  margin-left: 0.1rem;
   color: gray;
}
.p44{
 padding-top: 0.01rem;
  margin-left: 0.1rem;
   color: gray;
}
.p45{
 padding-top: 0.01rem;
  margin-left: 0.1rem;
   color: gray;
}
.p46{
 padding-top: 0.01rem;
  margin-left: 0.1rem;
   color: gray;
}
.p47{
 padding-top: 0.01rem;
  margin-left: 0.1rem;
   color: gray;
}
</style>
