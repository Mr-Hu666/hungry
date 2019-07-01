<template>
    <div id="wrap">
        <div class="top">
             <p @click="back()" class="left"><img src="../../../static/imgs/back.png"></p> 
             <p class="xg">修改用户名</p>
        </div>
        <input v-model="inpvalue" class="input" type="text" placeholder="输入用户名 ">
        <p class="tj">用户名只能修改一次(5-24字符之间)</p>
        <button @click="sendming(inpvalue)" class="qr">确认修改</button>
    </div>
</template>
<script>
export default {
    name:"xiugaiyonghu",
    data() {
       
        return {
             inpvalue:"",
           
        }
    },
    methods: {
        back(){
                  this.$router.back( ); 
            },
            sendming(b){
                this.$store.commit("getname",b);
                this.$router.push({
                    name:"wode"
                })
            }
    },
}
</script>
<style scoped>
#wrap{
    width:3.75rem;
    position: relative;
    overflow: hidden;
}
.top{
    width:3.75rem;
   background-color:  #3190e8;
    height: 0.5rem; 
}
.left{
float: left;
padding-left:0.1rem;
margin-top: 0.15rem;
}
.left img{
    width:0.2rem;
    height:0.2rem;
}
.xg{
   padding-top:0.2rem;
    margin-left: 1.3rem; 
    font-size: 0.2rem;
    color: white;
}
.input{
    width:3.6rem;
    margin-top: 0.1rem;
line-height: 0.4rem;
font-size: 0.15rem;
margin-left: 0.1rem;
}
.tj{
    margin-left: 0.1rem;
    margin-top: 0.1rem;
    font-size: 0.1rem;
}
.qr{
   width:3.55rem;
   font-size: 0.16rem;
 height: 0.4rem;
margin-left:0.1rem;
margin-right:0.1rem; 
  line-height: 0.4rem;
  margin-top:0.2rem;
  color: white;
  background-color: #3190e8;
}
</style>
