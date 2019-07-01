<template>
  <div id="wrap">
    <div class="top">
     
       <div class="fangda" @click="sousuo()">
          <img class="lulu" src="../../../static/imgs/find.png" />
      </div>
     <span class="dizhi">{{detail}}</span>
     <!-- <span class="dizhi">{{this.$store.state.depo}}</span> -->
      <div class="dengli">
       <span @click="login()" v-if="this.$store.state.where">登录/注册</span>
        <img @click="first()" v-else class="toutou" src="../../../static/imgs/meF.png" alt />
      
      </div>
    </div>
    <div class="rotation">
      <swiper v-if="resdata.length>0" :options="swiperOption" ref="mySwiper" class="allswiper">
        <!-- slides -->
        <swiper-slide class="swip">
          <div class="lunbo" v-for="(v,i) in resdata" :key="i">
            <router-link :to="'/sweet?id='+v.title+'&latitude='+$store.state.latitude+'&longitude='+$store.state.longitude">
            <img :src="'https://fuss10.elemecdn.com/'+v.image_url" alt />
            <p>{{v.title}}</p>
            </router-link>
          </div>
        </swiper-slide>
        <swiper-slide class="swip">
          <div class="lunbo" v-for="(v,i) in resdata2" :key="i">
             <router-link :to="'/sweet?id='+v.title+'&latitude='+$store.state.latitude+'&longitude='+$store.state.longitude">
            <img :src="'https://fuss10.elemecdn.com/'+v.image_url" alt />
            <p>{{v.title}}</p>
            </router-link>
          </div>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>

    <div class="nearshops">
      <div class="nearh">
        <img src="../../../static/imgs/homeT.png" alt />
        <p>附近商家</p>
      </div>
      <div class="nowshops">
        <div v-for="(v,i) in xinxi" :key="i" class="loopline" @click="nexts(v.id)">
          <div class="leftimg">
            <img :src="'https://elm.cangdu.org/img/'+v.image_path" />
          </div>
          <div class="baocen">
            <div class="cen-p1">
              <span>品牌</span>
              <span>{{v.name}}</span>
              <div class="bao-rig">
                <span v-if="v.supports[0]" v-text="v.supports[0].icon_name"></span>
                <span v-if="v.supports[1]" v-text="v.supports[1].icon_name"></span>
                <span v-if="v.supports[2]" v-text="v.supports[2].icon_name"></span>
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
              <van-rate v-model="v.rating" readonly class="rates" size="0.15rem" />
              <span>月售{{v.recent_order_num}}单</span>
              <div class="bao-rig2" v-if="v.delivery_mode">
                <span v-if="v.delivery_mode.text">{{v.delivery_mode.text}}</span>
                <span>{{v.supports[1].name}}</span>
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

 <div class="bottomss">
            <div class="home">
                <img src="../../../static/imgs/homeT.png" alt="">
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

            <div class="me" @click="tome()">
                <img src="../../../static/imgs/meF.png" alt="">
                <p>我的</p>
            </div>
        </div>



  </div>
</template>

<script>
// import { Loading } from "element-ui";
// var loadline;
// var count = 0;
// import { mapState } from "vuex";
export default {
  name: "first",
  data() {
    return {
      num1: 10,
      num2: 0, 
      seen: true,
      detail: "",
      position: "",
      xinxi: [],
      resdata: [],
      resdata2: [],
      swiperOption: {
        initialSlide: 0,
        //        navigation: {
        //   nextEl: '.swiper-button-next',
        //   prevEl: '.swiper-button-prev',
        // },
        loop: true,
        pagination: {
          el: ".swiper-pagination"
        }
      }
    };
  },
  created() {
    var _this = this;
    // setTimeout(function(){
    //  console.log(_this.latitude);
    // console.log(_this.longitude);
    //  console.log(_this.$store.getters.getL);
    _this.getImgs();
    _this.getPosition();
    _this.getShops();
    // },100)
    // loadline = Loading.service({
    //   fullscreen: true,
    //   text: "拼命加载中",
    //   background: "gray"
    // });
  },
  //挂在完成后触发 调用滚动方法
  mounted() {
    //可以在这里面直接进行滚动条的获取
    window.addEventListener("scroll", this.handleScroll, true);
  },

  methods: {
    // fenlei(){
    //   this.$router.push({name:"sweet"});
    // },
    tome(){
      this.$router.push({name:"wode"});
    },
    getImgs() {
      const api = "https://elm.cangdu.org/v2/index_entry";
      this.$http({
        url: api,
        method: "get",
        withCredentials: true
      }).then(res => {
        // console.log(res.data);
        //  this.resdata=res.data;
        for (var i = 0; i < res.data.length / 2; i++) {
          this.resdata.push(res.data[i]);
        }
        // console.log(this.resdata);
        for (var j = res.data.length / 2; j < res.data.length; j++) {
          this.resdata2.push(res.data[j]);
        }
        // count++;
        // if (count == 3) {
        //   count = 0;
        //   loadline.close();
        // }
      });
    },
    getPosition() {
      const api =
        "https://elm.cangdu.org/v2/pois/" +
        this.$store.state.latitude +
        "," +
       this.$store.state.longitude;
      this.$http({
        url: api,
        method: "get",
        withCredentials: true
      }).then(res => {
        console.log(api);
        //  console.log("apissss");
        console.log(res.data);
        this.detail = res.data.name;
        // count++;
        // if (count == 3) {
        //   count = 0;
        //   loadline.close();
        // }
      });
    },
    getShops() {
      // console.log( this.$store.state.latitude);
      const api =
        "https://elm.cangdu.org/shopping/restaurants?latitude=" +
        this.$store.state.latitude +
        "&longitude=" +
       this.$store.state.longitude+"&limit="+this.num1;
      this.$http({
        url: api,
        method: "get",
        withCredentials: true
      }).then(res => {
        // console.log("datas");
         console.log(api);
        console.log(res.data);
        // console.log(res.data.order_by);
        this.xinxi = res.data;
        // count++;
        // if (count == 3) {
        //   count = 0;
        //   loadline.close();
        // }
      });
    },
    nexts(vid) {
      this.$router.push({
        name: "stores"
        // params:{sid:vid},
      });
      this.$store.commit("getshopID", vid);
    },
    login(){
        this.$router.push({
        name: "login"
      });
    },
    first(){
       this.$store.state.onetwo = false;
        this.$router.push({
        name: "wode"
      });
    },
    tosearch(){
      this.$router.push({
        name: "search"
      });
    },
    toorder(){
      this.$router.push({
        name: "order"
      });
    },
    sousuo(){
      this.$router.push({
        name: "search"
      });
    },
     handleScroll() {
      // 方法一
      var top = Math.floor(
        document.body.scrollTop ||
          document.documentElement.scrollTop ||
          window.pageXOffset
      );
      // console.log(top);
      if (top > 260 + 900 * this.num2) {
        this.jiazai();
      }
     },
     jiazai() {
      this.num2 += 1;
      this.num1 += 10;
      this.getShops();
    },

     


    
  }
};
</script>

<style scoped>
#wrap {
  width: 100%;
  height: 100vh;
  position: relative;
}
.top {
  width: 100%;
  height: 0.5rem;
  background-color: rgb(49, 143, 231);
  line-height: 0.5rem;
  font-size: 0.15rem;
  text-align: center;
  color: white;
  overflow: hidden;
}
.fangda{
  width: 16%;
  float: left;
  text-align: center;
  
}
.dengli {
  width: 20%;
  font-size: 0.15rem;
  float: right;
   text-align: center;
  /* margin-right: 0.08rem; */
}
.toutou{
   height: 0.28rem;
   margin-top: 0.1rem;
   float: right;
}
.lulu {
  margin-top: 0.1rem;
   height: 0.28rem;
  /* margin-left: 0.1rem; */
  /* float: left; */
}
.dizhi{
  width: 64%;
  float: left;
  height: 0.5rem;
   overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.rotation {
  width: 100%;
  height: 1.6rem;
  background-color: #fff;
  /* border: 1px solid red;
    box-sizing: border-box; */
}
.allswiper {
  width: 3.75rem;
  height: 1.6rem;
  position: relative;
  text-align: center;
}
.lunbo {
  float: left;
  width: 25%;
  height: 0.7rem;
  /* border: 1px solid red;
    box-sizing: border-box; */
}
.lunbo img {
  width: 50%;
}
.lunbo p {
  text-align: center;
  font-size: 0.12rem;
  color: black;
}
.swiper-pagination {
  position: absolute;
  bottom: 0.04rem;
  left: 0;
  /* border:1px solid red; */
  /* box-sizing: border-box; */
}

.nearshops {
  width: 3.75rem;
  margin-top: 0.1rem;
  background-color: #fff;
}
.nearh {
  width: 3.75rem;
  font-size: 0.15rem;
  height: 0.4rem;
  line-height: 0.4rem;
  overflow: hidden;
  border-bottom:1px solid lightgray;
}
.nearh img {
  float: left;
  width: 8%;
}
.nearh span {
  border: 1px solid red;
  box-sizing: border-box;
  display: inline-block;
  height: 0.4rem;
  line-height: 0.4rem;
}
.nowshops {
  width: 100%;
}
.loopline {
  width: 100%;
  height: 0.9rem;
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
  font-size: 0.13rem;
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
  margin-right: 0.05rem;
  font-size: 0.13rem;
}
.bao-rig > span {
  display: inline-block;
  border: 1px solid gray;
}
.rates {
  float: left;
  width: 35%;
  font-size: 0.1rem;
  margin-top: 0.05rem;
  /* padding: 0; */
  /* margin: 0; */
}
.cen-p2 {
  width: 100%;
  height: 0.25rem;
}
.cen-p2 span {
  font-size: 0.08rem;
}
.bao-rig2 {
  margin-right: 0.05rem;
  padding-top: 0.025rem;
  height: 0.2rem;
  float: right;
  font-size: 0.08rem;
}
.bao-rig2 span {
  border: 1px solid rgb(49, 143, 231);
  color: rgb(49, 143, 231);
}
.bao-rig2 span:nth-child(1) {
  color: white;
  font-size: 0.1rem;
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
  /* border:1px solid red;
  box-sizing: border-box; */
}
.rig3 span:nth-child(2) {
  color: rgb(49, 143, 231);
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
