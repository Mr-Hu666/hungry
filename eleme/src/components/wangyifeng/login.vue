<template>
    <div id="wrap">
         <div class="top">
             <router-link to="/wode">
<p  class="left"><img src="../../../static/imgs/back.png"></p> </router-link>
        <span class="dl">密码登陆 </span>
        </div>
        <div class="center">
        <input class="zh" v-model="username" placeholder="账号" type="text"><br>
         <input class="mi" v-model="password" placeholder="密码" type="text"><br>
         <input class="yz" v-model="codeNumber" placeholder="验证码" type="text">
          <img :src="code" class="tp">
          <button class="ht" @click="getCode()">换一张</button>
         <p class="z1">温馨提示:未注册过的账号，登录时将自动注册</p>
          <p class="z2">注册过的用户可凭账号密码登录</p>
       <button class="log" @click="loginqq()">登录</button>
          <router-link class="two" to="/chong" >重置密码?</router-link>
          </div>
    </div>
</template>
<script>
export default {
    name:"login",
    data(){
        return {
            code:"",//存储验证码base64图片
            username:"",
            password:"",
            codeNumber:""//存储验证码输入框的值
        }
    },
    created() {
        //首先，获取验证码
         this.getCode();
    },
    methods: {
        getCode(){

          const api = "https://elm.cangdu.org/v1/captchas";
          this.$http({
                url:api,
                method:"post",
                //用于表示用户代理是否应该在跨域请求的情况下从其它域发送cookies --- 不使用缓存数据
                withCredentials:true
          }).then(res=>{
            // console.log("验证码数据");
            // console.log(res);
            this.code = res.data.code;
            
          })
        },
        
        loginqq(){
            //https://elm.cangdu.org/v2/login
            const api = "https://elm.cangdu.org/v2/login";
            this.$http({
                url:api,
                method:"post",
                withCredentials:true,
                data:{
                 username:this.username,
                 password:this.password,
                 captcha_code:this.codeNumber
                }
            }).then(res=>{
                this.$store.commit("getname",this.username)
                this.$store.commit("getNameId",res.data.user_id);
                // console.log("login数据");
                // console.log(res);
                if (res.data.message) {
                    alert(res.data.message);//登陆失败
                } else {
                    //登陆成功，跳转到首页,编程式路由跳转，传值query或者params传值
                    // if(this.$store.state.onetwo==true){
                        this.$store.state.dog=false;
                        this.$router.back();
                    // this.$router.push({
                    //     name:"first",
                    //     query:res.data,
                    //     params:{pID:res.data.id}
                    // });
                    this.$store.state.where = false;

                    // }else{
                    //     this.$store.state.where = false;
                    //      this.$router.push({
                    //     name:"first",
                    //     query:res.data,
                    //     params:{pID:res.data.id}
                    // })
                    // }
                }
            })
        }
    }
}
</script>
<style scoped>
#wrap{
    width: 3.75rem;
     height: 100vh;
     overflow: hidden;
 position: relative;
}
.top{
 width: 3.75rem;
 height: 0.5rem;
 background-color: rgb(49, 143, 231);
 text-align: center;
}
.left{
    width:0.1rem;
height: 0.1rem;
float: left;
}
.left img{
     width:0.4rem;
    height: 0.3rem;
    padding-top:0.1rem; 
}
.dl{
 line-height: 0.5rem;   
font-size: 0.18rem;
color: white;
}
.center{
    widows: 3.75rem;
   
}
.zh{
  width:3.75rem;
  padding-top: 0.15rem;
   padding-bottom: 0.15rem;  
   border-bottom:1px solid gainsboro;
  padding-left: 0.1rem;
}
.mi{
   width:3.75rem;
    padding-top: 0.15rem;
    padding-bottom: 0.15rem;  
    padding-left: 0.1rem;
    border-bottom:1px solid gainsboro;
}
.yz{
  width:3.75rem;
  padding-top: 0.15rem;
   padding-bottom: 0.15rem;  
   border-bottom:1px solid gainsboro;
  padding-left: 0.1rem;  
}
.tp{
    top: 1.65rem;
position: absolute;
 left:2rem; 
}
.ht{
      top: 1.65rem;
position: absolute;
 left:2.9rem; 
}
.z1{
    color: red;
    font-size: 0.1rem;
    padding-top:0.1rem;
     padding-left: 0.1rem; 
}
.z2{
   color: red;
    font-size: 0.1rem;
    padding-top:0.2rem;
     padding-left: 0.1rem; 
}
.log{
    border:0;
    margin-top: 0.15rem;
    width:3.55rem;
    height: 0.4rem;
    margin-left: 0.1rem;
  text-align: center;
    color: white;
    font-size: 0.18rem; 
    text-align: center;
    background-color: rgb(75,217,99);
}
.two{
    margin-top: 0.3rem;
float: right;
 margin-right: 0.2rem;
}
</style>
