<template>
  <div id="wrap">
    <div class="top">
      <p @click="back()" class="left">
        <img src="../../../static/imgs/back.png">
      </p>
      <p class="zh">账户信息</p>
    </div>
    <div class="center">
      <p class="tx">头像</p>
      <el-upload
        class="avatar-uploader"
        action="https://jsonplaceholder.typicode.com/posts/"
        :show-file-list="false"
        :on-success="handleAvatarSuccess"
        :before-upload="beforeAvatarUpload"
      >
        <img id="img1" :src="imageUrl" class="avatar">
        <i class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>

      <!-- <p class="tu"><img src="../../../static/imgs/tou.jpg"></p> -->
      <p class="right1">
        <img src="../../../static/imgs/right.png">
      </p>
      <router-link to="/xiugaiyonghu">
        <p class="yh">用户名</p>
        <p class="zhanghao">{{this.$store.state.username}}</p>
        <p class="right2">
          <img src="../../../static/imgs/right.png">
        </p>
      </router-link>
      <router-link to="/dizhi">
        <p class="dz">收货地址</p>
        <p class="right3">
          <img src="../../../static/imgs/right.png">
        </p>
      </router-link>
      <p class="bd">账号绑定</p>
      <p class="sj">
        <img src="../../../static/imgs/sj.jpg">
      </p>
      <p class="shou">手机</p>
      <p @click="go()" class="right4">
        <img src="../../../static/imgs/right.png">
      </p>
      <p class="aq">安全设置</p>
      <router-link to="/chong">
        <p class="mima">密码登录</p>
        <p class="xg">修改</p>
        <p class="right5">
          <img src="../../../static/imgs/right.png">
        </p>
      </router-link>
      <button @click="out()" class="tc">退出登陆</button>
    </div>
    <!-- 弹框1 -->
    <div id="tankuang1" v-if="tk1">
      <img src="../../../static/imgs/pi.png" alt>
      <p>请在手机App中设置</p>
      <p @click="qr()">确认</p>
    </div>

    <!-- 弹框2 -->
    <div id="tankuang2" v-if="tk2">
      <img src="../../../static/imgs/pi.png" alt>
      <p>是否退出登录</p>
      <p @click="zd()">再等等</p>
      <p id="tc" @click="tuichu()">退出登录</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "zhanghux",
  data() {
    return {
      tk1: false,
      tk2: false,
      imageUrl: "",
     
    };
  },
  created() {
    this.getImg();
  },
  methods: {
     back() {
        this.$router.back();
      },
    getImg(){
      const api="https://elm.cangdu.org/v1/user/"+this.$store.state.nameId;
        this.$http({
            url:api,
            method:"get",
        }).then(res=>{
            this.imageUrl="https://elm.cangdu.org/img/"+res.data.avatar;
        })
    },
    go() {
      if (this.tk1 == false) {
        this.tk1 = true;
      }
    },
    qr() {
      if (this.tk1 == true) {
        this.tk1 = false;
      }
    },
    out() {
      
      if (this.tk2 == false) {
        this.tk2 = true;
      }
    },
    zd() {
      if (this.tk2 == true) {
        this.tk2 = false;
      }
    },
    tuichu() {
      // this.$store.state.username="";
      this.$store.commit("getname", "");
      this.$router.push({
        name: "wode"
      });
      this.$store.state.where=true;
      this.$store.state.dog = true;
    },
    handleAvatarSuccess(res, file) {
    this.imageUrl = URL.createObjectURL(file.raw);
  },
  beforeAvatarUpload(file) {
    const isJPG = file.type === "image/jpeg";
    const isLt2M = file.size / 1024 / 1024 < 2;

    // if (!isJPG) {
    //   this.$message.error('上传头像图片只能是 JPG 格式!');
    // }
    if (!isLt2M) {
      this.$message.error("上传头像图片大小不能超过 2MB!");
    }
    return isLt2M;
  },
  handleAvatarSuccess(res, file) {
    console.log(file, res);
    //立刻显示
    this.imageUrl = URL.createObjectURL(file.raw);

    var file = file.raw;
    var formdata1 = new FormData(); // 创建form对象
    formdata1.append("file", file, file.name); // 通过append向form对象添加数据,可以通过append继续添加数据
    //或formdata1.append('img',file);
    let config = {
      headers: { "Content-Type": "multipart/form-data" }
    }; //添加请求头
    this.axios
      .post(
        "https://elm.cangdu.org/eus/v1/users/" +
          this.$store.state.nameId +
          "/avatar",
        formdata1,
        config
      )
      .then(response => {
        //这里的/xapi/upimage为接口
        // console.log(response.data);
      });
  }
  },
  
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
#img1{
  width: 0.25rem;
  height: 0.25rem;
  border: 1px solid rebeccapurple;
   margin-left: 3rem;
 position: absolute;
  top: 0.8rem;
  border-radius: 50%;
}
#wrap {
  width: 3.75rem;
  height: 100vh;
  position: relative;
  overflow: hidden;
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
  widows: 0.2rem;
  height: 0.2rem;
}
.zh {
  position: absolute;
  margin-top: 0.15rem;
  text-align: center;
  font-size: 0.2rem;
  margin-left: 1.5rem;
  color: white;
}
.center {
  border-top: 9px solid gainsboro;
  width: 3.75rem;
  /* display: flex; */
  /* justify-content: space-around; */
  background-color: white;
  height: 0.3rem;
}
.tx {
  width: 3.75rem;
  padding-left: 0.1rem;
  padding-top: 0.1rem;
  line-height: 0.5rem;
  border-bottom: 1px solid gray;
}

.right1 {
  float: right;
  position: absolute;
  top: 0.8rem;
  margin-left: 3.52rem;
}
.right1 img {
  margin-top:0rem;
  width: 0.08rem;
 right:0.1rem; 
  
}
.yh {
  position: absolute;
  width: 3.75rem;
  padding-left: 0.1rem;
  top: 1.3rem;
  line-height: 0.3rem;
  border-bottom: 1px solid gray;
}
.zhanghao {
  margin-left: 2.7rem;
  top: 1.3rem;
  height: 0.5rem;
}
.right2 {
  float: right;
  position: absolute;
  top: 1.3rem;
  margin-left: 3.52rem;
}
.right2 img {
  margin-top:0rem;
  width: 0.08rem;
 right:0.1rem; 
}
.dz {
  margin-left: 0.1rem;
  top: 0.1rem;
  height: 0.3rem;
  border-bottom: 1px solid gray;
}
.right3 {
  float: right;
  margin-top: -0.3rem;
  margin-right: 0.1rem;
}
.right3 img {
   margin-top:0rem;
  width: 0.08rem;
 right:0.1rem; 
}
.bd {
  padding-left: 0.1rem;
  top: 0.1rem;
  line-height: 0.3rem;
  background-color: whitesmoke;
}
.sj {
  padding-left: 0.1rem;
  padding-top: 0.1rem;
  border: 1px solid gray;
}
.sj img {
  width: 0.2rem;
  height: 0.2rem;
}
.shou {
  padding-left: 0.4rem;
  margin-top: -0.2rem;
}
.right4 {
  float: right;
  margin-top: -0.2rem;
  padding-right: 0.1rem;
}
.right4 img {
  margin-top:0rem;
  width: 0.08rem;
 right:0.1rem; 
}
.aq {
  padding-left: 0.1rem;
  top: 0.1rem;
  line-height: 0.35rem;
  background-color: whitesmoke;
}
.mima {
  padding-left: 0.1rem;
  top: 0.1rem;
  border: 1px solid gray;
  line-height: 0.4rem;
}
.xg {
  margin-top: -0.25rem;
  margin-bottom: 0.1rem;
  padding-left: 3.1rem;
}
.right5 {
  float: right;
  margin-top: -0.3rem;
  padding-right: 0.1rem;
}
.right5 img {
  margin-top:0rem;
  width: 0.08rem;
 right:0.1rem; 
}
.tc {
  width: 96%;
  font-size: 0.16rem;
  height: 0.4rem;
  margin-left: 0.1rem;
  line-height: 0.4rem;
  margin-top: 0.7rem;
  color: white;
  background-color: red;
}
#tankuang1 {
  position: absolute;
  left: 0.3rem;
  top: 2.1rem;
  width: 3rem;
  height: 1.9rem;
  background-color: white;
  border-radius: 0.03rem;
  animation: 2s bounceIn;
}
#tankuang1 img {
  width: 0.7rem;
  height: 0.7rem;
  margin-left: 1rem;
  margin-top: 0.1rem;
}
#tankuang1 span {
  font-size: 0.17rem;
  color: #333;
  position: absolute;
  left: 0.83rem;
  bottom: 1.25rem;
  font-size: 0.3rem;
}
#tankuang1 p:nth-child(2) {
  font-size: 0.18rem;
  text-align: center;
  margin-top: 0.2rem;
}
#tankuang1 p:nth-child(3) {
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
#tankuang2 {
  position: absolute;
  left: 0.1rem;
  top: 1.4rem;
  width: 3.6rem;
  height: 2.8rem;
  background-color: white;
  border-radius: 0.03rem;
  animation: 2s bounceIn;
}
#tankuang2 img {
  width: 1.05rem;
  height: 0.88rem;
  margin-left: 1.2rem;
  margin-top: 0.3rem;
}
#tankuang2 span {
  font-size: 0.17rem;
  color: #333;
  position: absolute;
  left: 0.83rem;
  bottom: 1.25rem;
  font-size: 0.3rem;
}
#tankuang2 p:nth-child(2) {
  font-size: 0.2rem;
  text-align: center;
}
#tankuang2 p:nth-child(3) {
  width: 0.9rem;
  height: 0.35rem;
  border-radius: 0.05rem;
  bottom: 0.35rem;
  margin-left: 0.8rem;
  background-color: gray;
  position: absolute;
  text-align: center;
  line-height: 0.4rem;
  margin-top: 0.1rem;
  font-weight: 700;
  color: white;
}
#tc {
  width: 0.9rem;
  height: 0.35rem;
  border-radius: 0.05rem;
  bottom: 0.35rem;
  margin-left: 1.9rem;
  background-color: red;
  position: absolute;
  text-align: center;
  line-height: 0.4rem;
  margin-top: 0.1rem;
  font-weight: 700;
  color: white;
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 0.05rem;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 0.2rem;
  color: #8c939d;
  width: 0.2rem;
  height: 0.2rem;
  line-height: 0.2rem;
  text-align: center;
  position: absolute;
  top: 0.8rem;
  margin-left: 2.5rem;
}
.avatar {
  width: 0.2rem;
  height: 0.2rem;
  display: block;
}
</style>
