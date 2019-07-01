<template>
    <div id="wrap">
      <div class="top">
            <span @click="back()"><img src="../../../static/imgs/back.png" alt=""></span>
             <span>{{cities}}</span>
              <span class="qiehuan" @click="back()">切换城市</span>
        </div>
        <div class="box">
            <input v-model="inpvalue" class="inp" type="text" placeholder="输入学校、商务楼、地址">
            <div class="ziduan"><p>请填入字段名</p></div>
            <button class="btn" @click="searchFor()">提交</button>
            
        </div>
        <div class="ph" v-if="show">
            <div class="ten">
            <p>搜索历史</p>
            </div>
            
            <div v-for="(v,i) in setname" :key="i" class="lish" @click="getJW(setjing[i],setwei[i])">
                <!-- <router-link to="/first"> -->
                <div class="nine">
                <p>{{v}}</p>
                <p>{{setdress[i]}}</p>
                </div>
                <!-- </router-link> -->
            </div>
           
            <p @click="clear()" v-if="saw" class="clear">清空所有</p>

            </div>
             <div class="look4" v-if="look"><span>抱歉，没有搜索结果</span></div>
        <div class="results">
            <ul>
                <li  @click="getHistory(v.name,v.address,v.latitude,v.longitude);getJW(v.latitude,v.longitude,v.name)" class="detail" v-for="(v,i) in msgdata" :key="i">
                   
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
            look:false,
            saw:true,
            cities:"",
            inpvalue:"",
            cityid:"",
            msgdata:"",
            show:true,
            noshow:false,
            isshow:"false",
            setname:[],
            setdress:[],
            setjing:[],
            setwei:[]
        }
    },
    created() {
        // console.log(this.$route); 
        this.cities = this.$route.query.city;
        this.cityid = this.$route.query.id;
        // console.log(this.cityid);
        this.useHis();
        console.log(this.$route.query.id);
        this.$store.commit("getid",this.$route.query.id);
        
    },
    methods: {
        searchFor(){
            if(this.inpvalue==false){
                var ziduan = document.getElementsByClassName("ziduan")[0];
                ziduan.style.display="block";
                setTimeout(function(){
                    ziduan.style.display="none";
                },1500)


            }else{
                this.show=false;
           const api = "https://elm.cangdu.org/v1/pois?city_id="+this.cityid+"&keyword="+this.inpvalue;
            this.$http({
             url:api,
                method:'get',
                withCredentials:true
            }).then(res => {
                 console.log(api);
                console.log(res.data);
                this.msgdata = res.data;   
                if(this.msgdata.length==0){
                    this.look=true;
                    this.show = false;
                }else{
                     this.look=false;
                }         
            })
             
            };
            
           

        },
        back(){
            this.$router.back();
        },
        getHistory(a,b,c,d){
            if(localStorage.name){
                if(localStorage.name.indexOf(a)==-1){
                    localStorage.name += ","+a;
                    localStorage.dress+=","+b;
                     localStorage.jing += ","+c;
                    localStorage.wei +=","+d;
                }
            }else{
                localStorage.name = a;
                localStorage.dress = b;
                 localStorage.jing = c;
                localStorage.wei = d;
            }
        },
        useHis(){
            if(localStorage.name){
            this.setname = localStorage.name.split(",").reverse();
             this.setdress = localStorage.dress.split(",").reverse();
              this.setjing = localStorage.jing.split(",").reverse();
             this.setwei = localStorage.wei.split(",").reverse();
            
             }
            if(this.setname.length==0){
                this.saw = false;
            }
        },
        clear(){
            localStorage.removeItem("name");
            localStorage.removeItem("dress");
            localStorage.removeItem("jing");
            localStorage.removeItem("wei");
            this.setname = "";
            this.setdress = "";
             this.setnjing = "";
            this.setwei = "";
            if(this.setname.length==0){
                this.saw = false;
            }else{
                 this.saw = true;
            }

        },
        getJW(ac,bc,dd){
             this.$router.push({
            name:"first",
            // params:{sid:vid},
           
        });
            // console.log("欧式jw");
            this.$store.commit("getLocation",{"c":ac,"d":bc});
             this.$store.commit("findPo",dd);
           
            // console.log(ac,bc);
            //  console.log("a:"+this.$store.state.latitude);
        }

    },
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
    font-size: 0.18rem;
    text-align: center;
    color: white;
}
.top img{
    float: left;
    margin-top: 0.07rem;
    height: 0.36rem;
    
    
}
.qiehuan{
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
.inp{
    margin-top: 0.1rem;
    width: 90%;
    height: 0.3rem;
    border:1px solid lightgray;
    font-size: 0.16rem;
    text-indent: 1em;
}
.btn{
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
    display: none;
}
.ph{
    padding-top: 0.05rem;
    /* padding-bottom: 0.05rem; */
    /* padding-left: 5%; */
    font-size: 0.15rem;
    border-top: 1.5px solid lightgray;
    border-bottom: 1.5px solid lightgray;
    background-color: #fff;
   
}
.look4{
width: 100%;
}
.look4 span{
    margin-top: 0.2rem;
    margin-left: 5%;
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
.ten{
    font-size: 0.16rem;
     border-bottom: 2px solid lightgray;
}
.ten p{
    padding-left: 3%;
    margin-bottom: 0.05rem;
}
.lish{
    width: 100%;
    height: 0.5rem;
    border-bottom: 1px solid gray;
    /* background-color:red; */
}
.nine{
    width: 97%;
    margin-left: 3%;
    color: black;
}
.nine>p:nth-child(1){
    font-size: 0.16rem;
    margin-top: 0.12rem;
    margin-bottom: 0.08rem;
}
.nine>p:nth-child(2){
    font-size: 0.12rem;
    margin-bottom: 0.08rem;
}
.clear{
    height: 0.5rem;
    font-size: 0.2rem;
    text-align: center;
    line-height: 0.5rem;
}
</style>