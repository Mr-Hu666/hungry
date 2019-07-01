<template>
  <div id="wrap">
    <div class="top">
      <div class="top-s">
        <img @click="changeline1()" :src="'https://elm.cangdu.org/img/'+shopdata.image_path" class="img11">
        <div class="show">
          <p>{{shopdata.name}}</p>
          <p @click="shopdetail(shopdata)">商家配送/分钟送达/配送费￥{{shopdata.float_delivery_fee}}</p>
          <p>公告：{{shopdata.promotion_info}}</p>
          <div v-if="activityUse && activityUse.length>0" class="manjian"  @click="youhuiMsg()">
            <span v-if="activityUse">
          {{activityUse[0].description}}(APP专享)
          </span>
          <span v-if="activityUse" class="huodong">{{activityUse.length}}个活动</span>
          </div>
        </div>
        <img class="youj" src="../../../static/imgs/youj.png" alt>
        <img @click="back()" class="back1" src="../../../static/imgs/back.png" alt>
      </div>

      <div class="gifts">
        <span @click="changeline1()" class="shangpin">商品</span>
        <span @click="changeline2(shopdata)" class="pingjia">评价</span>
        <div class="line"></div>
      </div>
    </div>
    <div class="l-gifts" v-if="qie">
      <router-view></router-view>
    </div>
    <div class="sawit" v-if="saw">
      <p>{{shopdata.name}}</p>
      <p><span>优惠信息</span></p>
      <div class="divp"><p v-for="(v,i) in  activityUse" :key="'ac'+i">{{v.description}}(APP专享)</p></div>
      <p><span>商家公告</span></p>
      <p>{{shopdata.promotion_info}}</p>
      <div class="xximg">
      <img  @click="sawit()" src="../../../static/imgs/xxxxxx.jpg" alt="">
     </div>
    </div>
  </div>
</template>

 <script>
export default {
  name: "stores",
  data() {
    return {
      saw: false,
      qie: true,
      shopid: "",
      shopdata: "",
      food: "",
      classA: "cca",
      classB: "ccb"
    };
  },
  created() {
    
    this.getSid();
    this.getfood();
  },
  methods: {
    youhuiMsg() {
      this.saw = !this.saw;
    },
    sawit() {
      this.saw = !this.saw;
    },
    back(){
      this.$router.push({
        name:"first"
      });
      this.$store.state.totalprice=0;
      this.$store.state.obj=[];
    },
    getSid() {
      const api =
        "https://elm.cangdu.org/shopping/restaurant/" +
        this.$store.state.shopID;
      this.$http({
        url: api,
        method: "get",
        withCredentials: true
      }).then(res => {
        // console.log("你好");
        // console.log(res.data);
        this.shopdata = res.data;
      });
    },
    getfood() {
      const api =
        "https://elm.cangdu.org/shopping/v2/menu?restaurant_id=" +
        this.$store.state.shopID;
      this.$http({
        url: api,
        method: "get",
        withCredentials: true
      }).then(res => {
        // console.log("food");
        // console.log(res.data);
        this.food = res.data;
      });
    },
    changeline1() {
      var shangpin = document.getElementsByClassName("shangpin")[0];
      var pingjia = document.getElementsByClassName("pingjia")[0];
      var line = document.getElementsByClassName("line")[0];
      (shangpin.style.color = "blue"),
        (pingjia.style.color = "gray"),
        (line.style.left = "20%");
      this.$router.push({
        name: "stores_gifts"
      });
    },
    changeline2(shop) {
      this;
      var shangpin = document.getElementsByClassName("shangpin")[0];
      var pingjia = document.getElementsByClassName("pingjia")[0];
      var line = document.getElementsByClassName("line")[0];
      line.style.left = "70%";
      (shangpin.style.color = "gray"),
        (pingjia.style.color = "blue"),
        this.$router.push({
          name: "stores_comments",
          query: { shop }
        });
    },
    shopdetail(bb){
      this.$router.push({
        name:"detailshop",
        query: { bb }
      })
    }
  },
  computed: {
    activityUse: function() {
      if (this.shopdata.activities) {
        return this.shopdata.activities;
      }
    }
  }
};
</script>

 <style scoped>
#wrap {
  width: 3.75rem;
  /* height: 100vh; */
  overflow: hidden;
}
.top {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  height: 1.5rem;
  z-index: 20;
}
.top-s {
  background-color: rgb(189,186,205);
  width: 100%;
  height: 1rem;
  overflow: hidden;
  position: relative;
}
.img11 {
  float: left;
  /* width: 20%; */
  margin-left: 0.1rem;
  margin-top: 0.1rem;
  height: 0.6rem;
}
.show {
  /* border: 1px solid red; */
  width: 75%;
  float: left;
  height: 0.6rem;
  margin-left: 0.1rem;
  margin-top: 0.1rem;
  font-size: 0.12rem;
}
.show p:nth-child(1) {
  font-size: 0.17rem;
  margin-bottom: 0.1rem;
}
.show p:nth-child(2) {
  margin-bottom: 0.08rem;
}
.manjian {
  width: 100%;
  margin-top: 0.1rem;
  font-size: 0.12rem;
}
.huodong{
  position: absolute;
  right: 0.1rem;
  bottom: 0.1rem;
}
.youj {
  position: absolute;
  right: 0.15rem;
  top: 0.1rem;
  height: 0.24rem;
}
.back1 {
  width: 7%;
  position: absolute;
  left: 0.05rem;
  top: 0.05rem;
}
.gifts {
  width: 100%;
  height: 0.5rem;
  background-color: white;
  display: flex;
  justify-content: space-around;
  line-height: 0.5rem;
  position: relative;
  border-bottom: 1px solid lightgray;
}
.gifts span:nth-child(1) {
  font-size: 0.16rem;
  color: blue;
}
.gifts span:nth-child(2) {
  font-size: 0.16rem;
  color: gray;
}
.line {
  width: 0.4rem;
  height: 0.04rem;
  background-color: blue;
  position: absolute;
  left: 20%;
  bottom: 0.06rem;
}
/* .l-gifts{
 width: 100%;
 position:fixed;
 top: 0;
 left: 0;
 
} */
.sawit {
  width: 3.75rem;
  height: 100vh;
  position: fixed;
  color: white;
  left: 0;
  top: 0;
  z-index: 500;
  background-color: rgba(0, 0, 0, 0.9);
}
.sawit>p:nth-child(1){
  text-align: center;
  font-size: 0.22rem;
  margin-top: 0.4rem;
}
.sawit>p:nth-child(2){
  text-align: center;
  font-size: 0.16rem;
  margin-top: 0.4rem;
}
.sawit>p:nth-child(2) span{
  padding: 0.05rem;
  display: inline-block;
  border: 1px solid white;
  border-radius: 0.05rem;
}
.divp{
  font-size: 0.16rem;
  margin-top: 0.2rem;
  margin-left: 0.2rem;
}
.sawit>p:nth-child(4){
  text-align: center;
  font-size: 0.16rem;
  margin-top: 0.4rem;
}
.sawit>p:nth-child(4) span{
  padding: 0.05rem;
  display: inline-block;
  border: 1px solid white;
  border-radius: 0.05rem;
}
.sawit>p:nth-child(5){
  font-size: 0.16rem;
  margin-top: 0.2rem;
  margin-left: 0.2rem;
}
.xximg{
  width: 100%;
  text-align: center;
  position: absolute;
  bottom: 0;
}
.xximg img{
  width: 15%;
}
</style>
 