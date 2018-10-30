// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import iView from 'iview'; // 导入组件库
import 'iview/dist/styles/iview.css'; // 导入样式
//vuex
import store from '@/store/index.js'
import router from '@/router/index'
 import {powerRouter} from '@/router/BG/bgRouter.js'
 
 

Vue.config.productionTip = false
Vue.use(iView);


 

router.beforeEach((to, from, next) => {
  if(store.getters.role){ //判断role 是否存在
  debugger;
    if(store.getters.router.length !== 0){  
         next();
    }else{
      let newrouter
         if (store.getters.role == 'A') {  //判断权限
              newrouter = powerRouter
          } else {
              let newchildren = powerRouter[0].children.filter(route => {
                  if(route.meta){
                    if(route.meta.role == store.getters.role){
                      return true
                      }
                      return false
                  }else{
                      return true
                  }
              });
              newrouter = powerRouter
              newrouter[0].children = newchildren
          }
          router.addRoutes(newrouter) //添加动态路由
          store.dispatch('Roles',newrouter).then(res => { 
              next({ ...to })
          }).catch(() => {       

          })
    }	  
  }else{
       if (['/login'].indexOf(to.path) !== -1) { 
         next()
      } else {
         next('/login')
      }
}
})

new Vue({
  el: '#app',
  router,
  store,//使用store
  components: { App },
  template: '<App/>'
})
