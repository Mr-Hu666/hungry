<template>
  <div id="wrap">
    <div id="top" @click="back()">
      <img src="../../../static/imgs/back.png">
      <p>在线支付</p>
    </div>
    <!-- 支付倒计时 -->
    <div id="pay">
      <p>支付剩余时间</p>
      <!-- 倒计时 -->
      <p>00:{{minute}}:{{second}}</p>
    </div>
    <div id="tex1">选择支付方式</div>
    <div class="icon">
      <img src="../../../static/imgs/zhifubao.png" alt>
      <span>支付宝</span>
<img  v-if="yin" src="../../../static/imgs/ludui.png" alt>
<img @click="yc1()" v-if="!yin" src="../../../static/imgs/baidui.png" alt>
    </div>
    <div class="icon">
      <img src="../../../static/imgs/weixin.png" alt>
      <span>微信</span>
      <img @click="yc()" v-if="yin" src="../../../static/imgs/baidui.png" alt>
      <img v-if="!yin" src="../../../static/imgs/ludui.png" alt>
    </div>
    <div @click="queren()" id="confirm">确认支付</div>
    <!-- 弹框 -->
    <div id="tankuang" v-if="tk">
      <img src="../../../static/imgs/pi.png" alt>
      <p>暂不支持支付</p>
      <p @click="qr()">确认</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "zaxian",
  data() {
    return {
      minutes: 15,
      seconds: 0,
      tk:false,
      show: true,
      yin:true,

    };
  },
  mounted() {
    this.add();
    
  },
  methods: {
    yc(){
      if(this.yin==true){
        this.yin=false;
      } 
    },
    yc1(){
       if(this.yin==false){
        this.yin=true;
      } 
    },
    queren(){
      if(this.tk == false){
        this.tk=true;
      }
    },
    qr(){
      if(this.tk==true){
        this.tk=false;
      }
    },
    // 倒计时
    num: function(n) {
      return n < 10 ? "0" + n : "" + n;
    },
    add: function() {
      var _this = this;
      var time = window.setInterval(function() {
        if (_this.seconds === 0 && _this.minutes !== 0) {
          _this.seconds = 59;
          _this.minutes -= 1;
        } else if (_this.minutes === 0 && _this.seconds === 0) {
          _this.seconds = 0;
          window.clearInterval(time);
        } else {
          _this.seconds -= 1;
        }
      }, 1000);
    },
    back() {
      this.$router.back();
    }
  },
  watch: {
    second: {
      handler(newVal) {
        this.num(newVal);
      }
    },
    minute: {
      handler(newVal) {
        this.num(newVal);
      }
    }
  },
  computed: {
    second: function() {
      return this.num(this.seconds);
    },
    minute: function() {
      return this.num(this.minutes);
    }
  }
};
</script>
<style scoped>
#wrap {
  width: 3.75rem;
  position: relative;
}
#tankuang {
  position: absolute;
  left: 0.4rem;
  top: 1.85rem;
  width: 2.95rem;
  height: 1.9rem;
  background-color: white;
  border-radius: 0.03rem;
  animation: 2s bounceIn;
}
#tankuang img {
  width: 1.05rem;
  height: 0.88rem;
  margin-left: 0.95rem;
}
#tankuang span {
  font-size: 0.17rem;
  color: #333;
  position: absolute;
  left: 0.73rem;
  bottom: 0.6rem;
}
#tankuang p:nth-child(2){
  font-size: 0.2rem;
  text-align: center;
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

#top {
  width: 100%;
  height: 0.55rem;
  background-color: #3190e8;
  position: fixed;
  z-index: 2;
  left: 0;
  top: 0;
}
#top img {
  height: 0.25rem;
  position: absolute;
  left: 5%;
  top: 50%;
  transform: translate(-50%, -50%);
}
#top p {
  font-size: 0.2rem;
  color: white;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
#pay {
  height: 1.35rem;
  background-color: white;
  margin-top: 0.58rem;
  font-size: 0.25rem;
  position: relative;
}
#pay p:nth-child(1) {
  font-size: 0.18rem;
  position: absolute;
  left: 50%;
  top: 25%;
  transform: translate(-50%, -50%);
}
#pay p:nth-child(2) {
  font-size: 0.38rem;
  position: absolute;
  left: 50%;
  top: 55%;
  transform: translate(-50%, -50%);
}
#tex1 {
  height: 0.45rem;
  font-size: 0.18rem;
  padding-left: 0.2rem;
  padding-top: 0.18rem;
}
.icon {
  height: 0.85rem;
  background-color: white;
  position: relative;
  border: 0.5px solid gainsboro;
}
.icon img:nth-child(1) {
  width: 0.5rem;
  position: absolute;
  left: 0.15rem;
  top: 0.2rem;
}
.icon span:nth-child(2) {
  font-size: 0.2rem;
  position: absolute;
  left: 0.7rem;
  top: 0.28rem;
}
.icon img:nth-child(3) {
  width: 0.35rem;
  position: absolute;
  right: 0.2rem;
  top: 0.28rem;
}
#confirm {
  margin-top: 0.15rem;
  width: 3.75rem;
  line-height: 0.6rem;
  height: 0.6rem;
  background-color: green;
  color: white;
  font-size: 0.2rem;
  text-align: center;
}
</style>
