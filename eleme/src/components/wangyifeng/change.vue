<template>
    <div id="wrap">
      <div class="top">
            <span @click="back()"><img src="../../../static/imgs/back.png" alt=""></span>
             <span>{{cities}}</span>
              <span class="ch" @click="back()">切换城市</span>
        </div>
        <div class="box">
            <input v-model="inpvalue" class="input" type="text" placeholder="输入学校、商务楼、地址">
            <div :class="zidan" v-if="noshow"><p>请填入字段名</p></div>
            <button class="bott" @click="searchFor()">提交</button>
            
        </div>
        <p class="sl" v-if="show">搜索历史</p>
        <div class="results">
            <ul>
                <li class="detail" v-for="(v,i) in msgdata" :key="i" @click="search(i)">
                    <p>{{v.name}}</p>
                    <p>{{v.address}}</p>
                </li>
                 
            </ul>
           

        </div>
    </div>
</template>

<script>
export default {
    name:'checkadress',
    data(){
        return {
            cities:"",
            inpvalue:"",
            id:"",
            msgdata:[],
            show:true,
            noshow:false,
            zidan:'ziduan',
            isshow:"false",
        }
    },
    created() {
        console.log(this.$route); 
        this.cities = this.$route.query.city;
        this.id = this.$route.query.id;
        console.log(this.id);
        
    },
    methods: {
        search(i){
            console.log(this.msgdata[i].geohash);
             this.$store.commit("getgeohash",this.msgdata[i].geohash);
             this.$router.push({
                 name:"wode"
             })
        },
        searchFor(){
            if(this.inpvalue==false){
                this.noshow=true;  
                // setTimeout(function(){
                //     this.noshow=false;
                // },1500)
                
                // return;
            }else{
                this.show=false;
           const api = "https://elm.cangdu.org/v1/pois?city_id="+this.id+"&keyword="+this.inpvalue;
            this.$http({
             url:api,
                method:'get',
                withCredentials:true
            }).then(res => {
               
                // console.log(res.data);
                this.msgdata = res.data;   
                if(this.msgdata.length==0){
                    this.msgdata.push({name:"抱歉，没有搜索结果"});
                }         
            })
             
            }  
        },
        back(){
            this.$router.back();
        }
    },
}
</script>

<style scoped>
#wrap{
    width:3.75rem;
    height: 100vh;
}
.top{
    width: 100%;
    height: 0.5rem;
    background-color:rgb(49, 143, 231);
    line-height: 0.5rem;
    font-size: 0.18rem;
    text-align: center;
    color: white;
}
.top img{
    float: left;
    margin-top: 0.07rem;
    height: 0.36rem;
    
    
}
.ch{
    float: right;
    margin-right: 2%;
     font-size: 0.15rem;
     color: white;
}
.box{
    background-color: #fff;
    margin-top: 0.1rem;
    width: 100%;
    height: 0.9rem;
    border-top: 1px solid lightgray;
     border-bottom: 1px solid lightgray;
     text-align: center;
     position: relative;
}
.input{
    margin-top: 0.1rem;
    width: 90%;
    height: 0.3rem;
    border:1px solid lightgray;
    font-size: 0.16rem;
    text-indent: 1em;
}
.bott{
    border: 0;
    margin-top: 0.1rem;
    width: 90%;
    height: 0.3rem;
    background-color:rgb(49, 143, 231);
    color: white;
    font-size: 0.16rem;
}
.ziduan{
    width: 40%;
    height: 0.2rem;
    position: absolute;
    left: 30%;
    top:0.4rem;
    border: 1px solid red;
}
.sl{
    padding-top: 0.05rem;
    padding-bottom: 0.05rem;
    padding-left: 5%;
    font-size: 0.15rem;
    border-top: 1.5px solid lightgray;
    border-bottom: 1.5px solid lightgray;
    background-color: #fff;
}
.results{
    width: 100%;
    background-color: #fff;
}
.detail{
    width: 100%;
    border-bottom: 1px solid lightgray;
}
.detail p:nth-child(1){
    padding-left: 5%;
    padding-top: 0.1rem;
    font-size: 0.16rem;
    color: black;
}
.detail p:nth-child(2){
     margin-top: 0.08rem;
    font-size: 0.13rem;
    color: gray;
    margin-bottom: 0.1rem;
    padding-left: 5%;
}
</style>
