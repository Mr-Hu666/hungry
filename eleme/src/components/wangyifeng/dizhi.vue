<template>
  <div id="wrap">
    <div class="top">
      <p @click="back()" class="left">
        <img src="../../../static/imgs/back.png">
      </p>
      <p class="bd">编辑地址</p>
      <p class="bj" @click="shanchu()" v-if="looks">编辑</p>
      <p class="bj" @click="sure()" v-else>确认</p>
    </div>
    <div>
        <ul>
            <li class="liss" v-for="(v,i) in dataArr" :key="i">
                <div class="naph">
                    <p>{{v.name}}</p>
                    <p>{{v.phone}}</p>
                    
            </div>
            <div class="xsp">
                <span class="xxx" v-if="saw" @click="dele(i)">X</span>
            </div>
            </li>
        </ul>
    </div>
    <p id="hr"></p>
    <router-link to="/xinzeng">
      <div class="xz">
        <span class="til">新增地址</span>
        <p class="j">
          <img src="../../../static/imgs/right.png">
        </p>
      </div>
    </router-link>
  </div>
</template>
<script>
export default {
  name: "dizhi",
  data() {
    return {
       looks:true,
        dataArr:[],
        saw:false,
     
    };
  },
  created() {
      this.getAddress();
  },
  methods: {
     back() {
        this.$router.back();
      },
      getAddress(){
          const api="https://elm.cangdu.org/v1/users/"+this.$store.state.nameId+"/addresses";
        this.$http({
            url:api,
            method:"get",
        }).then(res=>{
            // console.log(res.data);
            this.dataArr=res.data;
        })
      },
      dele(i){
          const api="https://elm.cangdu.org/v1/users/"+this.$store.state.nameId+"/addresses/"+this.dataArr[i].id;
        this.$http({
            url:api,
            method:"DELETE",
        }).then(res=>{
            // console.log(res.data);
            this.dataArr.splice(i,1);
        })
      },
      shanchu(){
          this.looks=false;
          this.saw = true;
      },
      sure(){
          this.looks=true;
          this.saw = false;
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
  position: relative;
  background-color: white;
}
.top {
  width: 3.75rem;
  background-color: #3190e8;
  height: 0.5rem;
}
.left {
  float: left;
  margin-top: 0.15rem;
  margin-left: 0.1rem;
}
.left img {
  width: 0.2rem;
  height: 0.2rem;
}
.bd {
  position: absolute;
  margin-top: 0.15rem;
  text-align: center;
  font-size: 0.2rem;
  margin-left: 1.5rem;
  color: white;
}
.bj {
  float: right;
  margin-top: 0.15rem;
  margin-right: 0.1rem;
  color: white;
}
#hr {
  margin: 0.1rem 0;
  border: 1px solid gainsboro;
}
.xz {
  width: 3.75rem;
  height: 0.4rem;
  border-top: 1px solid gainsboro;
  background-color: #fff;
  /* display: flex; 
    justify-content: space-between;  */
}
.til {
  float: left;
  margin-top: 0.1rem;
  margin-left: 0.1rem;
  align-items: center;
}
.j {
  margin-top: 0.1rem;
  margin-left: 3rem;
}
.j img {
  width: 0.2rem;
  height: 0.2rem;
}
.xxx{
    /* float: right; */
    margin-left: 0.1rem;
}
.liss{
    width: 3.75rem;
    height: 0.5rem;
   background-color: #fff8c3;
    box-sizing: border-box;
}
.liss>div{
    float: left;
    height: 0.5rem;
}
.naph{
    width: 90%;
}
.naph p:nth-child(1){
    margin-top: 0.1rem;
}
.xsp{
    width: 10%;
    line-height: 0.5rem;
}
</style>
