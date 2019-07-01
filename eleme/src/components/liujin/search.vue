<template>
  <div id="wrap">
    <div class="top">
      <span>
        <img @click="back()" src="../../../static/imgs/back.png" alt>
      </span>
      <span class="sousuo" @click="back()">搜索</span>
    </div>
    <div class="box">
      <input class="inp" v-model="inp" @input="change()" type="text" placeholder="请输入商家或美食名称">
      <img class="quxiao" v-if="show" @click="shift()" src="../../../static/imgs/quxiao.png" alt>
      <button @click="findcook()" class="btn">提交</button>
    </div>
    <div v-if="xian">
      <p class="store">商家</p>
      <div class="storeMessage">
        <li class="storeMessage" v-for="(v,i) in detial" :key="i">
          <img class="storeImg" :src="'https://elm.cangdu.org/img/'+v.image_path" alt width="12%">
          <p class="storeP1">{{v.name}}</p>
          <p class="storeP2">月售{{v.recent_order_num}}单</p>
          <p class="storeP3">{{v.float_minimum_order_amount}}元起送/距离{{v.distance}}</p>
          <hr class="hr">
        </li>
      </div>
    </div>
     <p v-if="show3" class="nohistory">很抱歉，没有搜索结果</p>
    <div v-if="show2">
      <p class="store">搜索历史</p>
      <ul>
        <li class="ulL1" v-for="(v,i) in history" :key="i" @click="lishi(v)">
          <span class="ulS1">{{v}}</span>
          <img @click.stop="clear(i)" class="ulI1" src="../../../static/imgs/quxiao.png" alt>
        </li>
      </ul>
      <p class="clear" v-if="show1" @click="clearall()">清空搜索历史</p>
    </div>

<div class="bottomss">
            <div class="home" @click="tohome()">
                <img src="../../../static/imgs/homeF.png" alt="">
                <p>外卖</p>
            </div>
          
            <div class="search">
                 <img src="../../../static/imgs/searchT.png" alt="">
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
export default {
  name: "search",
  data() {
    return {
      inp: "",
      latitude: "",
      longitude: "",
      detial: [],
      show: false,
      xian: false,
      history: [],
      show1: false,
      id: "",
      show2:true,
      show3:false,
    };
  },
  created() {
    console.log(this.$route);
    // this.change();
    this.latitude = this.$route.query.latitude;
    this.longitude = this.$route.query.longitude;
    this.history = this.$store.state.history;
  },
  methods: {
    findcook() {
        this.xian=true;
        this.show2=false;
      const api =
        "https://elm.cangdu.org/v4/restaurants?geohash="+this.latitude+","+this.longitude+"&keyword=" + this.inp;
      this.$http({
        url: api,
        method: "",
        withCredentials: true
      }).then(res => {
        // console.log(res);
        this.detial = res.data;

        if (this.inp.length == 0) {
        return;
      }
      if (this.$store.state.history.indexOf(this.inp) == -1) {
        this.$store.commit("addA", this.inp);
        this.show1 = true;
      }
      this.show = true;
      if (this.detial.length==0) {
         this.show3=true;
         this.xian=false;
      }else{
          this.xian=true;
          this.show3=false;
          
      }

      });
    },
    change() {
      if (this.inp == "") {
          this.detial="";
        this.show = false;
        this.xian=false;
        this.show2=true;
        this.show3=false; 
        // this.show1=true;    
         }
         else {
        this.show = true;
        // this.xian=true;
        this.show2=true;
        // this.show1=false;
        this.show3=false;
        // this.show1=false;
      }
    },
    shift() {
       this.xian=false;
       this.show2=true;
      this.inp = "";
      this.show = false;
      this.show3=false;
    },
    clear(a) {
      this.history.splice(a, 1);
      if (this.history.length == 0) {
        this.show1 = false;
      }
    },
    clearall() {
      this.history = "";
      this.show1 = false;
    },

    lishi(v) {
      //   this.id=v.id;
      this.inp = v;
      this.findcook(v);
    },
    back(){
        this.$router.back();
    },
    tohome(){
       this.$router.push({name:"first"});
    },
    toorder(){
      this.$router.push({name:"order"});
    },
     tome(){
      this.$router.push({name:"wode"});
    }
  }
};
</script>

<style scoped>
#wrap {
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
}
.top {
  width: 100%;
  height: 0.45rem;
  background-color: #3190e8;
  line-height: 0.5rem;
  font-size: 0.2rem;
  text-align: center;
  color: white;
  text-align: center;
  box-sizing: border-box;
}
.top img {
  float: left;
  margin-top: 0.07rem;
  height: 0.28rem;
}

.box {
  background-color: #fff;
  height: 0.58rem;
}
.inp {
  float: left;
  margin-top: 0.09rem;
  width: 72%;
  height: 0.38rem;
  line-height: 0.38rem;
  border-radius: 0.05rem;
  background-color: #f2f2f2;
  font-size: 0.16rem;
  text-indent: 1em;
  margin-left: 2.5%;
  box-sizing: border-box;
}
.quxiao {
  height: 0.15rem;
  position: absolute;
  right: 1rem;
  top: 0.65rem;
}
.btn {
  float: left;
  border: 0;
  margin-top: 0.1rem;
  margin-left: 1.5%;
  width: 0.8rem;
  height: 0.38rem;
  background-color: #3190e8;
  color: #fff;
  border-radius: 0.02rem;
  font-size: 0.16rem;
}
.store {
  width: 100vw;
  height: 0.5rem;
  font-size: 0.14rem;
  line-height: 0.5rem;
  color: #666;
  padding-left: 0.1rem;
  box-sizing: border-box;
}
.storeMessage {
  height: 0.95rem;
  background-color: #fff;
  /* position: relative; */
}
.storeImg {
    height: 0.6rem;
  margin-left: 0.1rem;
  margin-top: 0.1rem;
}
.storeMessage p {
  font-size: 0.131rem;
}
.storeP1 {
 margin-left: 0.6rem;
 margin-top: -0.55rem;
}
.storeP2 {
 margin-left: 0.6rem;
 margin-top: 0.05rem;
}
.storeP3 {
  margin-left: 0.6rem;
  margin-top: 0.05rem;
}
.hr {
  background-color: lightgray;
  width: 3.1rem;
  margin-left: 0.6rem;
  margin-top: 0.1rem;
}
.nohistory{
    width: 100vw;
    height: 0.5rem;
    line-height: 0.5rem;
    font-size: 0.2rem;
    text-align: center;
    margin-left: 0.1rem;
    color:gray;
    margin-top: 0.1rem;
    box-sizing: border-box;
}
.ulL1 {
  width: 100vw;
  height: 0.4rem;
  line-height: 0.4rem;
  /* border: 1px solid red; */
  background-color: white;
  margin-top: 0.02rem;
}
.ulS1 {
  font-size: 0.15rem;
  padding-left: 0.15rem;
  color: #666;
  box-sizing: border-box;
}
.ulI1 {
  height: 0.15rem;
  float: right;
  margin-right: 0.2rem;
  margin-top: 0.15rem;
  box-sizing: border-box;
}
.clear {
  width: 100vw;
  height: 0.4rem;
  line-height: 0.4rem;
  font-size: 0.15rem;
  background-color: white;
  text-align: center;
  margin-top: 0.03rem;
  color: #3190e8;
  box-sizing: border-box;
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
