<template>
  <div>
    <div id="head">
      <img @click="back()" id="_head" src="../../../static/imgs/back.png" alt>
      <p id="_head_">服务中心</p>
    </div>
    <div id="top">
      <div id="left">
        <img id="left1" src="../../../static/imgs/hongren.png" alt>
        <p id="left2">在线客服</p>
      </div>
    
        <div id="right">
          <a href="tel:110">
          <img id="right1" src="../../../static/imgs/dianhua.png" alt>
          <p id="right2">在线客服</p>
          </a>
        </div>
      
    </div>
    <div id="center">
          <p id="center1">热门问题</p>
      </div>
    <ul class="li">
    <li @click="get1()">{{msg.supervipCaption}}</li>  
  <li @click="get2()">{{msg.signCaption}}</li>
  <li @click="get3()">{{msg.rankCaption}}</li>
  <li @click="get4()">{{msg.pointtextCaption}}</li>
  <li @click="get5()">{{msg.phototutorialCaption}}</li>
  <li @click="get6()">{{msg.paymentCaption}}</li>
  <li @click="get7()">{{msg.otherCaption}}</li>
  <li @click="get8()">{{msg.ontimeCaption}}</li>
  <li @click="get9()">{{msg.freshmanCaption}}</li>
  <li @click="get10()">{{msg.forgotCaption}}</li>
  <li @click="get11()">{{msg.discountCaption}}</li>
  <li @click="get12()">{{msg.disclaimerCaption}}</li>
  <li @click="get13()">{{msg.businessCaption}}</li>
  <li @click="get14()">{{msg.awesomeRestaurantCaption}}</li>
  <li @click="get15()">{{msg.anonymousBuyCaption}}</li>
  <li @click="get16()">{{msg.activityCaption}}</li>
  </ul>
  </div>
</template>
<script>
export default {
    name:"fuwuzhongxin",
    data() {
        return {
          msg:""
        }
    },
    created () {
      this.fuwuzhongxin()
    },
    methods: {
        back(){
            this.$router.go(-1);
        },
         fuwuzhongxin() {
      const api = "https://elm.cangdu.org/v3/profile/explain";
      this.$http({
        url: api,
        methods: "get",
        data: {}
      }).then(res => {
        this.msg = res.data;
        // console.log(res);
      });
    },
    get1(){
      this.$router.push({
        name:"public",
        query:{
          title:this.msg.supervipCaption,
          content:this.msg.supervipContent,
        }
      })
    },
    get2(){
      this.$router.push({
        name:"public",
        query:{
          title:this.msg.signCaption,
          content:this.msg.signContent,
        }
      })
    },
     get3(){
      this.$router.push({
        name:"public",
        query:{
          title:this.msg.rankCaption,
          content:this.msg.rankContent,
        }
      })
    },
    get3(){
      this.$router.push({
        name:"public",
        query:{
          title:this.msg.rankCaption,
          content:this.msg.rankContent,
        }
      })
    },
    get4(){
      this.$router.push({
        name:"public",
        query:{
          title:this.msg.pointtextCaption,
          content:this.msg.pointtextContent,
        }
      })
    },
    get5(){
      this.$router.push({
        name:"public",
        query:{
          title:this.msg.phototutorialCaption,
          content:this.msg.phototutorialContent,
        }
      })
    },
     get6(){
      this.$router.push({
        name:"public",
        query:{
          title:this.msg.paymentCaption,
          content:this.msg.paymentContent,
        }
      })
    },
    get7(){
      this.$router.push({
        name:"public",
        query:{
          title:this.msg.otherCaption,
          content:this.msg.otherContent,
        }
      })
    },
      get8(){
      this.$router.push({
        name:"public",
        query:{
          title:this.msg.ontimeCaption,
          content:this.msg.ontimeContent,
        }
      })
    },
     get9(){
      this.$router.push({
        name:"public",
        query:{
          title:this.msg.freshmanCaption,
          content:this.msg.freshmanContent,
        }
      })
    },
    get10(){
      this.$router.push({
        name:"public",
        query:{
          title:this.msg.forgotCaption,
          content:this.msg.forgotContent,
        }
      })
    },
     get11(){
      this.$router.push({
        name:"public",
        query:{
          title:this.msg.discountCaption,
          content:this.msg.discountContent,
        }
      })
    },
    get12(){
      this.$router.push({
        name:"public",
        query:{
          title:this.msg.disclaimerCaption,
          content:this.msg.disclaimerContent,
        }
      })
    },
    get13(){
      this.$router.push({
        name:"public",
        query:{
          title:this.msg.businessCaption,
          content:this.msg.businessContent,
        }
      })
    },
    get14(){
      this.$router.push({
        name:"public",
        query:{
          title:this.msg.awesomeRestaurantCaption,
          content:this.msg.awesomeRestaurantContent,
        }
      })
    },
    get15(){
      this.$router.push({
        name:"public",
        query:{
          title:this.msg.anonymousBuyCaption,
          content:this.msg.anonymousBuyContent,
        }
      })
    },
     get16(){
      this.$router.push({
        name:"public",
        query:{
          title:this.msg.activityCaption,
          content:this.msg.activityContent,
        }
      })
    }
    }
}
</script>
<style scoped>
#head {
  width: 100vw;
  height: 0.45rem;
  background-color: #3190e8;
}
#_head {
  margin-top: 0.1rem;
  width: 0.25rem;
  float: left;
}
#_head_ {
  text-align: center;
  line-height: 0.45rem;
  font-size: 0.2rem;
  font-weight: bold;
  color: white;
}
#top{
    overflow: hidden;
}
#left {
  width: 49.8vw;
  height: 0.95rem;
  background-color: #fff;
  float: left;
}
#left1 {
  width: 0.3rem;
  margin: 0.15rem 0 0.1rem 0.7rem;
}
#left2 {
  font-size: 0.15rem;
  margin-left: 0.5rem;
  color: #666;
}
#right {
  background-color: #fff;
  width: 49.8vw;
  height: 0.95rem;
  float: right;
}
#right1 {
  width: 0.3rem;
  margin: 0.15rem 0 0.1rem 0.7rem;
}
#right2 {
  font-size: 0.15rem;
  margin-left: 0.5rem;
  color: #666;
}
#center{
    width: 100vw;
    height: 0.7rem;
    background-color: #fff;
}
#center1{
    font-size: 0.18rem;
    color: #333;
    line-height: 0.7rem;
    margin-left: 0.15rem;
    margin-top: 0.01rem;
}
.li li{
    height: 0.45rem;
    line-height: 0.45rem;
    font-size: 0.14rem;
    padding-left: 0.15rem;
    margin-top: 0.01rem;
    background-color: white;
    color: #666;
}
</style>
