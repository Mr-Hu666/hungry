<template>
    <div id="wrap">
         <div class="top">
             <router-link to="/login">
<p  class="left"><img src="../../../static/imgs/back.png"></p> </router-link>
        <h2 class="cz">重置密码 </h2>
        </div>
        <div class="center">
        <input class="zh" v-model="username" placeholder="账号" type="text"><br>
        <input class="old" v-model="oldword" placeholder="旧密码" type="text"><br>
         <input class="near" v-model="nearword" placeholder="请输入新密码" type="text"><br>
          <input class="queren" v-model="password" placeholder="请确认新密码" type="text"><br>
<input class="yz" v-model="codeNumber" placeholder="验证码" type="text">
          <img :src="code" class="tp">
          <span class="ht" @click="getCode()">
              <p>看不清</p>
              <p>换一张</p>
          </span>
          
          <button class="xiugai" @click="login()">确认修改</button>
          
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
           oldword:"",
           nearword:"",
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
        
        login(){
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
                console.log("login数据");
                console.log(res);
                if (res.data.message) {
                    alert(res.data.message);//登陆失败
                } else {
                    //登陆成功，跳转到首页,编程式路由跳转，传值query或者params传值
                    this.$router.push({
                        name:"person",
                        query:res.data,
                        params:{pID:res.data.id}
                    })
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
 position: relative;
}
.top{
 width: 3.75rem;
 height: 0.5rem;
 background-color: #3190e8;
}
.left{
    width:0.1rem;
height: 0.1rem;
float: left;
}
.left img{
     width:0.3rem;
    height: 0.3rem;
    padding-top:0.1rem; 
}
.cz{
    margin-left: 1.3rem;
padding-top:0.1rem; 
}
.center{
    width: 3.75rem;
   
}
.zh{
  width:3.75rem;
  padding-top: 0.15rem;
   padding-bottom: 0.15rem;  
   border-bottom:1px solid gainsboro;
  padding-left: 0.1rem;
}
.old{
   width:3.75rem;
    padding-top: 0.15rem;
    padding-bottom: 0.15rem;  
    padding-left: 0.1rem;
    border-bottom:1px solid gainsboro;
}
.near{
   width:3.75rem;
    padding-top: 0.15rem;
    padding-bottom: 0.15rem;  
    padding-left: 0.1rem;
    border-bottom:1px solid gainsboro;
}
.queren{
   width:3.75rem;
    padding-top: 0.15rem;
    padding-bottom: 0.15rem;  
    padding-left: 0.1rem;
    border-bottom:1px solid gainsboro;
}
.yz{
 width:3.75rem;
 line-height: 0.27rem;
 padding-top: 0.15rem;
    padding-bottom: 0.15rem;    
   border-bottom:1px solid gainsboro;
 padding-left: 0.1rem;  
}
.tp{
    top: 2.45rem;
position: absolute;
margin-left:2rem; 
}
.ht{
    width:0.5rem;
      top: 2.4rem;
position: absolute;
 margin-left:3rem;
 font-size: 0.15rem;
 background-color: white; 
}
.ht p:nth-child(1){
    top:2.5rem;
}
.ht p:nth-child(2){
    margin-top:0.1rem;
    color: #3190e8;
}
.xiugai{
    width:3.6rem;
    text-align: center;
    color: white;
    font-size: 0.2rem;
     padding-top: 0.1rem;
   padding-bottom: 0.1rem;  
     margin-left: 0.1rem; 
     margin-top: 0.2rem;
    background-color: green;
    padding-top: 0.1rem;
}


</style>
