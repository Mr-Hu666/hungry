<template>
  <div id="wrap">
    <div class="top">
      <p @click="back()" class="left">
        <img src="../../../static/imgs/back.png">
      </p>
      <p class="xd">新增地址</p>
    </div>
    <div class="center">
      <input v-model="zh"  type="text" class="namess" placeholder="请填写你的姓名 ">
      <router-link to="/sousuodz">
        <input v-model="xq" class="zhuzi" type="text" placeholder="小区/写字楼/学校等 ">
      </router-link>
      <input v-model="jd" class="dizi" type="text" placeholder="请填写详细送餐地址 ">
      <input v-model="lx" class="phone" type="text" placeholder="请填写能够联系到您的手机号码">
      <input v-model="xt" class="tel" type="text" placeholder="备用联系电话(选填) ">
    </div>
    <button @click="getData()" class="xin">新增地址</button>
    <!-- 弹窗 -->
    <div id="tankuang" v-if="tk">
      <img src="../../../static/imgs/pi.png" alt>
      <p>地址信息错误</p>
      <p @click="qr()">确认</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "xinzeng",
  data() {
    return {
      zh: "",
      xq: "",
      jd: "",
      lx: "",
      xt: "",
      tk: false
    
    };
  },
  created() {
    this.xq = this.$store.state.addressName;
  },
  methods: {
     back() {
        this.$router.back();
      },
    xz() {
      if (this.tk == false) {
        this.tk = true;
      }
    },
    qr() {
      if (this.tk == true) {
        this.tk = false;
      }
    },
    getData(){
        const api="https://elm.cangdu.org/v1/users/"+this.$store.state.nameId+"/addresses";
        this.$http({
            url:api,
            method:"post",
            data:{
                address:this.zh,
                address_detail:this.xq,
                geohash:this.$store.state.geohash,
                name:this.jd,
                phone:this.lx,
                tag :"nihao",
                sex:1,
                phone_bk :this.xt,
                tag_type:2
            }
        }).then(res=>{
            console.log(res);
        })
    }
  }
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
#wrap {
  width: 3.75rem;
  height: 100vh;
  position: relative;
  overflow: hidden;
}
.top {
  width: 3.75rem;
  background-color: #3190e8;

  line-height: 0.4rem;
}
.left {
  float: left;
  padding-left: 0.1rem;
  margin-top: 0.1rem;
}
.left img {
  width: 0.3rem;
  height: 0.3rem;
}
.xd {
  margin-left: 1.5rem;
  padding-top: 0.1rem;
  color: white;
  font-size: 0.2rem;
}
.center {
  width: 3.75rem;
  border-top: 8px solid whitesmoke;
  border-bottom: 8px solid white;
  line-height: 0.3rem;
  background-color: white;
}
.namess{
  width: 3.4rem;
  margin-left: 0.15rem;
  margin-top: 0.1rem;
  height: 0.3rem;
  line-height: 0.3rem;
  border-radius: 0.05rem;
  /* color: #f2f2f2; */
  border: 1px solid gainsboro;
  background-color: whitesmoke;
}
.zhuzi {
  width: 3.4rem;
  margin-left: 0.15rem;
  margin-top: 0.1rem;
  height: 0.3rem;
  line-height: 0.2rem;
  border-radius: 0.05rem;
  border: 1px solid gainsboro;
  background-color: whitesmoke;
}
.dizi {
  width: 3.4rem;
  margin-left: 0.15rem;
  margin-top: 0.1rem;
  height: 0.3rem;
  line-height: 0.2rem;
  border-radius: 0.05rem;
  border: 1px solid gainsboro;
  background-color: whitesmoke;
}
.phone {
  width: 3.4rem;
  margin-left: 0.15rem;
  margin-top: 0.1rem;
  height: 0.3rem;
  border-radius: 0.05rem;
  border: 1px solid gainsboro;
  background-color: whitesmoke;
}
.tel {
  width: 3.4rem;
  margin-left: 0.15rem;
  margin-top: 0.1rem;
  height: 0.3rem;
  border-radius: 0.05rem;
  border: 1px solid gainsboro;
  background-color: whitesmoke;
}
.xin {
  width: 3.4rem;
  margin-left: 0.15rem;
  margin-top: 0.1rem;
  height: 0.3rem;
  line-height: 0.3rem;
  background-color: #4cd964;
  text-align: center;
}
#tankuang {
  position: absolute;
  left: 0.3rem;
  top: 1.5rem;
  width: 3rem;
  height: 1.9rem;
  background-color: white;
  border-radius: 0.03rem;
  animation: 2s bounceIn;
}
#tankuang img {
  width: 0.7rem;
  height: 0.7rem;
  margin-left: 1rem;
  margin-top: 0.1rem;
}
#tankuang span {
  font-size: 0.17rem;
  color: #333;
  position: absolute;
  left: 0.83rem;
  bottom: 1.25rem;
  font-size: 0.3rem;
}
#tankuang p:nth-child(2) {
  font-size: 0.18rem;
  text-align: center;
  margin-top: 0.2rem;
}
#tankuang p:nth-child(3) {
  width: 2.95rem;
  height: 0.4rem;
  background-color: #4cd964;
  position: absolute;
  bottom: 0;
  text-align: center;
  line-height: 0.4rem;
  margin-top: 0.1rem;
  font-weight: 700;
  color: white;
}
</style>
