<template>
  <div id="wrap">
    <div class="top">
      <router-link to="/first">
        <span>
          <img src="../../../static/imgs/back.png" alt>
        </span>
      </router-link>
      <span class="topS1">{{names}}</span>
    </div>
    <div class="title">
      <div @click="change1()" class="tit1"> <router-link to="/part"> 
          <p v-if="this.$store.state.show1">{{names}}</p>
          <p :style="{color:this.$store.state.color1}" v-if="this.$store.state.xian1">分类</p>
          <img v-if="this.$store.state.show1" src="../../../static/imgs/up1.png" alt>
          <img v-if="this.$store.state.xian1" src="../../../static/imgs/up2.png" alt>
        </router-link></div>
           
          <div @click="change2()" class="tit2">
          <p :style="{color:color2}">排序</p>
          <img v-if="show2" src="../../../static/imgs/up1.png" alt>
          <img v-if="xian2" src="../../../static/imgs/up2.png" alt>
        </div>

       <part v-if="this.$store.state.xian1"></part>
      <paixu v-if="xian2" @ee="cc"></paixu>
       <choose v-if="this.$store.state.xian3"></choose>

        <router-link to="/choose"><div @click="change3()" class="tit3">
          <p :style="{color:this.$store.state.color3}">筛选</p>
          <img v-if="this.$store.state.show3" src="../../../static/imgs/up1.png" alt>
          <img v-if="this.$store.state.xian3" src="../../../static/imgs/up2.png" alt>
        </div>
    </router-link>


    </div>
    <div class="nowshops">
      <div v-for="(v,i) in xinxi" :key="i" class="loopline" @click="nexts(v.id)">
        <div class="leftimg">
          <img :src="'https://elm.cangdu.org/img/'+v.image_path">
        </div>
        <div class="baocen">
          <div class="cen-p1">
            <span>品牌</span>
            <span v-if="v.name">{{v.name}}</span>
            <div class="bao-rig">
              <span v-if="v.supports[0]">{{v.supports[0].icon_name}}</span>
              <span v-if="v.supports[1]">{{v.supports[1].icon_name}}</span>
              <span v-if="v.supports[2]">{{v.supports[2].icon_name}}</span>
            </div>
          </div>
          <div class="cen-p2">
            <!-- <el-rate
              v-model="v.rating"
              disabled
              :show-score="seen"
              text-color="#ff9900"
              class="rates"
            ></el-rate> -->
            <van-rate v-model="v.rating" allow-half readonly color="#ff6000" class="rates" size="0.12rem" />
            <span class="xingxing">{{v.rating}}</span>
            <span>月售{{v.recent_order_num}}单</span>
            <div class="bao-rig2" v-if="v.delivery_mode">
              <span v-if="v.delivery_mode.text">{{v.delivery_mode.text}}</span>
              <span v-if="v.supports[1]">{{v.supports[1].name}}</span>
            </div>
          </div>
          <div class="cen-p3">
            <span>￥{{v.float_minimum_order_amount}}起送 / 配送费约￥{{v.float_delivery_fee}}</span>
            <div class="rig3">
              <span>{{v.distance}}</span>/
              <span>{{v.order_lead_time}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import paixu from "@/components/liujin/paixu";
import part from "@/components/liujin/part";
import choose from "@/components/liujin/choose";
export default {
  name: "sweet",
  data() {
    return {
      names: "",
      show4: false,
      show2: true,  
      xian2: false,
      color2: "",
      seen: true,
      latitude: "",
      longitude: "",
      position: "",
      xinxi: [],
      num: "",
      datamsgFormSon: "",
      num1: 10,
      num2: 0, //记录滚动的次数
    };
  },
  created() {
    // console.log(this.$route);
    this.names = this.$route.query.id;
    // this.geteat();
    // console.log(this.$route.query);
    // this.name = this.$route.query.id;
    this.latitude = this.$route.query.latitude;
    // console.log(this.latitude);
    this.longitude = this.$route.query.longitude;
    // console.log(this.longitude);
    this.geteat();
    this.getPosition();
    this.getShops();
  },
  //挂在完成后触发 调用滚动方法
  mounted() {
    //可以在这里面直接进行滚动条的获取
    window.addEventListener("scroll", this.handleScroll, true);
  },
  computed: {
    getLa() {
      return this.latitude;
    },
    getLo() {
      return this.longitude;
    }
  },
  methods: {
    back() {
      this.$router.back();
    },
    nexts(vid) {
      this.$router.push({
        name: "stores"
        // params:{sid:vid},
      });
      this.$store.commit("getshopID", vid);
    },
    //在父组件 methods 中定义 show 方法，供子组件调用
    cc: function(str) {
      // console.log("aaaa");
      this.getShops();
      this.show2=!this.show2;
      this.xian2=!this.xian2;
      this.color2="";
      
    },
    geteat() {
      const api = "https://elm.cangdu.org/shopping/v2/restaurant/category";
      this.$http({
        url: api,
        method: "get"
      }).then(res => {
        // console.log(res);
      });
    },
    getPosition() {
      const api =
        "https://elm.cangdu.org/v2/pois/" +
        this.latitude +
        "," +
        this.longitude;
      this.$http({
        url: api,
        method: "get",
        withCredentials: true
      }).then(res => {
        // console.log(this.latitude);
        // console.log("iddd");
        // console.log(this.longitude);
        // console.log()
        // this.detail = res.data;
      });
    },
    getShops() {
      const api =
        "https://elm.cangdu.org/shopping/restaurants?latitude=" +
        this.$store.state.latitude +
        "&longitude=" +
        this.$store.state.longitude +
        "&order_by=" +
        this.$store.state.paixu+"&limit="+this.num1;
      this.$http({
        url: api,
        method: "get",
        withCredentials: true
      }).then(res => {
        console.log(api);
        console.log(this.$store.state.paixu);
        console.log(this.$store.state.latitude);
        console.log(this.$store.state.longitude);
        console.log(res.data);
        this.xinxi = res.data;
      });
    },
    change1() {
      this.$store.state.show1 = !this.$store.state.show1;
      this.$store.state.xian1 = !this.$store.state.xian1;
      if (this.xian2 == true) {
        this.show2=!this.show2;
        this.xian2 =!this.xian2;
        this.color2 = "";
      } if (this.$store.state.xian3==true) {
         this.$store.state.color3 = "";
        this.$store.state.show3 =!this.$store.state.show3;
        this.$store.state.xian3=!this.$store.state.xian3;

      } 
    },
    change2(){
       this.show2 =!this.show2;
       this.xian2=!this.xian2;
       if (this.color2=="blue") {
         this.color2="";
       }else{
         this.color2="blue";
       }
       if (this.$store.state.xian1==true) {
         this.$store.state.color1="";
         this.$store.state.show1=!this.$store.state.show1;
         this.$store.state.xian1=!this.$store.state.xian1;
       }
      else if (this.$store.state.xian3==true) {
        this.$store.state.xian3 =!this.$store.state.xian3;
        this.$store.state.show3 =!this.$store.state.show3;
         this.$store.state.color3="";
      } 
    },
     change3(){
       this.$store.state.show3 =!this.$store.state.show3;
       this.$store.state.xian3=!this.$store.state.xian3;
       if (this.$store.state.color3=="blue") {
         this.$store.state.color3="";
       }else{
         this.$store.state.color3="blue";
       }
       if (this.$store.state.xian1==true) {
         this.color1="";
         this.$store.state.show1=!this.$store.state.show1;
         this.$store.state.xian1=!this.$store.state.xian1;
       }
      else if (this.xian2==true) {
        this.xian2 =!this.xian3;
        this.show2 =!this.show3;
         this.color2="";
      } 
    },
     handleScroll() {
      // 方法一
      var top = Math.floor(
        document.body.scrollTop ||
          document.documentElement.scrollTop ||
          window.pageXOffset
      );
      // console.log(top);
      if (top > 900 * this.num2) {
        this.jiazai();
      }
     },
     jiazai() {
      this.num2 += 1;
      this.num1 += 10;
      this.getShops();
    },


  },
  components: {
    paixu,
    choose,
    part
  }
};
</script>
<style scoped>
#wrap {
  width: 100vw;
  height: 100vh;
}

.top {
  width: 100%;
  height: 0.5rem;
  background-color: rgb(49, 143, 231);
  position: fixed;
  left: 0;
  top: 0;
  line-height: 0.5rem;
  font-size: 0.2rem;
  overflow: hidden;
  z-index: 2;
}
.top span img {
  width: 0.3rem;
  height: 0.36rem;
  margin: 0.07rem;
}
.topS1 {
  color: white;
  font-size: 0.2rem;
  font-weight: bold;
  position: absolute;
  left: 40vw;
  top: 0;
  height: 0.5rem;
}
.title {
  width: 100vw;
  height: 0.5rem;
  border-bottom: 1px solid lightgray;
  margin-top: 0.5rem;
  background-color: white;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 2;
}
.tit1 {
  width:33vw;
  height: 0.5rem;
  border-right: 1px solid lightgray;
  /* line-height: 0.5rem; */
  text-align: center;
  float: left;
  background-color: white;
}
.tit2 {
  width:33vw;
  height: 0.5rem;
  border-right: 1px solid lightgray;
  /* line-height: 0.5rem; */
  text-align: center;
  float: left;
  background-color: white;
}
.tit3 {
  width:30vw;
  height: 0.5rem;
  /* line-height: 0.5rem; */
  text-align: center;
  float: left;
  background-color: white;
  z-index: 2;
  /* border: 1px solid rebeccapurple; */
}
.tit1  p {
  font-size: 0.15rem;
  margin-top: 0.2rem;
  margin-left: 8vw;
   position: absolute;
  left: 0rem;
  top: 0;
  float: left;
  color: gray;
}
.tit2  p {
  font-size: 0.15rem;
  margin-top: 0.2rem;
  margin-left: 15vw;
  position: absolute;
  left: 1.1rem;
  top: 0;
  float: left;
  color: gray;
}
.tit3 p {
  font-size: 0.15rem;
  margin-top: 0.2rem;
  margin-left: 10vw;
  float: left;
  position: absolute;
  left: 2.3rem;
  top: 0;
  color: gray;
}
.tit1 img {
  font-size: 0.15rem;
  margin-top: 0.2rem;
  margin-left: 10vw;
  /* float: left; */
  position: absolute;
  left: 0.45rem;
  top: 0rem;
  color: gray;
}
.tit2 img {
  font-size: 0.15rem;
  margin-top: 0.2rem;
  margin-left: 10vw;
  /* float: left; */
  position: absolute;
  left: 1.8rem;
  top: 0rem;
  color: gray;
}
.tit3 img {
  font-size: 0.15rem;
  margin-top: 0.2rem;
  margin-left: 10vw;
  /* float: left; */
  position: absolute;
  left: 2.9rem;
  top: 0rem;
  color: gray;
}
.title img {
  height: 0.3rem;
  margin-top: 0.1rem;
}
.rouV {
  width: 100vw;
  height: 50vw;
  margin-top: 1rem;
  z-index: 2;
  position: fixed;
  top: 0;
  left: 0;
}
.nowshops {
  width: 100%;
  margin-top: 1rem;
  background-color: #fff;
}
.loopline {
  width: 100%;
  height: 0.8rem;
  border-bottom: 1px solid lightgray;
}
.loopline > div {
  float: left;
}
.leftimg {
  width: 18%;
  height: 0.8rem;
  text-align: center;
}
.leftimg img {
  margin-top: 0.1rem;
  height: 0.6rem;
}
.baocen {
  width: 82%;
  height: 0.8rem;
}
.cen-p1 {
  margin-top: 0.1rem;
  height: 0.2rem;
}
.cen-p1 > span {
  display: inline-block;
}
.cen-p1 > span:nth-child(1) {
  font-size: 0.1rem;
  background-color: yellow;
}
.cen-p1 > span:nth-child(2) {
  font-size: 0.15rem;
  font-weight: bold;
}
.bao-rig {
  /* margin-top: 0.05rem; */
  height: 0.2rem;
  float: right;
  font-size: 0.13rem;
  margin-right: 0.05rem;
}
.bao-rig > span {
  display: inline-block;
  padding: 0.01rem;
  border: 1px solid gray;
   font-size: 0.1rem;
   color: #999;

}
.rates {
  float: left;
  width: 28%;
  font-size: 0.1rem;
  /* padding: 0; */
  margin-top: 0.05rem;
}
.cen-p2 {
  width: 100%;
  height: 0.25rem;
}
.cen-p2 span {
  font-size: 0.08rem;
}
.xingxing{
 color: #ff6000;
}
.bao-rig2 {
  padding-top: 0.025rem;
  height: 0.2rem;
  float: right;
  margin-right: 0.05rem;
  font-size: 0.08rem;
}
.bao-rig2 span {
  border: 1px solid rgb(49, 143, 231);
  color: rgb(49, 143, 231);
}
.bao-rig2 span:nth-child(1) {
  color: white;
  background-color: rgb(49, 143, 231);
}
.cen-p3 {
  width: 100%;
  height: 0.15rem;
  font-size: 0.08rem;
}
.rig3 {
  float: right;
  margin-right: 0.05rem;
}
.rig3 span:nth-child(2) {
  color: rgb(49, 143, 231);
}
</style>
