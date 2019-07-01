<template>
  <div id="wrap">
    <div class="top">
      <p @click="back()" class="left">
        <img src="../../../static/imgs/back.png" />
      </p>
      <p class="ls">历史红包</p>
    </div>
    <div class="guoqi">
      <ul id="ul1">
        <li v-for="(v,i) in lishi" :key="i">
          <span>
            <p>{{v.amount}}</p>
            <p>{{v.description_map.sum_condition}}</p>
          </span>
          <span>
            <p>{{v.description_map.name}}</p>
            <p>{{v.description_map.validity_periods}}</p>
            <p>{{v.description_map.phone}}</p>
          </span>
          <img src="../../../static/imgs/guoqihongbao.png" />
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "lishihongbao",
  data() {
    return {
     
      lishi: "",
      amount: ""
    };
  },
  created() {
    this.getlishi();
  },
  methods: {
    back() {
      this.$router.back();
    },
    getlishi() {
      const api =
        "https://elm.cangdu.org/promotion/v2/users/1/expired_hongbaos?limit=20&offset=0";
      this.$http({
        url: api,
        method: "get",
        withCredentials: true
      }).then(res => {
        // console.log(res.data);
        this.lishi = res.data;
         
      });
    }
  }
};
</script>
<style scoped>
#ul1 li {
  border: 1px solid rebeccapurple;
  width: 90%;
  margin-left: 5%;
  margin-top: 0.1rem;
  overflow: hidden;
}
#ul1 li span:nth-of-type(1) {
  float: left;
  margin-left: 0.1rem;
  padding-top: 0.2rem;
  color: #999;
}
#ul1 li span:nth-of-type(2) {
  float: left;
  padding-top: 0.1rem;
  color: #999;
}
#ul1 li img {
  float: right;
}

#wrap {
  width: 3.75rem;
  height: 100vh;
  position: relative;
  /* overflow: hidden; */
}
.top {
  width: 3.75rem;
  background-color: #3190e8;
  height: 0.5rem;
}
.left {
  float: left;
  padding-left: 0.1rem;
  margin-top: 0.15rem;
}
.left img {
  width: 0.2rem;
  height: 0.2rem;
}
.ls {
  padding-top: 0.2rem;
  margin-left: 1.3rem;
  font-size: 0.2rem;
  color: white;
}
</style>

