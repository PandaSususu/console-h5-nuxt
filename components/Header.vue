<template>
  <ul class="layui-nav">
    <li class="layui-nav-item"><nuxt-link to="/">首页</nuxt-link></li>
    <li class="layui-nav-item"><a href="">产品</a></li>
    <li class="layui-nav-item"><a href="">大数据</a></li>
    <li class="layui-nav-item">
      <a href="javascript:;">解决方案</a>
      <dl class="layui-nav-child">
        <!-- 二级菜单 -->
        <dd><a href="">移动模块</a></dd>
        <dd><a href="">后台模版</a></dd>
        <dd><a href="">电商平台</a></dd>
      </dl>
    </li>
    <li class="layui-nav-item">
      <a href="">控制台<span class="layui-badge">9</span></a>
    </li>
    <template v-if="$auth.isLoginIn">
      <li class="layui-nav-item float-right">
        <router-link :to="{ name: 'reg' }">注册</router-link>
      </li>
      <li class="layui-nav-item float-right">
        <nuxt-link to="/login">登录</nuxt-link>
      </li>
    </template>
    <template v-else>
      <li class="layui-nav-item float-right">
        <a href="javascript:;"
          ><img :src="userInfo.pic" class="layui-nav-img" />{{
            userInfo.name
          }}</a
        >
        <dl class="layui-nav-child">
          <dd><router-link :to="{ name: 'setting' }">修改信息</router-link></dd>
          <dd><a href="javascript:;" @click="switchAccount()">切换账号</a></dd>
          <dd><a href="javascript:;" @click="quitAccount()">退出登录</a></dd>
        </dl>
      </li>
      <li class="layui-nav-item float-right">
        <router-link :to="{ name: 'center' }"
          >个人中心<span class="layui-badge-dot"></span
        ></router-link>
      </li>
    </template>
  </ul>
</template>

<script>
export default {
  name: 'TopHeader',
  computed: {
    isShow() {
      return this.$store.state.isLogin
    },
    userInfo() {
      return (
        this.$store.state.userInfo || {
          name: '',
          email: '',
          pic: '',
        }
      )
    },
  },
  methods: {
    loginOut() {
      this.$pop('退出成功')
      this.$store.commit('setLoginStatus', false)
      this.$store.commit('setUserInfo', null)
      this.$store.commit('setUserToken', '')
      localStorage.removeItem('token')
      localStorage.removeItem('userInfo')
    },
    switchAccount() {
      this.$router.push({ name: 'login' })
    },
    quitAccount() {
      this.$confirm('你确定要退出当前登录吗？', () => {
        this.loginOut()
        this.$router.push({ name: 'index' }, () => {})
      })
    },
  },
}
</script>
<style lang="scss" scoped>
.float-right {
  float: right;
}
</style>
