<template>
  <div id="wrap">
    <!-- 顶部 -->
    <div class="hand">
      <div class="hand-1">
        <router-link to>
          <span>ele.me</span>
        </router-link>
      </div>
      <div class="hand-2">
        <router-link to="/login">
          <span>登录|注册</span>
        </router-link>
         
      </div>
    </div>
    <div class="two">
      <span class="two-1">当前定位城市:</span>
      <span class="two-2">定位不准时,请在城市列表中选择</span>
    </div>
    <!-- 显示定位的城市 -->
    <div class="three">
      <span class="m">{{tcity.name}}</span>
      <span>
        <!-- <router-link :to="'/change?id='+tcity.id+'&cityName='+tcity.name" >></router-link> -->
         <router-link :to="'/change?id='+tcity.id+'&cityName='+tcity.name">
         <img src="../../../static/imgs/right.png" alt="">
         </router-link>
      </span>
    </div>
    <div class="hotc">
      <p>热门城市</p>
      <ul>
        <li v-for="(v,i) in hotc" :key="i">
          <router-link :to="'/change?city='+v.city">{{v.name}}</router-link>
        </li>
      </ul>
    </div>
    <div class="allcity">
      <ul id="allCities">
        <li :key="key" v-for="(value,key) in groupCities">
          <h3 class="a">
            {{key}}
            <span v-if="key=='A'">(按字母排序)</span>
          </h3>
          <ul id="u">
            <li :key="i" v-for="(v,i) in value" class="b">{{v.name}}</li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "city",
  data() {
    return {
      tcity: "",
      hotc: [],
      groupCities: {},
      id:""
    };
  },
  created() {
    //首先，获取验证码
    this.getTcity();
    this.getHotc();
    this.getAllcity();
  },
  methods: {
    getTcity() {
      const api = "https://elm.cangdu.org/v1/cities?type=guess";
      this.$http({
        url: api,
        method: "get",
        //用于表示用户代理是否应该在跨域请求的情况下从其他域发送Cookies --- 不使用缓存
        withCredentials: true
      }).then(res => {
        // console.log(res.data);
        this.tcity=res.data;
      });
    },
    getHotc() {
      const api = "https://elm.cangdu.org/v1/cities?type=hot";
      this.$http({
        url: api,
        method: "get",
        withCredentials: true
      }).then(res => {
        // console.log(res.data);
        this.hotc = res.data;
        this.id=res.data.id;
        this.$store.commit("getid",this.id);
      });
    },
    getAllcity() {
      const api = "https://elm.cangdu.org/v1/cities?type=group";
      this.$http({
        url: api,
        method: "get"
      }).then(res => {
        // console.log(res);
        var arr = [];
        //先排序,再给数据源赋值
        for (const key in res.data) {
          arr.push(key);
        }
        arr.sort();
        // console.log(arr);
        for (var i = 0; i < arr.length; i++) {
          // this.groupCities[arr[i]] = res.data[arr[i]];
          this.$set(this.groupCities, arr[i], res.data[arr[i]]);
        }
        // this.groupCities = res.data;
        // var arr = [];
      });
    }
  }
};
</script>
<style scoped>
#wrap {
   width:3.75rem;
  height: 100%;
  position: relative;
  overflow: hidden;
}
.hand {
  height: 0.4rem;
  width: 3.75rem;
  background-color: blue;
}
.hand-1 {
  margin-top: 4%;
  float: left;
  margin-left: 2%;
}
.hand-2 {
  margin-top: 4%;
  float: right;
  margin-right: 2%;
}
.hand > span {
  background-color: white;
}
.two {
  height: 0.4rem;
  width: 3.75rem;
  background-color: white;
}
.two-1 {
  font-size: 2%;
  margin-top: 3%;
  float: left;
  margin-left: 2%;
}
.two-2 {
  font-size: 2%;
  margin-top: 3%;
  float: right;
  margin-right: 1%;
}
.three {
  height: 0.4rem;
  width: 3.75rem;
   display: flex;
 justify-content:space-between;
  background-color: white;
    border-top: 1px solid #e4e4e4;  
  border-bottom: 1px solid #e4e4e4;  
}
.m{
  float: left;
  margin-left: 2%;
  color: blue;
  margin-top: 2%;
}
.three img{ 
  font-size: 0.2rem;
  float: right;
  width: 0.2rem;
  margin-top: 0.1rem;
}
.hotc {
  margin-top: 0.15rem;
  border-top: 2px solid #e4e4e4;
  width: 100%;
  background-color: white;
}
.hotc > p {
  padding-left: 2%;
  line-height: 0.3rem;
  height: 0.3rem;
}
.hotc ul {
  width: 100%;
  list-style-type: none;
}
.hotc ul li {
  display: inline-block;
  width: 25%;
  height: 0.5rem;
  box-sizing: border-box;
  border: 1px solid grey;
  line-height: 0.5rem;
  text-align: center;
  color: blue;
}
.allcity {
  margin-top: 0.15rem;
  border-top: 2px solid #e4e4e4;
  width: 100%;
  background-color: white;
}
.allCities {
  top: 0.5rem;
  background-color: #fff;
  width: 3.75rem;
}
.a {
  background-color: ghostwhite;
}
#u {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  text-align: center;
}
.b {
  height: 8%;
  width: 25%;
  border: 1px solid gray;
  box-sizing: border-box;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style> 
