import Vue from 'vue'
import Router from 'vue-router'
 
// 要告诉 vue 使用 vueRouter
Vue.use(Router);

 
const routes = [
   	
    {
        path: "/login",
        component: () => import('@/components/login.vue'),
        
    }
    
 ]

var router =  new Router({
    routes
})
export default router;



 