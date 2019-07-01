import Vue from 'vue'
import Router from 'vue-router'
import City from '@/components/hufengfeng/city'
import Checkadress from '@/components/hufengfeng/checkadress'
// import Login from '@/components/hufengfeng/login'
import First from '@/components/hufengfeng/first'
import Resetpw from '@/components/hufengfeng/resetpw'
// import Icons from '@/components/hufengfeng/icons'
import Stores from '@/components/hufengfeng/stores'
// import Search from '@/components/hufengfeng/search'
import Stores_gifts from '@/components/hufengfeng/stores_gifts'
import Intro3ji from '@/components/hufengfeng/intro3ji'
import Stores_comments from '@/components/hufengfeng/stores_comments'
import Detailshop from '@/components/hufengfeng/detailshop'
import Foodsafe from '@/components/hufengfeng/foodsafe'

//yifeng
import Login from '@/components/wangyifeng/login'
import Change from '@/components/wangyifeng/change'
import Wode from '@/components/wangyifeng/wode'
import Zhanghu from '@/components/wangyifeng/zhanghu'
import Xiugaiyonghu from '@/components/wangyifeng/xiugaiyonghu'
import Dizhi from '@/components/wangyifeng/dizhi'
import Xinzeng from '@/components/wangyifeng/xinzeng'
import Sousuodz from '@/components/wangyifeng/sousuodz'

import Chong from '@/components/wangyifeng/chong'
import Ye from '@/components/wangyifeng/ye'
import Yueshuoming from '@/components/wangyifeng/yueshuoming'
import Youhui from '@/components/wangyifeng/youhui'
import Daijinjuan from '@/components/wangyifeng/daijinjuan'
import Hongbaoshuoming from '@/components/wangyifeng/hongbaoshuoming'
import Jifen from '@/components/wangyifeng/jifen'
import Jifenshuoming from '@/components/wangyifeng/jifenshuoming'
import Huiyuanzx from '@/components/wangyifeng/huiyuanzx'
import Huiyuanshuoming from '@/components/wangyifeng/huiyuanshuoming'
import Zaixian from '@/components/wangyifeng/zaixian'
import Duihuanhuiyuan from '@/components/wangyifeng/duihuanhuiyuan'
import Goumaijilu from '@/components/wangyifeng/goumaijilu'
import Fuwuzhongxin from '@/components/wangyifeng/fuwuzhongxin'
import Public from '@/components/wangyifeng/public'
import Xiazai from '@/components/wangyifeng/xiazai'
import Lishihongbao from '../components/wangyifeng/lishihongbao'
import Duihuanhongbao from '../components/wangyifeng/duihuanhongbao'
import Tuijian  from '@/components/wangyifeng/tuijian'
import Daijinjuanshuoming  from '@/components/wangyifeng/daijinjuanshuoming'



// jin
import Sweet from '@/components/liujin/sweet'
import Part from '@/components/liujin/part'
import Paixu from '@/components/liujin/paixu'
import Choose from '@/components/liujin/choose'
// import Detail from '@/components/liujin/detail'
import Search from '@/components/liujin/search'
import Order from '@/components/liujin/order'




Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'citys',
      component: City
    },
    {
      path: '/checkadress',
      name: 'checkadress',
      component: Checkadress
    },
   {
          path: '/first',
          name: 'first',
          component: First
      },
      {
        path: '/search',
        name: 'search',
        component: Search
      },
      {
        path: '/login',
        name: 'login',
        component: Login
      },
    {
      path: '/resetpw',
      name: 'resetpw',
      component: Resetpw
    },
    {
      path: '/stores',
      name: 'stores',
      component: Stores,
      redirect:"/stores_gifts",
      children:[{
        path: '/stores_gifts',
        name: 'stores_gifts',
        component: Stores_gifts,
      },
      {
        path: '/stores_comments',
        name: 'stores_comments',
        component: Stores_comments,
      }]
    },
    {
      path: '/intro3ji',
      name: 'intro3ji',
      component: Intro3ji
    },
    {
      path: '/detailshop',
      name: 'detailshop',
      component: Detailshop
    },
    {
      path: '/foodsafe',
      name: 'foodsafe',
      component: Foodsafe
    },
// yifeng
{
  path: '/change',
  name: 'change ',
  component: Change 
},
{
  path: '/zhanghu',
  name: 'zhanghu',
  component: Zhanghu
},
{
  path: '/xiugaiyonghu',
  name: 'xiugaiyonghu',
  component: Xiugaiyonghu
},
{
  path: '/lishihongbao',
  name: 'lishihongbao',
  component: Lishihongbao
},
{
  path: '/duihuanhongbao',
  name: 'duihuanhongbao',
  component:Duihuanhongbao
},
{
  path: '/dizhi',
  name: 'dizhi',
  component: Dizhi
},
{
  path: '/xinzeng',
  name: 'xinzeng',
  component: Xinzeng
},
{
  path: '/sousuodz',
  name: 'sousuodz',
  component: Sousuodz
},

{
  path: '/wode',
  name: 'wode',
  component: Wode 
},
 
   {
     path: '/youhui', 
     name: 'youhui',
     component: Youhui
   },
   {
    path: '/tuijian', 
    name: 'tuijian',
    component: Tuijian 
  },
   {
     path: '/daijinjuan', 
     name: 'daijinjuan',
     component: Daijinjuan
   },
   {
    path: '/daijinjuanshuoming', 
    name: 'daijinjuanshuoming',
    component: Daijinjuanshuoming
  },
   {
    path: '/fuwuzhongxin',
    name: 'fuwuzhongxin',
    component: Fuwuzhongxin
  },
 
{
  path: '/huiyuanzx',
  name: 'huiyuanzx',
  component: Huiyuanzx
},
{
  path: '/huiyuanshuoming',
  name: 'huiyuanshuoming',
  component: Huiyuanshuoming
},
{
  path: '/public',
  name: 'public',
  component: Public
},
{
  path: '/xiazai',
  name: 'xiazai',
  component: Xiazai
},
{
  path: '/zaixian',
  name: 'zaixian',
  component: Zaixian
},
{
  path: '/duihuanhuiyuan',
  name: 'duihuanhuiyuan',
  component: Duihuanhuiyuan
},
{
  path: '/goumaijilu',
  name: 'goumaijilu',
  component: Goumaijilu
},
{
  path: '/chong',
  name: 'chong',
  component: Chong 
},
{
  path: '/ye',
  name: 'ye',
  component: Ye
},
{
  path: '/yueshuoming',
  name: 'yueshuoming',
  component: Yueshuoming
},

 
{
  path: '/hongbaoshuoming',
  name: 'hongbaoshuoming',
  component: Hongbaoshuoming
},
{
  path: '/jifen',
  name: 'jifen',
  component: Jifen
},
{
  path: '/jifenshuoming',
  name: 'jifenshuoming',
  component: Jifenshuoming
},
//jin
{
  path: '/order',
  name: 'order',
  component: Order
},
{
  path: '/sweet',
  name: 'sweet',
  component: Sweet,
  children: [
    {
      path: '/part',
      name: 'part',
      component: Part
    },
    {
      path: '/paixu',
      name: 'paixu',
      component: Paixu
    },
    {
      path: '/choose',
      name: 'choose',
      component: Choose
    }
  ]
}

  
  ]
})
