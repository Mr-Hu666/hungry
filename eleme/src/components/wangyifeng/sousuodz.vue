<template>
  <div id="wrap">
    <div class="top">
      <p @click="back()" class="left">
        <img src="../../../static/imgs/back.png">
      </p>
      <p class="sou">搜索地址</p>
    </div>
    <div class="center">
      <input v-model="keyword" class="tel" type="text" placeholder="请填写小区/写字楼/学校等 ">
      <button class="queren" @click="getadd()">确认</button>
    </div>
    <div class="butt">
      <p class="m1">为了满足商家的送餐要求,建议您从列表中选择地址</p>
    </div>
    <div>
        <ul>
            <li v-for="(v,i) in add" :key="i" @click="change(i)">{{v.name}}<p>{{v.address}}</p></li>
        </ul>
    </div>
    <div class="dibu">
      <p class="m2">找不到地址？</p>
      <p class="m3">请尝试输入小区、写字楼或学校名</p>
      <p class="m4">详细地址（如门牌号）可稍后输入哦。</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "sousuodz",
  data() {
    return {
      keyword: "",
      add: [],
     
    };
  },
  created() {
    // this.getadd();
  },
  methods: {
     back() {
        this.$router.go(-1);
      },
      change(i){
          this.$store.commit("getAddress",this.add[i].name);
          this.$router.push({
              name:"xinzeng"
          })
      },
    getadd() {
      // const api ="https://elm.cangdu.org/v1/pois?city_id="+this.$store.state.cityid+"&keyword="+this.keyword+"&type=search";
      const api =
        "https://elm.cangdu.org/v1/pois?city_id=" +
        this.$store.state.cityID +
        "&keyword=" +
        this.keyword;
      this.$http({
        url: api,
        method: "get",
        withCredentials: true
      }).then(res => {
        // console.log(res.data);
        this.add = res.data;
        // this.id = res.data.id;
      });
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
  height: 0.35rem;
}
.left {
  float: left;
  padding-left: 0.1rem;
  margin-top: 0.1rem;
}
.left img {
  width: 0.2rem;
  height: 0.2rem;
}
.sou {
  margin-left: 1.8rem;
  padding-top: 0.1rem;
}
.center {
  width: 3.75rem;
  line-height: 0.3rem;
  border-top: 8px solid whitesmoke;
  border-bottom: 8px solid white;
  background-color: white;
}
.tel {
  width: 2.4rem;
  margin-left: 0.1rem;
  margin-top: 0.1rem;
  height: 0.3rem;
  line-height: 0.3rem;
  border-radius: 0.05rem;
  border: 1px solid gainsboro;
  background-color: whitesmoke;
}
.queren {
  background-color: #3190e8;
  width: 0.5rem;
  height: 0.3rem;
  border-radius: 0.05rem;
}
.butt {
  width: 3.75rem;
  background-color: orange;
}
.m1 {
  width: 3.75rem;
  margin-top: 0.1rem;
  margin-left: 0.1rem;
  color: orangered;
}
.dibu {
  margin-top: 1.6rem;
  align-items: center;
}
.m2 {
  margin-left: 1rem;
  font-size: 0.2rem;
  color: grey;
}
.m3 {
  margin-top: 0.1rem;
  margin-left: 0.5rem;
  font-size: 0.2rem;
  color: grey;
}
.m4 {
  margin-top: 0.1rem;
  margin-left: 0.3rem;
  font-size: 0.2rem;
  color: grey;
}
</style>
