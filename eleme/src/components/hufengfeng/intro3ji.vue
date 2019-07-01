<template>
    <div id="wrap">
        <div class="top">
            <span @click="back()"><img src="../../../static/imgs/back.png" alt=""></span>
             <span>{{msg.name}}</span>
        </div>
        <div class="mid-img">
              <img :src="msg.image_path" alt="">   
        </div>
        <div class="botcon">
            <p>{{msg.description}}</p>
            <p>{{msg.name}}</p>
            <p class="score">
                <span>评分</span>
                <el-rate
                v-model="msg.rating"
                disabled
                :show-score="seen"
                text-color="#ff9900"
                class="rates"
              ></el-rate>
             
                </p>
            <p class="monthp">
                <span>月售 {{msg.month_sales}}单</span>
                <span  v-if="msg.specfoods[0]">售价 ￥{{msg.specfoods[0].price}} 起</span>
                </p>
            <p class="haop">
                <span>评论数 {{msg.rating_count}}</span>
                <span>好评率 {{msg.satisfy_rate}}%</span>
                </p>
        </div>
         <div class="boto">
      <div class="gou00">
        <p>{{(this.$store.state.totalprice).toFixed(2)}}</p>
        <p>配送费￥5</p>
      </div>
      <div class="haicha">
        <p class="classp1" v-if="this.$store.state.totalprice<20">还差￥{{$store.state.haimo}}起送</p>
        <p class="classp2" v-if="this.$store.state.totalprice>=20">请结算</p>
      </div>
     <img src="../../../static/imgs/gouwuche.png" v-if="this.$store.state.totalprice<20" class="goshop">
      <img src="../../../static/imgs/gouwuche.png" v-else class="goshopblue">
      <div class="countnum" v-if="numb">{{numb}}</div>
    </div>
 
    </div>
</template>

<script>
export default {
    name:"intro3ji",
    data(){
        return{
            msg:{},
            seen:true,
            numb:"",
            shopdata:""
        }
    },
    created() {
        console.log(this.$route.query);
        this.msg=this.$route.query.vi;
        this.numb=this.$route.query.ci;
        this.shopdata=this.$route.query.gi;
    },
    methods: {
        back(){
            this.$router.push({
                name:"stores"
            });
        }
    },
}
</script>

<style scoped>
#wrap{
    width: 100%;
    height: 100vh;
}
.top{
    width: 100%;
    height: 0.5rem;
    background-color:rgb(49, 143, 231);
    line-height: 0.5rem;
    font-size: 0.18rem;
    text-align: center;
    color: white;
}
.top img{
    float: left;
    margin-top: 0.07rem;
    height: 0.36rem;   
}
.mid-img{
    width: 100%;
}
.mid-img img{
    width: 100%;
    height: 3rem;
}
.botcon{
    margin-left: 2%;
    width: 98%;
    font-size: 0.18rem;
}
.botcon>p:nth-child(1){
margin-top: 0.1rem;
color: gray;
margin-bottom: 0.05rem;
}
.botcon>p:nth-child(2){
margin-top: 0.1rem;
font-weight: bold;
margin-bottom: 0.1rem;
}
.score{
    overflow: hidden;
    margin-bottom: 0.08rem;
}
.score span{
    float: left;
}
.rates{
    float: left;
}
.monthp{
    font-size: 0.16rem;
    width: 100%;
    margin-bottom: 0.08rem;
}
.monthp span:nth-child(2){
    margin-left: 0.1rem;
color: orangered;
}
.haop{
    font-size: 0.16rem;
}
.haop span:nth-child(1){
    margin-right: 0.1rem;
}
.boto {
  width: 100%;
  height: 0.45rem;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: rgb(66, 65, 70);
}
.goshop {
  width: 10%;
  background-color: rgb(66, 65, 70);
  border-radius: 50%;
  border: 0.05rem solid gray;
  padding: 0.05rem;
  position: absolute;
  top: -0.15rem;
  left: 0.1rem;
}
.goshopblue {
  width: 10%;
  background-color: rgb(49, 143, 231);
  border-radius: 50%;
  border: 0.05rem solid gray;
  padding: 0.05rem;
  position: absolute;
  top: -0.15rem;
  left: 0.1rem;
}
.boto > div {
  float: left;
}
.gou00 {
  width: 70%;
}
.gou00 > p {
  margin-left: 30%;
  color: white;
}
.gou00 > p:nth-child(1) {
  margin-top: 0.03rem;
  font-size: 0.2rem;
}
.gou00 > p:nth-child(2) {
  font-size: 0.12rem;
}
.haicha {
  width: 30%;
  height: 0.45rem;
  background-color: rgb(80, 81, 83);
  /* background-color: #fff; */
  /* background-color: red; */
  font-size: 0.16rem;
  color: white;
  line-height: 0.45rem;
  text-align: center;
}
.countnum {
  width: 0.25rem;
  height: 0.25rem;
  /* padding: 0.03rem; */
  position: absolute;
  line-height: 0.25rem;
  text-align: center;
  top: -0.2rem;
  left: 0.5rem;
  font-size: 0.2rem;
  background-color: red;
  border-radius: 50%;
}
.classp1{
background-color: rgb(80, 81, 83);
}
.classp2{
  background-color: rgb(75,218,100);
}



</style>
