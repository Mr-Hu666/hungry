<template>
  <div id="wrap">
    <div class="top">
      <span class="j1" @click="back()">
        <img src="../../../static/imgs/back.png">

      </span>
      <span class="my1">我的</span>
        <span class="me" @click="go()">
          <img :src="showimg">
        </span>
    
          <span class="dl" @click="tiaozhuan()">{{dataname || denglu}}</span>

        <span class="shouji">
          <img src="../../../static/imgs/shouji.png">
        </span>
        <span class="zi">暂无绑定手机号</span>
        <span class="j2">
          <img @click="tiaozhuan()" class="youyou" src="../../../static/imgs/iconfontjiantou2.png">
        </span>
    </div>
    <div class="center">
      <router-link to="/ye">
        <div class="money">
          <p class="m1">0.00</p>
          <p class="m2">元</p>
          <p class="m3">我的余额</p>
        </div>
      </router-link>

      <router-link to="/youhui">
        <div class="coupon">
          <p class="c1">3</p>
          <p class="c2">个</p>
          <p class="c3">我的优惠</p>
        </div>
      </router-link>
      <router-link to="jifen">
        <div class="credit">
          <p class="d1">0</p>
          <p class="d2">分</p>
          <p class="d3">我的积分</p>
        </div>
      </router-link>
    </div>
    <div class="more">
      <span class="po">
        <router-link to>
          <img class="o1" src="../../../static/imgs/icon-1.png" alt>
          <p class="po1">我的订单</p>
          <img class="o2" src="../../../static/imgs/right.png" alt>
        </router-link>
      </span>
      <span class="sc">
        <router-link to="/jifen">
          <img class="s1" src="../../../static/imgs/bao.png" alt>
          <p class="sc1">积分商城</p>
          <img class="s2" src="../../../static/imgs/right.png" alt>
        </router-link>
      </span>
      <span class="hy">
        <router-link to="/huiyuanzx">
          <img class="h1" src="../../../static/imgs/huangguan.png" alt>
          <p class="hy1">饿了么会员卡</p>
          <img class="h2" src="../../../static/imgs/right.png" alt>
        </router-link>
      </span>
    </div>
    <div class="fuwu">
      <div class="zx">
        <router-link to="/fuwuzhongxin">
          <span>
            <img class="z1" src="../../../static/imgs/kuang.png" alt>
          </span>
          <p class="zx1">服务中心</p>
          <span>
            <img class="z2" src="../../../static/imgs/right.png" alt>
          </span>
        </router-link>
      </div>
      <div class="xiaz">
        <router-link to="/xiazai">
          <span>
            <img class="x1" src="../../../static/imgs/eliaomo.png" alt>
          </span>
          <p class="xiaz1">下载饿了么App</p>
          <span>
            <img class="x2" src="../../../static/imgs/right.png" alt>
          </span>
        </router-link>
      </div>
    </div>
    
<div class="bottomss">
           
            <div class="home" @click="tohome()">
                <img src="../../../static/imgs/homeF.png" alt="">
                <p>外卖</p>
            </div>
      
            
            
            <div class="search" @click="tosearch()">
                 <img src="../../../static/imgs/searchF.png" alt="">
                 <p>搜索</p>
            </div>
      
          
           <div class="order" @click="toorder()">
               <img src="../../../static/imgs/orderF.png" alt="">
               <p>订单</p>
           </div>
          
           
            <div class="meme" @click="tome()">
              <img src="../../../static/imgs/meT.png" alt="">
               <!-- <img src="../../../static/imgs/meT.png" alt=""> -->
                <p>我的</p>
            </div>
           
        </div>



  </div>
</template>
<script>
export default {
  name: "wode",
  data() {
    return {
      showimg:"",
     
      dataname: "",
      denglu: "登录/注册"
    };
  },
  created() {
    if(this.showimg==""){
      this.showimg=require("../../../static/imgs/meF.png");
    }
    if(this.getImg()){
      this.getImg();
    }
    this.dataname = this.$store.state.username;
  },
  methods: {
    tohome(){
      this.$router.push({name:"first"});
    },
    tosearch(){
      this.$router.push({name:"search"});
    },
     toorder(){
      this.$router.push({name:"order"});
    },
     back(){
        this.$router.back();
      },
    getImg(){
      const api="https://elm.cangdu.org/v1/user/"+this.$store.state.nameId;
        this.$http({
            url:api,
            method:"get",
        }).then(res=>{
            this.showimg="https://elm.cangdu.org/img/"+res.data.avatar;
        })
    },
    tiaozhuan(){
      if(this.dataname){
        this.$router.push({
          name:"zhanghu"
        })
      }
      else{
        this.$router.push({
          name:"login"
        })

      }
    }
  }
};
</script>
<style scoped>
#wrap {
  width: 3.75rem;
  height: 100vh;
  overflow: hidden;
  position: relative;
  background-color: #f5f5f5;
}
.top {
  width: 3.75rem;
  height: 1.5rem;
  background-color: #3190e8;
  /* overflow: hidden; */
}
.j1 {
  width: 0.1rem;
  height: 0.1rem;
  float: left;
}
.j1 img {
  margin-top: 0.1rem;
  width: 0.5rem;
  height: 0.4rem;
}
.my1 {
  position: absolute;
  text-align: center;
  color: white;
  top: 0.1rem;
  font-size: 0.2rem;
  left: 1.5rem;
  /* font-size:0.0rem; */
}
.me {
  position: absolute;
  top: 0.7rem;
  left: 0.1rem;
}
.me img {
  width: 0.5rem;
 border-radius: 50%; 
}
.dl {
  position: absolute;
  top: 0.75rem;
  left: 0.6rem;
  color: white;
  /* font-size:0.2rem; */
}
.shouji {
  position: absolute;
  top: 0.99rem;
  left: 0.6rem;
}
.shouji img {
  width: 0.25rem;
}
.zi {
  position: absolute;
  top: 1rem;
  left: 0.83rem;
  color: white;
  /* font-size: 10%; */
}
.j2 {
  position: absolute;
  top: 0.8rem;
  margin-left: 2.9rem;
  color: white;
}
.j2 img {
  width: 0.4rem;
}
.center {
  width: 3.75rem;
  height: 0.7rem;
  border-bottom: 1px solid whitesmoke;
  background-color: #fff;
}
.money {
  width: 1rem;
  position: absolute;
  top: 1.5rem;
  padding-right: 0.2rem;
  left: 0.1rem;
  text-align: center;
  height: 0.7rem;
  border-right: 1px solid lightgray;
  float: left;
}
.m1 {
  margin-top: 0.1rem;
  float: left;
  font-size: 0.25rem;
  color:#f90;
  margin-left: 0.1rem;
  font-weight: 700;
}
.m2 {
  margin-top: 0.15rem;
  font-size: 0.15rem;
  margin-left: 0.15rem;
  color: #666;
}
.m3 {
  float: left;
  margin-left: 0.1rem;
  font-size: 0.15rem;
 margin-top: 0.08rem;
  color: #666;
}
.coupon {
  width: 1rem;
  position: absolute;
  top: 1.5rem;
  left: 1.2rem;
  border-right: 1px solid lightgray;
  height: 0.7rem;
  text-align: center;
  padding-left: 0.2rem;
  padding-right: 0.5rem;
  padding-right: 0.1rem;
  font-size: 0.3rem;
}
.c1 {
  float: left;
  margin-top: 0.1rem;
  font-size: 0.25rem;
  color: #ff5f3e;
  margin-left: 0.4rem;
  font-weight: 700;
}
.c2 {
  margin-top: 0.15rem;
  font-size: 0.15rem;
  margin-left: 0.42rem;
  color: #666;
}
.c3 {
  top: 1.1rem;
  float: left;
  margin-left: 0.2rem;
  font-size: 0.15rem;
  margin-top: 0.08rem;
  color: #666;
}
.credit {
  width: 1rem;
  position: absolute;
  top: 1.5rem;
  right: 0.1rem;
  height: 0.7rem;
  text-align: center;

  font-size: 0.3rem;
  /* float: right;  */
}
.d1 {
  float: left;
  margin-top: 0.1rem;
  font-size: 0.25rem;
  color: #6ac20b;
  margin-left: 0.3rem;
  font-weight: 700;
}
.d2 {
  margin-top: 0.15rem;
  font-size: 0.15rem;
  margin-left: 0.3rem;
  color: #666;
}
.d3 {
  margin-top: 0.08rem;
  color: #666;
  float: left;
  margin-left: 0.2rem;
  font-size: 0.15rem;
  
}
.more {
  width: 3.75rem;
  height: 1.5rem;
  border-top: 8px solid whitesmoke;
  overflow: hidden;
   background-color: #fff;
}
.po {
  position: absolute;
  width: 3.75rem;
  margin-top: 0.15rem;
}
.o1 {
  float: left;
  width: 0.2rem;
  margin-left: 0.1rem;
}
.o1 img {
  width: 0.15rem;
}
.po1 {
  margin-left: 0.15rem;
  border-bottom: 1px solid whitesmoke;
  padding-bottom: 0.1rem;
  color: black;
}
.o2 {
  float: right;
  width: 0.15rem;
  margin-top: -0.3rem;
}
/* .o2 img{
        width: 0.15rem;
      } */
.sc {
  position: absolute;
  width: 3.75rem;
  margin-top: 0.55rem;
}
.s1 {
  float: left;
  width: 0.2rem;
  margin-left: 0.1rem;
}
.s1 img {
  width: 0.1rem;
}
.sc1 {
  margin-left: 0.15rem;
  border-bottom: 1px solid gainsboro;
  padding-bottom: 0.1rem;
  color: black;
}
.s2 {
  float: right;
  width: 0.15rem;
  margin-top: -0.3rem;
}

.hy {
  position: absolute;
  width: 3.75rem;
  margin-top: 0.96rem;
}

.h1 {
  float: left;
  width: 0.2rem;
  margin-left: 0.1rem;
}
.h1 img {
  width: 0.1rem;
}
.hy1 {
  margin-left: 0.15rem;
  border-bottom: 1px solid whitesmoke;
  padding-bottom: 0.1rem;
  color: black;
}
.h2 {
  float: right;
  width: 0.15rem;
  margin-top: -0.25rem;
}
.fuwu {
  width: 3.75rem;
  /* height: 1.4rem; */
  margin-top: -0.25rem;
  border-top: 9px solid whitesmoke;
  background-color: #fff;
}
.zx {
  width: 3.75rem;
  /* border: 1px solid blue; */
  /* position: absolute; */
  margin-top: 0.03rem;
}
.z1 {
  float: left;
  width: 0.2rem;
  margin-left: 0.1rem;
  margin-top: 0.01rem;
}
.zx1{
  margin-left: 0.2rem;
  border-bottom: 1px solid gainsboro;
  margin-top: 0.1rem;
  padding-bottom: 0.1rem;
  color: black;
   background-color: #fff;
}
.z2 {
  float: right;
  width: 0.15rem;
  margin-top: -0.25rem;
}
.xiaz {
  margin-top: 0.3rem;
}
.x1 {
  float: left;
  margin-left: 0.1rem;
  width: 0.2rem;
  margin-top: 0.01rem;
}
.xiaz1 {
  margin-left: 0.35rem;
  margin-top: -0.2rem;
  border-bottom: 1px solid gainsboro;
  padding-bottom: 0.1rem;
  color: black;
   background-color: #fff;
}
.x2 {
  float: right;
  width: 0.15rem;
  margin-top: -0.3rem;
}
.bottomss{
    width: 100%;
    background-color: #fff;
    height: 0.45rem;
    display: flex;
    border-top: 1px solid lightgray;
    justify-content: space-around;
    position: fixed;
    bottom: 0;
    left: 0;

}
.bottomss div{
   height: 0.45rem;    
   text-align: center;
   font-size: 0.1rem;
   color: black;
}
.bottomss img{
    margin-top: 0.03rem;
    height: 0.25rem;
}


</style>
