<template>
    <div id="wrap">
        <div class="top">
          <span @click="back()"><img src="../../../static/imgs/back.png" alt=""></span>
          <span>重置密码</span>
      </div>
      <div class="msg">
          <input v-model="username" type="text" placeholder="账号">
          <input v-model="oldpw" type="text" placeholder="旧密码">
          <input v-model="newpw" type="text" placeholder="请输入新密码">
          <input v-model="surepw" type="text" placeholder="请确认密码">
          <input v-model="codenumber" type="text" placeholder="验证码">
           <img class="checkcode" :src="code&&code" alt="">
        <div @click="getCode()" class="change">
            <p>看不清</p>
            <p>换一张</p>
        </div>
          </div>
          <button @click="resetpw()" class="sure">确认修改</button>
    </div>
</template>

<script>
export default {
    name:"resetw",
    data(){
        return {
            username:"",
            oldpw:"",
            newpw:"",
            surepw:"",
            codenumber:"",
            code:""
        }
    },
    created() {
        this.getCode();
    },
    methods: {
        back(){
            this.$router.back();
        },
        resetpw(){
            const api = "https://elm.cangdu.org/v2/changepassword";
            this.$http({
               url:api,
               method:'post',
                withCredentials:true,
                 data:{
                     username:this.username,
                     oldpassWord:this.oldpw,
                     newpassword:this.newpw,
                     confirmpassword:this.surepw,
                     captcha_code:this.codenumber
                 } 
            }).then(res=>{
                console.log(res.data);
                if (res.data.message) {
                    alert(res.data.message);//登陆失败
                } else {
                    //登陆成功，跳转到首页,编程式路由跳转，传值query或者params传值
                    this.$router.push({
                        name:"/first",
                        query:res.data,
                        params:{pID:res.data.id}
                    })
                }
            })
        },
          getCode(){
             const api = "https://elm.cangdu.org/v1/captchas";
            this.$http({
                url:api,
                method:'post',
                //用于表示用户代理是否应该在跨域请求的情况下从其他域发送Cookies --- 不使用缓存
                withCredentials:true
            }).then(res=>{
                console.log(res);
                this.code=res.data.code
            })
        }
    },
}
</script>

<style scoped>
#wrap{
    width:100%;
    height: 100vh;
}
.top{
    width: 100%;
    height: 0.5rem;
    background-color:rgb(49, 143, 231);
    line-height: 0.5rem;
    text-align: center;
    font-size: 0.2rem;
    color: white;
}
.top img{
    margin-top: 0.07rem;
    height: 0.36rem;
}
.top span:nth-child(1){
    float: left;
}
.msg{
    width: 100%;
    position: relative;
}
.msg input{
    width: 100%;
    height: 0.5rem;
    border-bottom: 1px solid lightgray;
    font-size: 0.16rem;
    text-indent: 1em;
}

.checkcode{
    position: absolute;
    bottom: 0.1rem;
    right:20%;
}
.change{
    width: 15%;
    height: 0.4rem;
position: absolute;
bottom: 0.05rem;
right: 2%;
}


.sure{
    margin-top: 3%;
    width: 94%;
    height: 0.5rem;
    border: 0;
    border-radius: 4px;
    margin-left: 3%;
    background-color:rgb(75,217,99);
    font-size: 0.18rem;
    color: white;
}
</style>
