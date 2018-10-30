<template>
  <div class="login_box">
    <!-- <el-form label-position="right" label-width="60px" :model="loginfrom">
      <el-form-item label="用户名">
        <el-input v-model="loginfrom.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input  v-model="loginfrom.pew"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="login(loginfrom)">登录</el-button>
      </el-form-item>
    </el-form> -->

     <Form ref="formInline" :model="loginfrom">
        <FormItem prop="用户名">
            <Input type="text" v-model="loginfrom.username" placeholder="Username">
                <Icon type="ios-person-outline" slot="prepend"></Icon>
            </Input>
        </FormItem>
        <FormItem prop="密码">
            <Input type="text" v-model="loginfrom.pew" placeholder="Password">
                <Icon type="ios-lock-outline" slot="prepend"></Icon>
            </Input>
        </FormItem>
        <FormItem>
            <Button type="primary" @click="login(loginfrom)">登录</Button>
        </FormItem>
    </Form>
  </div>
  
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
     loginfrom:{
      username:'',
      pew:'123456'
     }
    }
  },
  methods:{
     login(data){
        console.log(data);
         this.$store.dispatch('Logins',data).then(res => { 
          this.$router.push({ path: '/' });
        }).catch(() => {

        })
     }
  }
}
</script>

<style scoped>
.login_box{
    width: 280px;
    position: fixed;
    left: 39%;
    top: 200px;
    border: 1px solid skyblue;
    border-radius: 15px;
    padding: 38px 60px 5px 25px;
    text-align: center;
}
</style>
