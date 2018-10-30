import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex);

import login_state from '@/store/modules/login.js' 
export default new vuex.Store({
    modules: {
       Login:login_state
    },
    getters:{
        username: state => state.Login.username,
        role: state => state.Login.role,
        router: state => state.Login.router,
      }
})