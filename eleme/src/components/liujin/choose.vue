<template>
    <div id="wrap" v-if="show7">
        <p class="p1">配送方式</p>
        <p @click="change()" class="p2"><img v-if="this.$store.state.look0" src="../../../static/imgs/fengniao.png" alt="">
        <img v-else src="../../../static/imgs/duihao.png" alt="">
        <span :v-model="color">蜂鸟专送</span>
        </p>
        <p class="p3">商家属性 (可以多选)</p>
        <div class="div1">
            <p @click="change1()" class="divP1">
                <img v-if="this.$store.state.look1" src="../../../static/imgs/pin.png" alt="">
                <img v-else=""  src="../../../static/imgs/duihao.png" alt="">
                <span>品牌商家</span>
            </p>
            <p @click="change2()" class="divP2">
                <img v-if="this.$store.state.look2"  src="../../../static/imgs/bao.png" alt="">
                <img v-else   src="../../../static/imgs/duihao.png" alt="">
                <span>外卖保</span>
            </p>
            <p @click="change3()" class="divP3">
                <img v-if="this.$store.state.look3"  src="../../../static/imgs/zhun1.png" alt="">
                <img v-else   src="../../../static/imgs/duihao.png" alt="">
                <span>准时达</span>
            </p>
            <p @click="change4()" class="divP4">
                <img v-if="this.$store.state.look4" src="../../../static/imgs/xin.png" alt="">
                <img v-else  src="../../../static/imgs/duihao.png" alt="">
                <span>新店</span>
            </p>
            <p @click="change5()" class="divP5">
                <img v-if="this.$store.state.look5"  src="../../../static/imgs/fu.png" alt="">
                <img v-else  src="../../../static/imgs/duihao.png" alt="">
                <span>在线支付</span>
            </p>
            <p @click="change6()" class="divP6">
                <img v-if="this.$store.state.look6" src="../../../static/imgs/piao.png" alt="">
                <img v-else src="../../../static/imgs/duihao.png" alt="">
                <span>开发票</span>
            </p>
        </div>
         <button @click="add()" class="btn1">清空</button>
         <button :v-model="this.$store.state.num" @click="reduce()" class="btn2">确定<span v-if="this.$store.state.num">({{this.$store.state.num}})</span></button>
    </div>
</template>
<script>
export default {
    name:"choose",
    data() {
        return {
            show7:true,
            color:'blue',
            color1:"",
        }
    },
    methods: {
        change(){
         this.$store.state.look0=!this.$store.state.look0;
          if (this.$store.state.look0==false) {
              this.$store.state.num++;
              this.color=this.color;
          }else{
              this.$store.state.num--;
              this.color="";
          }
        },
        change1(){
          this.$store.state.look1=!this.$store.state.look1;
          if (this.$store.state.look1==false) {
              this.$store.state.num++;
          }else{
              this.$store.state.num--;
          }
        },
         change2(){
          this.$store.state.look2=!this.$store.state.look2;
           if (this.$store.state.look2==false) {
              this.$store.state.num++;
          }else{
              this.$store.state.num--;
          }
        },
         change3(){
          this.$store.state.look3=!this.$store.state.look3;
           if (this.$store.state.look3==false) {
              this.$store.state.num++;
          }else{
              this.$store.state.num--;
          }
        },
         change4(){
          this.$store.state.look4=!this.$store.state.look4;
           if (this.$store.state.look4==false) {
              this.$store.state.num++;
          }else{
              this.$store.state.num--;
          }
        },
         change5(){
          this.$store.state.look5=!this.$store.state.look5;
           if (this.$store.state.look5==false) {
              this.$store.state.num++;
          }else{
              this.$store.state.num--;
          }
        },
         change6(){
          this.$store.state.look6=!this.$store.state.look6;
           if (this.$store.state.look6==false) {
              this.$store.state.num++;
          }else{
              this.$store.state.num--;
          }
        },
        add(){
            this.$store.state.num=0;
            this.$store.state.look0=true;
             this.$store.state.look1=true;
              this.$store.state.look2=true;
               this.$store.state.look3=true;
                this.$store.state.look4=true;
                 this.$store.state.look5=true;
                  this.$store.state.look6=true;
                  this.$store.state.look7=false;
                  this.$store.state.color3="";
                  this.$store.state.show3=!this.$store.state.show3;
                  this.$store.state.xian3=false;
        },
        reduce(){
      this.show7=false;
       this.$store.state.color3="";
                  this.$store.state.show3=!this.$store.state.show3;
                  this.$store.state.xian3=false;
        }
    },
}
</script>
<style scoped>
#wrap{
    width: 100vw;
    height: 90vw;
    background-color: white;
    position: absolute;
    left: 0;
    top: 0.5rem;
}
.p1{
    font-size: 0.15rem;
    margin-left: 0.1rem;
    margin-top: 0.1rem;
    color: gray;
    padding-top: 0.15rem;
}
.p2{
   width: 100vw;
   height: 0.5rem;
   line-height: 0.5rem;
   /* position: absolute;
   left: 0.1rem;
   top: 0.35rem; */
}
.p2 img{
    height: 0.25rem;
    margin-left: 0.2rem;
    position:absolute;
    left: 0.1rem;
    top: 0.5rem;
}
.p2>span{
    height: 0.5rem;
    line-height: 0.5rem;
    text-align: center;
    font-size: 0.15rem;
    color: gray;
    position: absolute;
    left: 0.5rem;
    top: 0.4rem;
}
.p3{
    font-size: 0.15rem;
    margin-top: 0.2rem;
    color: gray;
    position: absolute;
    left: 0.1rem;
    top: 0.9rem;
    margin-left: 0.1rem;
}
 .div1{
     width: 100vw;
    margin-top: 0.4rem;
}
.div1 p{
     width: 33vw;
     float: left;
}
.divP1>img{
    height: 0.25rem;
    position: absolute;
    left: 0.2rem;
    top: 1.6rem;
}
.divP1>span{
    font-size: 0.15rem;
    position: absolute;
    left: 0.5rem;
    top: 1.6rem;
    color: gray;
}
.divP2>img{
    height: 0.25rem;
    position: absolute;
    left: 1.4rem;
    top: 1.6rem;
}
.divP2>span{
    font-size: 0.15rem;
    position: absolute;
    left: 1.7rem;
    top: 1.6rem;
    color: gray;
}
.divP3>img{
    height: 0.25rem;
    position: absolute;
    left: 2.4rem;
    top: 1.6rem;
}
.divP3>span{
    font-size: 0.15rem;
    position: absolute;
    left: 2.7rem;
    top: 1.6rem;
    color: gray;
}
.divP4>img{
    height: 0.25rem;
    position: absolute;
    left: 0.2rem;
    top: 2.1rem;
}
.divP4>span{
    font-size: 0.15rem;
    position: absolute;
    left: 0.5rem;
    top: 2.1rem;
    color: gray;
}
.divP5>img{
    height: 0.25rem;
    position: absolute;
    left: 1.4rem;
    top: 2.1rem;
}
.divP5>span{
    font-size: 0.15rem;
    position: absolute;
    left: 1.7rem;
    top: 2.1rem;
    color: gray;
}
.divP6>img{
    height: 0.25rem;
    position: absolute;
    left: 2.4rem;
    top: 2.1rem;
}
.divP6>span{
    font-size: 0.2rem;
    position: absolute;
    left: 2.7rem;
    top: 2.1rem;
    color: gray;
}
.btn1{
    width: 45vw;
    height: 0.5rem;
    line-height: 0.5rem;
    text-align: center;
    font-size: 0.2rem;
    background-color: white;
    position: absolute;
    left: 0.1rem;
    top: 2.4rem;
}
.btn2{
    width: 45vw;
    height: 0.5rem;
    line-height: 0.5rem;
    text-align: center;
    font-size: 0.2rem;
    background-color:rgb(75, 217,99);
   position: absolute;
   right:0.1rem;
   top: 2.4rem;
}
</style>
