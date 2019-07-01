export default {
  getcityID(state, cityID) {//state是必须参数
    state.shopID = cityID;
  },
  getLocation(state, datass) {
    state.latitude = datass.c;
    state.longitude = datass.d;
    // console.log(state.latitude, state.longitude);

  },
  getshopID(state, shopID) {//state是必须参数
    state.shopID = shopID;
  },
  getobj(state, obj) {//state是必须参数
    if (state.obj.length > 0 && state.shopID == state.obj[0].foods[0].restaurant_id) {
      return;
    }
    state.obj = obj;
  },
  getindex(state, obj) {//state是必须参数
    state.obj[obj.a].foods[obj.b].is_featured += 1;
    state.totalprice += state.obj[obj.a].foods[obj.b].specfoods[0].price;
  },
  getdele(state, obj) {//state是必须参数
    state.obj[obj.a].foods[obj.b].is_featured -= 1;
    if (state.obj[obj.a].foods[obj.b].is_featured == 0) {
      state.obj[obj.a].foods[obj.b].is_featured = 0;
    };
    state.totalprice -= state.obj[obj.a].foods[obj.b].specfoods[0].price;
    if(state.totalprice==0){
      state.totalprice=0;
    }
  },
  recqian(state,b){
state.haimo = b;
  },
  goujia(state,b){
    for(var i=0;i<state.obj.length;i++){
      for(var k=0;k<state.obj[i].foods.length;k++){
        if(state.obj[i].foods[k]._id==b){
          state.obj[i].foods[k].is_featured+=1;
          state.totalprice += state.obj[i].foods[k].specfoods[0].price;
        }
      }
    }
  },
  goujian(state,c){
    for(var i=0;i<state.obj.length;i++){
      for(var k=0;k<state.obj[i].foods.length;k++){
        if(state.obj[i].foods[k]._id==c){
          state.obj[i].foods[k].is_featured-=1;
          state.totalprice -= state.obj[i].foods[k].specfoods[0].price;
        }
      }
    }
  },
// yifeng
getname(state,a){
  this.state.username=a;
},
getid(state,a){
  this.state.cityid=a;
},
getgeohash(state,a){
  this.state.geohash=a;
},
getAddress(state,a){
  this.state.addressName=a;
},
getNameId(state,a){
  this.state.nameId=a;
  console.log(a);
},
getdel(state,a){
  state.delnum = a;
},
//jin

reduceN(state,b){
  state.paixu=b;
  console.log(state.paixu)
},
reduceM(state,c){
  state.jingdu=c.jdu;
  state.weidu=c.wdu;
  console.log(state.jingdu)
  console.log(state.weidu)
  
},
noshow(state,a){
  state.showif=a;
},
addA(state,a){
  state.history.push(a)
},
showA(state,a){
  state.color3=a.sw2;
  state.xian3=a.sw3
}



}