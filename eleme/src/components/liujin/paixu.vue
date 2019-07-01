<template>
  <div id="wrap">
     <ul id="ul4">
     <li >
         <img class="img4" src="../../../static/imgs/paixu.png" alt="">
         <span @click="reduce(4)">智能排序</span>  
         <!-- <img src="../../../../static/img/duihao.png" alt=""> -->
     </li>
     <li>
         <img src="../../../static/imgs/juli.png" alt="">
         <span @click="reduce(5)">距离最近</span> 
     </li>
     <li >
         <img class="img4" src="../../../static/imgs/re.png" alt="" >
         <span @click="reduce(6)">销量最高</span>  
     </li>
     <li >
         <img src="../../../static/imgs/jiage.png" alt="">
         <span @click="reduce(1)">起送价最低</span>  
     </li>
     <li >
         <img class="img4" src="../../../static/imgs/zhong.png" alt="">
         <span @click="reduce(2)">配送速度最快</span>  
     </li>
     <li>
         <img class="img4" src="../../../static/imgs/xing1.png" alt="">
         <span @click="reduce(3)">评分最高</span>  
     </li>
 </ul>
  </div>
</template>
<script>
export default {
  name: "paixu",
  data() {
    return {
        datas:[],
      latitude: "",
      longitude: "",
      show:true,
    };
  },
  created() {
    // console.log("paixu");
    // console.log(this.$route);
    this.latitude = this.$route.query.latitude;
    this.longitude = this.$route.query.longitude;
    this.getDatile();
    // console.log(this.longitude);
  },
  methods: {
    getDatile() {
      const api =
        "https://elm.cangdu.org/shopping/restaurants?latitude=" +
        this.latitude +
        "&longitude=" +
        this.longitude +
        "&order_by=" +
        this.$store.state.paixu;
      this.$http({
        url: api,
        mothod: "get",
        withCredentials: true
      }).then(res => {
        // console.log("paixu");
        // console.log(this.latitude);
        // console.log(this.longitude);
        // console.log(this.$store.state.paixu);
      });
    },
    //选择排序方式
    reduce(a) {
      this.$emit("ee", "cc123456");
    //   console.log(1234567890);
      this.$store.commit("reduceN", a);
    }
  }
};
</script>
<style scoped>
#ul4{
   margin-top: 0.5rem;
   background-color: #fff;
}
#ul4>li{
   /* height: 0.2rem; */
   padding: 0 0 0.1rem 0.1rem;
   line-height: 0.4rem;
}
#ul4>li img{
    width: 0.2rem;
}
#ul4>li>span{
    width: 3.4rem;
    /* border: 1px solid red; */
    display: inline-block;
    border-bottom: 0.01rem solid gray;
}
#ul4>li:nth-child(6)>span{
     border-bottom: none;
}
.img4{
width: 0.15rem;
}
</style>
