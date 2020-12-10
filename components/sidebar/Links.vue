<template>
  <div class="ui-panel">
    <h3 class="title">友情链接</h3>
    <ul>
      <li v-for="(item, index) in lists" :key="'link' + index">
        <a :href="item.link" :target="item.openType">{{ item.title }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'links',
  props: ['lists'],
}
</script>

<style lang="scss" scoped>
ul {
  overflow: hidden;
  line-height: 40px;
  li {
    float: left;
    margin-right: 15px;
  }
  li:last-child a {
    color: #11c2ee;
  }
}
</style>
