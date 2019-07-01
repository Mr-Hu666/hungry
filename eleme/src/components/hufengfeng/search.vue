<template>
    <div id="wrap">
      <div class="top">
            <span  @click="back()"><img src="../../../static/imgs/back.png" alt=""></span>
              <span class="sousuo">搜索</span>
        </div>
        <div class="box">
            <input class="inp" v-model="inp" type="text" placeholder="请输入商家或美食名称">
            <button @click="findcook()" class="btn">提交</button>
            
        </div>

        <div class="bottomss">
            <div class="home" @click="tohome()">
                <img src="../../../static/imgs/homeT.png" alt="">
                <p>外卖</p>
            </div>
          
            <div class="search" @click="tosearch()">
                 <img src="../../../static/imgs/searchF.png" alt="">
                 <p>搜索</p>
            </div>

           <div class="order" @click="toorder()">
               <img src="../../../static/imgs/orderF.png" alt="">
               <p>订单</p>
           </div>

            <div class="me" @click="tome()">
                <img src="../../../static/imgs/meF.png" alt="">
                <p>我的</p>
            </div>
        </div>

        
    </div>
</template>

<script>
export default {
    name:'search',
    data(){
        return {
           inp:"",
           latitude:"",
           longitude:""
           
        }
    },
    created() {
        console.log(this.$route);
        this.latitude = this.$route.query.latitude;
        this.longitude = this.$route.query.longitude;
    },
    methods: {
          findcook(){
              const api ="https://elm.cangdu.org/v4/restaurants?geohash="+this.$store.state.latitude+","+this.$store.state.longitude+"&keyword="+this.inp;
              this.$http({
                  url:api,
                  method:'',
                   withCredentials:true
              }).then(res=>{
                  console.log(res);
              })
          },
          back(){
              this.$router.back();
          }

    }
}
</script>

<style scoped>
#wrap{
    width: 100%;
    height: 100vh;
}
.top{
    width: 100%;
    height: 0.5rem;
    background-color:rgb(49, 143, 231);
    line-height: 0.5rem;
    font-size: 0.2rem;
    text-align: center;
    color: white;
    text-align: center;
}
.top img{
    float: left;
    margin-top: 0.07rem;
    height: 0.36rem;
    
    
}

.box{
    background-color: #fff;
    margin-top: 0.1rem;
    width: 100%;
    height: 0.7rem;
    border-top: 1px solid lightgray;
     border-bottom: 1px solid lightgray;
}
.inp{
    float: left;
    margin-top: 0.1rem;
    width: 68%;
    height: 0.3rem;
    border:1px solid lightgray;
    font-size: 0.16rem;
    text-indent: 1em;
    margin-left: 2.5%;
}
.btn{
    float: left;
    border: 0;
    margin-top: 0.1rem;
    margin-left: 1%;
    width: 26%;
    height: 0.3rem;
    background-color:rgb(49, 143, 231);
    color: white;
    font-size: 0.16rem;
}

.bottomss{
    width: 100%;
    background-color: #fff;
    height: 0.45rem;
    display: flex;
    border-top: 1px solid lightgray;
    justify-content: space-around;
    position: fixed;
    bottom: 0;
    left: 0;

}
.bottomss div{
   height: 0.45rem;    
   text-align: center;
   font-size: 0.1rem;
   color: black;
}
.bottomss img{
    margin-top: 0.03rem;
    height: 0.25rem;
}
</style>