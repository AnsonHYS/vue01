import { AccList } from '@/store/account.js'

export default {
    state:{
        username:sessionStorage.getItem('USERNAME'),
        role:sessionStorage.getItem('ROLE'),
        router:[]
    },
    mutations:{
        SET_USERNAME:(state, username) => {
            state.username = username;
        },
        SET_ROLE:(state, role) => {
            state.role = role;
        },
        SET_ROUER:(state, newrouter) =>{
            state.router = newrouter;
        }
    },
    actions:{
        Logins({ commit }, info){//登录
            
            return new Promise((resolve, reject) => {
                let data={};
                //这里的map不是“地图”的意思，而是指“映射”。[].map(); 基本用法跟forEach方法类似。 function:(回调函数)
                AccList.map(function (item) { //获取所以用户信息
                    if(info.username === item.username || info.pew === item.pew){
                        commit('SET_USERNAME',item.username);  //将username和role进行存储
                        sessionStorage.setItem('USERNAME', item.username); //存入 session 
                        commit('SET_ROLE',item.role);
                        sessionStorage.setItem('ROLE', item.role);
                        return data={username:item.username};
                    }else{
                        return data;
                    }
              });  
                resolve(data);
          }).catch(error => {
              reject(error);
          });
        },
        Logout({ commit , state}){//退出
            return new Promise((resolve, reject) => {
        
                commit('SET_USERNAME','');
                commit('SET_ROLE','');
                commit('SET_ROUER',[]);
                location.reload();
                sessionStorage.removeItem('USERNAME');
                sessionStorage.removeItem('ROLE');
                resolve();
              }).catch(error => {
                reject(error);
              });
        },
        Roles({ commit }, newrouter){
            return new Promise((resolve, reject) => {
                  commit('SET_ROUER',newrouter); //存储最新路由
                  resolve(newrouter);
            }).catch(error => {
                reject(error);
            });
          },
    }
}