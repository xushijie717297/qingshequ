import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld'
import About from '@/components/About'
import Home from '@/components/Home'
import Other from '@/components/Other'
import Then from '@/components/Then'
import Detail from '@/components/Detail'
import Register from '@/components/Register'
import Ghtea from '@/components/Ghtea'
import Move from '@/components/Move'
import Music from '@/components/Music'
import Wdyy from '@/components/Wdyy'
import Cnxh from '@/components/Cnxh'
import Sousuo from '@/components/Sousuo'
import Yuedu from '@/components/Yuedu'
import Yingshi from '@/components/Yingshi'
import Yinyue from '@/components/Yinyue'
import Yishu from '@/components/Yishu'
import Quwei from '@/components/Quwei'
import Sheji from '@/components/Sheji'
import Shenghuo from '@/components/Shenghuo'
import Maotie from '@/components/Maotie'
import Fenlei from '@/components/Fenlei'
import Jin from '@/components/Jin'
import Muo from '@/components/Muo'
import Shui from '@/components/Shui'
import Huo from '@/components/Huo'
import Tuo from '@/components/Tuo'
import Yanjiuhui from '@/components/Yanjiuhui'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      redirect:'/home',
      component: HelloWorld,
      children:[
		     {
		    		path:'/home',
		    		component:Home,
				redirect:'/ghtea',
				children:[
				{
						path:'/ghtea',
						component:Ghtea		
				},
				{
						path:'/move',
						component:Move
				},
				{
						path:'/music',
						component:Music
				},
				{
						path:'/wdyy',
						component:Wdyy
				},
				{
						path:'/cnxh',
						component:Cnxh
				}		
				]
		    },
		    {
		    		path:'/about',
		    		component:About,
				
		    },
		    {
		    		path:'/other',
		    		component:Other
		    },
		    {
		    		path:'/then',
		    		component:Then
		    }
      ]
    },
    {
    		path:'/detail/:id',
    		component:Detail
    	
    },
    {
    		path:'/yanjiuhui',
    		component:Yanjiuhui
    	
    },
    {
    		path:'/register',
    		component:Register
    },
    {
    		path:'/maotie',
    		component:Maotie
    },
    {
    		path:'/fenlei',
    		component:Fenlei,
		children:[
			{
					path:'/jin',
					component:Jin
			},
			{
					path:'/muo',
					component:Muo
			},
			{
					path:'/shui',
					component:Shui
			},
			{
					path:'/huo',
					component:Huo
			},
			{
					path:'/tuo',
					component:Tuo
			}
		]
		
    },
    {
    		path:'/sousuo',
    		component:Sousuo,
		redirect:'/yuedu',
		children:[
			{
					path:'/yuedu',
					component:Yuedu		
			},
			{
					path:'/yingshi',
					component:Yingshi
			},
			{
					path:'/yinyue',
					component:Yinyue
			},
			{
					path:'/sheji',
					component:Sheji
			},
			{
					path:'/yishu',
					component:Yishu
			},
			{
					path:'/quwei',
					component:Quwei
			},
			{
					path:'/shenghuo',
					component:Shenghuo
			},
		]
    }	
    
  ]
})
