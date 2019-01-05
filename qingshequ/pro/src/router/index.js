import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import About from '@/components/About'
import Home from '@/components/Home'
import Other from '@/components/Other'
import Detail from '@/components/Detail'
import Register from '@/components/Register'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      redirect:'/register',
      component: HelloWorld,
      children:[
		     {
		    		path:'/home',
		    		component:Home
		    },
		    {
		    		path:'/about',
		    		component:About
		    },
		    {
		    		path:'/other',
		    		component:Other
		    }
      ]
    },
    {
    		path:'/detail/:id',
    		component:Detail
    	
    },
    {
    		path:'/register',
    		component:Register
    }
  ]
})
