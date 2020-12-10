<template>
  <div>
    <vue-panel></vue-panel>
    <div class="layui-container">
      <div class="layui-row layui-col-space10">
        <div class="layui-col-md8">
          <vue-top :lists="topsList"></vue-top>
          <nuxt />
        </div>
        <div class="layui-col-md4">
          <vue-tips :lists="tipsList"></vue-tips>
          <vue-sign></vue-sign>
          <vue-hotlist :lists="hotList"></vue-hotlist>
          <vue-ads></vue-ads>
          <vue-links :lists="linkList"></vue-links>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Panel from '~/components/Panel'
import Top from '~/components/contents/Top'
import Tips from '~/components/sidebar/Tips'
// import Sign from '~/components/sidebar/Sign'
import HotList from '~/components/sidebar/HotList'
import Ads from '~/components/sidebar/Ads'
import Links from '~/components/sidebar/Links'

export default {
  name: 'Index',
  components: {
    'vue-panel': Panel,
    'vue-top': Top,
    'vue-tips': Tips,
    // 'vue-sign': Sign,
    'vue-hotlist': HotList,
    'vue-ads': Ads,
    'vue-links': Links,
  },
  async asyncData({ $axios }) {
    const tipsResult = await $axios.$get('/public/tips')
    const hotsResult = await $axios.$get('/public/topWeek')
    const linksResult = await $axios.$get('/public/links')
    const topsResult = await $axios.$get('/public/topList')
    console.log(tipsResult.data)
    return {
      tipsList: tipsResult.data,
      hotList: hotsResult.data,
      linkList: linksResult.data,
      topsList: topsResult.data,
    }
  },
}
</script>

<style lang="scss"></style>
