<template>
  <div id="wrap">
    <div class="top">
      <div @click="back()" class="t">
        <img src="../../../static/imgs/back.png">
        <p class="zx">会员中心</p>
      </div>
    </div>
    <p class="zh">为账户购买会员</p>
    <div class="center">
      <div class="c">
        <p class="hy">会员特权</p>
        <p class="j1">
          <router-link to="/huiyuanshuoming">
            <span class="sm" style="color:gray">会员说明</span>
            <img src="../../../static/imgs/right.png">
          </router-link>
        </p>
      </div>
    </div>
    <div class="two">
      <div class="tw">
        <div class="first">
          <div class="a">
            <img src="../../../static/imgs/sheng.png">
          </div>
          <div class="b">
            <p class="jm">减免配送费</p>
            <p class="jian">每月减免30单，每日可减免3单，每单最高减4元</p>
            <p class="jian">蜂鸟专送专享</p>
          </div>
        </div>
        <div class="first" style="border-top:1px solid gainsboro;">
          <div class="a">
            <img src="../../../static/imgs/sheng.png">
          </div>
          <div class="b">
            <p class="jm">减免配送费</p>
            <p class="jian">每月减免30单，每日可减免3单，每单最高减4元</p>
            <p class="jian">蜂鸟专送专享</p>
          </div>
        </div>
      </div>
    </div>
    <div class="butt">
      <p class="kt">开通会员</p></div>
<div class="center">
      <span class="yue">1个月</span>
      <span class="qian">￥20</span>
      <router-link to="/zaixian">
        <button class="gm">购买</button>
      </router-link>
    </div>
    
      <router-link to="/duihuanhuiyuan" class="ka">
        <p class="duihuan">兑换会员</p>
        <p class="km">使用卡号卡密</p>
        <p class="j2">
          <img src="../../../static/imgs/right.png">
        </p>
      </router-link>
  <router-link to="/goumaijilu" class="fp">
        <p class="gl">购买记录</p>
        <p class="kp">开发票</p>
        <p class="j3">
          <img src="../../../static/imgs/right.png">
        </p>
      </router-link>
   
  </div>
</template>
<script>
export default {
  name: "huiyuanzx",
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
* {
  margin: 0;
  padding: 0;
}
#wrap {
  width: 3.75rem;
  overflow: hidden;
}
.top {
  width: 100%;
  height: 0.5rem;
  background-color: rgb(49, 144, 232);
}
.t {
  width: 50%;
  height: 100%;
  margin-left: 0.1rem;
  font-size: 0.2rem;
  font-weight: bold;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.t img {
  width: 0.25rem;
}
.zh {
  width: 100%;
  height: 0.5rem;
  line-height: 0.5rem;
  margin-left: 0.1rem;
  font-size: 0.15rem;
}
.center {
  width: 100%;
  background-color: #fff;
}
.c {
  width: 90%;
  height: 0.5rem;
  margin-left: 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.15rem;
  border-bottom: 1px solid gainsboro;
}
.c img {
  width: 0.2rem;
}
.j1 {
  width: 1rem;
  height: 0.5rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.two {
  width: 100%;
  height: 2rem;
  background-color: #fff;
}
.tw {
  width: 90%;
  margin: 0 auto;
}
.first {
  width: 100%;
  height: 1rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.a {
  width: 20%;
}
.b {
  width: 80%;
}
.jm {
  font-size: 0.17rem;
  margin-bottom: 0.05rem;
}
.jian {
  font-size: 0.12rem;
  color: gray;
}
.butt {
  width: 3.75rem;
  background-color: white;
  margin-top: 0.1rem;
}
.kt {
  width: 3.75rem;
  height: 0.4rem;
  line-height: 0.4rem;
  margin-left: 0.1rem;
  font-size: 0.15rem;
  border-bottom: 1px solid gainsboro;
}
.center{
  width:100%;
  height: 0.5rem;
  line-height: 0.5rem;
margin-top: 0.1rem;
}
.yue {
  height: 0.3rem;
  line-height: 0.3rem;
 margin-left: 0.1rem;
align-items: center;
  font-size: 0.15rem;
}
.qian {
  color: #f60;
  margin-left: 0.1rem;

  font-size: 0.15rem;
  align-items: center;
}
.gm {
  float: right;
  margin-right: 0.3rem;
  width: 0.6rem;
  height: 0.3rem;
  margin-top: 0.1rem;
 font-size: 0.15rem;
  background-color: white;
  border: 1px solid #f60;
  color: #f60;
}
.ka {
  width: 3.75rem;
  height: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.15rem;
  background-color: #fff;
  margin-top: 0.1rem;
}
.duihuan {
  font-size: 0.18rem;
  margin-left: 0.1rem;
}
.km {
  padding-left: 1.8rem;
  font-size: 0.15rem;
  color: #999;
}
.j2 {
  width: 0.2rem;
  height: 0.5rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.j2 img {
  width: 0.2rem;
}
.fp {
  width: 3.75rem;
  height: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.15rem;
  background-color: #fff;
  margin-top: 0.1rem;
}
.gl {
  font-size: 0.18rem;
  margin-left: 0.1rem;
}
.kp {
  float: right;
  padding-left: 1.8rem;
  font-size: 0.15rem;
  color: #999;
}
.j3 {
  width: 0.2rem;
  height: 0.5rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.j3 img {
  width: 0.2rem;
}
</style>
