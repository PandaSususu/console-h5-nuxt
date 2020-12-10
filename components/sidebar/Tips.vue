<template>
  <div class="ui-panel tips">
    <h3 class="title">温馨通道</h3>
    <ul class="layui-row layui-col-space10">
      <li
        class="layui-col-md6"
        v-for="(item, index) in lists"
        :key="'tips' + index"
      >
        <a :href="item.link" :target="item.openType">{{ item.title }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'tips',
  props: ['lists'],
}
</script>

<style lang="scss" scoped>
.tips {
  overflow: hidden;
}
ul {
  overflow: hidden;
  padding: 10px 0;
  li {
    height: 50px;
    text-align: center;

    a {
      display: block;
      width: 100%;
      height: 100%;
      line-height: 42px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      border: 1px solid #f2f2f2;

      &:hover {
        color: #009688;
      }
    }
  }
}
</style>
