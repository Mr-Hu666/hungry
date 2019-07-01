<template>
    <div id="wrap">
        <div class="top">
      <span>
        <img @click="back()" src="../../../static/imgs/back.png" alt>
      </span>
      <span class="topS1">订单列表</span>
    </div>

<div class="bottomss">
            <div class="home" @click="tohome()">
                <img src="../../../static/imgs/homeF.png" alt="">
                <p>外卖</p>
            </div>
          
            <div class="search" @click="tosearch()">
                 <img src="../../../static/imgs/searchF.png" alt="">
                 <p>搜索</p>
            </div>

           <div class="order">
               <img src="../../../static/imgs/orderT.png" alt="">
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
    name:"order",
    methods: {
        back(){
            this.$router.back();
        },
        tohome(){
          this.$router.push({name:"first"})
        },
        tosearch(){
           this.$router.push({name:"search"})
        },
        tome(){
          this.$router.push({name:"wode"})
        }
    },
}
</script>
<style scoped>
#wrap {
  width: 100vw;
  height: 100vh;
}
.top {
  width: 100%;
  height: 0.5rem;
  background-color: rgb(49, 143, 231);
  position: fixed;
  left: 0;
  top: 0;
  line-height: 0.5rem;
  font-size: 0.2rem;
  overflow: hidden;
}
.top > span > img {
  width: 0.3rem;
  height: 0.36rem;
  margin: 0.07rem;
}
.topS1 {
  color: white;
  font-size: 0.2rem;
  font-weight: bold;
  position: absolute;
  left: 40vw;
  top: 0;
  height: 0.5rem;
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
