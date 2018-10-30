<template>


 <Layout>
        <Header>
          <Row>
              <Col span="20">后台管理界面</Col>
              <Col span="4"><div class="logout_box" @click="logout()">退出</div></Col>
          </Row>
             </Header>
        <Layout>
            <Sider hide-trigger>
              <Menu theme="dark">
                	<template v-for="item in router[0].children" v-if="!item.hidden">
                    	<router-link v-if="!item.hidden && !item.children" :to="item.path">
                        <MenuItem name="item.name" :index="item.path" >{{item.name}}</MenuItem>
                      </router-link>
                   
                    </template>
               
               
            </Menu>
            </Sider>
            <Content> <router-view class="view"></router-view></Content>
        </Layout>
        <Footer>Footer</Footer>
    </Layout>

</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'index',
  data () {
    return {
     
    }
  },
  computed: {
    ...mapGetters([
        'router'
    ])
  },
  methods: {
    logout(){
    	this.$store.dispatch('Logout').then(() => {
            this.$router.push({ path: '/login' });
        }).catch(err => {
            this.$message.error(err);
        });
    }
  }
}
</script>

<style scoped>
.header{
	padding: 0px;
}
.nav_box{
	border-bottom: 0px;
}
.logout_box{
	background-color: #545c64;
	line-height: 60px;
    width: 100%;
    color:#fff;
}
</style>