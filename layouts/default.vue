<template>
  <div>
    <vue-header></vue-header>
    <Nuxt />
    <vue-footer></vue-footer>
  </div>
</template>

<script>
import Header from '~/components/Header'
import Footer from '~/components/Footer'

export default {
  created() {
    console.log(this.$auth.loggedIn)
  },
  components: {
    'vue-header': Header,
    'vue-footer': Footer,
  },
}
</script>

<style lang="scss">
@import '~/assets/css/global.css';

body {
  background-color: #f2f2f2;
}
.ui-panel {
  background-color: #fff;
  padding: 0 10px;
  margin-bottom: 10px;
  box-shadow: 5px 5px 5px #ddd;

  .title {
    padding: 10px 0;
    border-bottom: 1px solid #f2f2f2;
  }
}

.layui-word-aux {
  color: red !important ;
}
</style>
