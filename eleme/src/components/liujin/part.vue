<template>
    <div id="wrap" v-if="show">
        <div class="li1">
        <li @click="add(v,i)" :class="{active:i==isactive}" :key="i" v-for="(v,i) in names">
             <div class="div1"><img :src="'https://fuss10.elemecdn.com/'+v.image_url+'.png'" alt="">
             <img :src="'https://fuss10.elemecdn.com/'+v.image_url+'.jpeg'"
              alt=""> 
              <span>{{v.name}}</span>
              <span class="div1S">{{v.count}}</span>
              </div>
              
              <img class="divI" src="../../../static/imgs/right.png" alt="">
        </li>
        </div>
       <div class="li2" >
           <ul class="div2">
              <li @click="change()"  :key="i" v-for="(ve,i) in datas">
          {{ve}}
               </li>
           </ul>
           <ul class="div3">
<li class="div3" :key="'a'+key" v-for="(value,key) in count">{{value}}</li>
           </ul>
           
       </div>
        
    </div>
</template>
<script>
export default {
    name:"part",
    data() {
        return {
            names:"",
            datas:[],
            id:"",
            count:[],
            isactive:'',
            show:true
        }
    },
    created() {
        this.geteat();
    },
    methods:{
        geteat(){
        const api="https://elm.cangdu.org/shopping/v2/restaurant/category";
        this.$http({
       url:api,
       method:"get",
        }).then(res=>{
       console.log(res)
       this.names=res.data;
        })
        },
        add(v,i2){
        //  alert(v.id)
         this.id=v.id;
         var ad =[];
         var count=[];
         if(this.id==v.id){             
           for(var i=0;i<v.sub_categories.length;i++){
          ad.push(v.sub_categories[i].name)
          count.push(v.sub_categories[i].count)
           }
            // console.log(ad);
            // console.log(count);
            this.datas=ad;
            this.count=count;
            this.datas.shift();
            this.count.shift();
             
         }
        this.isactive=i2;
        },
        change(){
         this.show=false;
         this.$store.state.color1="";
                  this.$store.state.show1=!this.$store.state.show1;
                  this.$store.state.xian1=false;
        }
    },
}
</script>
<style scoped>
 #wrap{
     width: 100vw;
     height: 50vh;
     position: absolute;
     left: 0;
     top: 0.5rem;
 }
 .li1{
     width: 50vw; 
     height: 4.5rem;
     /* border: 1px solid red; */
     float: left;
     background-color: gray;
     overflow: hidden;
 }
 .active{
     background-color: white;
     /* border:1px solid red; */
     z-index: 3;
 }
 .div1{
     height: 0.5rem;
     line-height: 0.5rem;
     /* text-align: center; */
    margin-left: 0.1rem;
    /* float: left; */
 }
 .divI{
     height: 0.15rem;
     float: right;
     margin-left: 45vw;
     margin-top: -0.25rem;
     color: lightgray;
 }
 .div1 img{
     height: 0.2rem;
     float: left;
     margin-top: 0.15rem;
     /* margin-right: 0.1rem; */
 }
 .div1>span:nth-child(1){
     font-size: 0.15rem;
     color: gray;
      float: left;
   color: lightgray;
 }
 .div1S {
     width:12vw;
     height: 0.15rem;
      line-height: 0.15rem;
     text-align: center;
     float: right;
     margin-right: 5vw;
     border-radius: 30%;
     background-color: gray;
     color: white;
     margin-top: 0.2rem;
 }
.li2{
    width: 50vw;
     float: left;
     height: 4.5rem;
     /* border: 1px solid red; */
     overflow-y: scroll;
      /* margin-right: -15px; */
     background-color: white;
}
.li2::-webkit-scrollbar {
    display: none;
}
.div2{
     width: 30vw;
     height: 0.5rem;
     line-height: 0.5rem;
     /* text-align: center;  */
     margin-left: 5vw;
    color: gray;
    float: left; 
}
.div3{
     width: 9vw;
     height: 0.5rem;
     line-height: 0.5rem;
     text-align: center; 
    color: gray;
    float: right; 
    margin-right: 4vw;
}
</style>
