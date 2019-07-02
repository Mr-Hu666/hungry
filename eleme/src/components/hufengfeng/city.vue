<template>
  <div id="wrap">
    <div class="top">
      <div class="top-l">
        <router-link to>
          <span>ele.me</span>
        </router-link>
      </div>
      <div class="top-r">
          <span @click="login()" v-if="this.$store.state.dog">登录 | 注册</span>
         <span v-else><img @click="first()" class="toutou" src="../../../static/imgs/meF.png" alt /></span>
        
      </div>
    </div>
    <div class="nowcity">
      <p>
        <span>当前定位城市：</span>
        <span>定位不准时，请在城市列表中选择</span>
      </p>
    </div>
    <div class="more">
      <router-link :to="'/checkadress?city='+nowcity+'&id='+ids" tag="p">
        <span>{{nowcity}}</span>
        <span>></span>
      </router-link>
    </div>
    <div class="hotcity">
      <p>热门城市</p>
      <ul>
        <li v-for="(v,i) in hotcity" :key="i">
          <router-link :to="'/checkadress?id='+v.id+'&city='+v.name" id="hotli">{{v.name}}</router-link>
        </li>
      </ul>
    </div>

    <div class="allcity">
      <ul id="allCities">
        <li :key="key" v-for="(value,key) in allcity" class="alls">
          <h3 class="abc">
            {{key}}
            <span v-if="key=='A'">(按字母排序)</span>
          </h3>
          <ul class="u-cities">
            <li :key="i" v-for="(v,i) in value" class="cities">
              <router-link :to="'/checkadress?id='+v.id+'&city='+v.name" id="blackcity">{{v.name}}</router-link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// import { Loading } from "element-ui";
// var loadline;
// var count = 0;
export default {
  name: "city",
  data() {
    return {
      nowcity: "",
      dog:true,
      ids: "",
      hotcity: [],
      allcity: {}
    };
  },
  created() {
    // loadline = Loading.service({
    //   fullscreen: true,
    //   text: "拼命加载中",
    //   background: "gray"
    // });
    //首先，获取验证码
    this.getPosition();
    this.getHotcity();
    this.getAllcity();
  },
  methods: {
    login(){
      this.$router.push({name:"login"});
    },
    first(){
      this.$router.push({name:"wode"});
    },
    getPosition() {
      const api = "https://elm.cangdu.org/v1/cities?type=guess";
      this.$http({
        url: api,
        method: "get",
        //用于表示用户代理是否应该在跨域请求的情况下从其他域发送Cookies --- 不使用缓存
        withCredentials: true
      }).then(res => {
        // count++;
        // if (count == 3) {
        //   count = 0;
        //   loadline.close();
        // }
        this.nowcity = res.data.name;
        this.ids = res.data.id;
      });
    },
    getHotcity() {
      const api = "https://elm.cangdu.org/v1/cities?type=hot";
      this.$http({
        url: api,
        method: "get",
        withCredentials: true
      }).then(res => {
        // console.log(res.data);
        // count++;
        // if (count == 3) {
        //   count = 0;
        //   loadline.close();
        // }
        this.hotcity = res.data;
      });
    },
    getAllcity() {
      const api = "https://elm.cangdu.org/v1/cities?type=group";
      this.$http({
        url: api,
        method: "get",
        withCredentials: true
      }).then(res => {
        // console.log(res.data);
        // count++;
        // if (count == 3) {
        //   count = 0;
        //   loadline.close();
        // }
        var arr = [];
        //先排序,再给数据源赋值
        for (const key in res.data) {
          arr.push(key);
        }
        arr.sort();
        // console.log(arr);
        for (var i = 0; i < arr.length; i++) {
          // this.groupCities[arr[i]] = res.data[arr[i]];
          this.$set(this.allcity, arr[i], res.data[arr[i]]);
        }
        // console.log(this.allcity)
      });
    }
  }
};
</script>

<style scoped>
#wrap {
  width: 100%;
  height: 100%;
  position: relative;
  /* overflow: hidden; */
}
.top {
  width: 100%;
  height: 0.5rem;
  background-color: rgb(49, 143, 231);
  position: fixed;
  top: 0;
  left: 0;
  line-height: 0.5rem;
  /* font-size: 0.2rem; */
  overflow: hidden;
}
.top-l {
  float: left;
  margin-left: 2%;
}
.top-r {
  float: right;
  margin-right: 2%;
}
.top span {
  color: white;
  font-size: 0.16rem;
}
.nowcity {
  margin-top: 0.5rem;
  width: 100%;
  height: 0.5rem;
  background-color: white;
  font-size: 0.15rem;
  line-height: 0.5rem;
  border-bottom: 1px solid lightgray;
}
.nowcity > p {
  width: 100%;
  overflow: hidden;
  color: gray;
}
.toutou{
  margin-top: 0.1rem;
  width: 0.3rem;
}
.nowcity span:nth-child(1) {
  float: left;
  margin-left: 2%;
}
.nowcity span:nth-child(2) {
  float: right;
  margin-right: 2%;
}
.more {
  width: 100%;
  height: 0.5rem;
  background-color: white;
  line-height: 0.5rem;
  border-bottom: 2px solid lightgray;
}
.more > p {
  width: 100%;
  overflow: hidden;
  color: gray;
}
.more span:nth-child(1) {
  color: rgb(49, 143, 231);
  float: left;
  margin-left: 2%;
  font-size: 0.16rem;
}
.more span:nth-child(2) {
  float: right;
  margin-right: 2%;
  color: lightgray;
  font-size: 0.26rem;
}
.hotcity {
  margin-top: 0.1rem;
  border-top: 2px solid lightgray;
  width: 100%;
  background-color: white;
}
.hotcity > p {
  padding-left: 2%;
  line-height: 0.3rem;
  height: 0.3rem;
  border-bottom: 0.005rem solid #e4e4e4;
}
.hotcity ul {
  width: 100%;
  list-style-type: none;
}
.hotcity > ul li {
  display: inline-block;
  width: 25%;
  height: 0.4rem;
  box-sizing: border-box;
 border-bottom: 0.005rem solid #e4e4e4;
  border-right: 0.005rem solid #e4e4e4;
  line-height: 0.4rem;
  text-align: center;
}
#hotli {
  color: rgb(49, 143, 231);
}
.allcity {
  margin-top: 0.1rem;
  border-top: 2px solid lightgray;
  width: 100%;
}
.allCities {
  width: 100%;
  /* border: 2px solid red;
    box-sizing: border-box; */
  list-style-type: none;
}
.alls {
  margin-bottom: 0.1rem;
  width: 100%;
  box-sizing: border-box;
  border-bottom: 0.005rem solid #e4e4e4;
  line-height: 0.4rem;
  color: black;
  background-color: white;
}
.allcity > span {
  font-size: 0.1rem;
}
.u-cities {
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  border-bottom: 0.005rem solid #e4e4e4;
}
.cities {
  width: 25%;
  height: 0.4rem;
  box-sizing: border-box;
  border-bottom: 0.005rem solid #e4e4e4;
  border-right: 0.005rem solid #e4e4e4;
  /* border: 1px solid grey; */
  line-height: 0.4rem;
  text-align: center;
  color: black;
  font-size: 0.14rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.abc {
  /* background-color:green; */
  padding-left: 3%;
  height: 0.4rem;
  line-height: 0.4rem;
  font-size: 0.16rem;
  border-bottom: 0.005rem solid #e4e4e4;
}
#blackcity {
  color: black;
}
</style>
