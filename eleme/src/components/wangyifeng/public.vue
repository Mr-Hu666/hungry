<template>
  <div>
    <div id="head">
      <img @click="back()" id="_head" src="../../../static/imgs/back.png" alt>
      <p id="_head_">{{title}}</p>
    </div>
    <li>{{content}}</li>
  </div>
</template>
<script>
export default {
  name: "public",
  data() {
    return {
      msg: "",
      title: "",
      content: ""
    };
  },
  created() {
    this.fuwuzhongxin();
  },
  methods: {
    back() {
      this.$router.back();
    },
    fuwuzhongxin() {
      this.title = this.$route.query.title;
      this.content = this.$route.query.content;
    }
  }
};
</script>
<style scoped>
#head {
  width: 100vw;
  height: 0.45rem;
  background-color: #3190e8;
}
#_head {
  margin-top: 0.1rem;
  width: 0.15rem;
  float: left;
}
#_head_ {
  text-align: center;
  line-height: 0.45rem;
  font-size: 0.2rem;
  font-weight: bold;
  color: white;
}
li {
  font-size: 0.18rem;
  line-height: 0.3rem;
}
</style>
