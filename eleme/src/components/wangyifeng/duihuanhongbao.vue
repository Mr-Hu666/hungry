<template>
  <div id="wrap">
    <div class="top">
      <p @click="back()" class="left">
        <img src="../../../static/imgs/back.png" />
      </p>
      <p class="dh">兑换红包</p>
    </div>
    <div class="center">
      <input class="shuru" @input="bian()" v-model="exchange_code" placeholder="请输入兑换码" type="text" />
      <br />
      <div class="a">
        <input
          class="yzm"
          maxlength="4"
          v-model="codeNumber"
          @input="bian()"
          placeholder="验证码"
          type="text"
        />
        <br />
        <div class="two">
          <img :src="code" class="tp" />
          <span class="ht" @click="getCode()">
            <p>看不清</p>
            <p>换一张</p>
          </span>
        </div>
      </div>
      <div @click="login()" class="duihuan">
        <img v-if="yin" src="../../../static/imgs/duhuan1.png" />
        <img v-else src="../../../static/imgs/duihuan2.png" />
      </div>
    </div>
    <div id="tankuang" v-if="tk">
      <img src="../../../static/imgs/pi.png" />
      <p>无效兑换码</p>
      <p @click="wx()">确认</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "duihuanhongbao",
  data() {
    return {
      yin: true,
      code: "", //存储验证码base64图片
      exchange_code: "",
      codeNumber: "", //存储验证码输入框的值
      tk: false
    };
  },
  created() {
    //首先，获取验证码
    this.getCode();
    this.getname();
  },
  methods: {
    back() {
      this.$router.back();
    },
    wx() {
        this.tk = false;
    },
    getname() {
      this.user_id = this.$store.state.username;
      return;
    },

    getCode() {
      const api = "https://elm.cangdu.org/v1/captchas";
      this.$http({
        url: api,
        method: "post",
        //用于表示用户代理是否应该在跨域请求的情况下从其它域发送cookies --- 不使用缓存数据
        withCredentials: true
      }).then(res => {
        // console.log("验证码数据");
        // console.log(res);
        this.code = res.data.code;
      });
    },
    bian() {
      if (this.exchange_code && this.codeNumber.length == 4) {
        this.yin = false;
      } else {
        this.yin = true;
      }
    },
    login() {
      this.tk=true;
      this.$store.commit("getname", this.exchange_code);
      const api =
        "https://elm.cangdu.org/v1/users/"+this.user_id+"/hongbao/exchange";
      this.$http({
        url: api,
        method: "post",
        withCredentials: true,
        data: {
          exchange_code: this.exchange_code,
          captcha_code: this.codeNumber
        }
      }).then(res => {
        if(res.data.message){
          this.tk=true;
        }else{
          this.tk=false;
        }
      });
    }
  }
};
</script>
<style scoped>
#wrap {
  width: 3.75rem;
  height: 100vh;
  position: relative;
  overflow: hidden;
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
.dh {
  padding-top: 0.2rem;
  margin-left: 1.3rem;
  font-size: 0.2rem;
  color: white;
}
.center {
  width: 3.75rem;
}
.shuru {
  width: 3.4rem;
  height: 0.3rem;
  line-height: 0.3rem;
  margin-top: 0.15rem;
  padding-top: 0.1rem;
  padding-bottom: 0.1rem;
  border-bottom: 1px solid gainsboro;
  margin-left: 0.1rem;
}
.a {
  width: 3.75rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.yzm {
  width: 50%;
  line-height: 0.3rem;
  margin-top: 0.15rem;
  padding-top: 0.1rem;
  padding-bottom: 0.1rem;
  border-bottom: 1px solid gainsboro;
  margin-left: 0.1rem;
}
.two {
  width: 20%;
  top: 1.2rem;
  position: absolute;
  right: 0.1rem;

  height: 0.3rem;
}
.tp {
  top: 0.2rem;
  position: absolute;
  right: 0.85rem;
}
.ht {
  width: 0.5rem;
  margin-left: 2.4rem;
  font-size: 0.15rem;
  background-color: white;
}
.ht p:nth-child(2) {
  color: #3190e8;
}
.duihuan {
  margin-top: 0.2rem;
  margin-left: 0.2rem;
  width: 3.75rem;
  line-height: 0.5rem;
  height: 0.5rem;
}
.duihuan img {
  width: 90%;
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
  margin-left: 1.2rem;
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
