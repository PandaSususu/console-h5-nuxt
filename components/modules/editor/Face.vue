<template>
  <transition name="face">
    <div v-show="isShow" class="faces">
      <ul class="layui-clear">
        <li
          v-for="(value, key) in faces"
          :key="key"
          @click="handleFaceClick(key)"
        >
          <img :src="value" alt="" />
        </li>
      </ul>
    </div>
  </transition>
</template>

<script>
import faces from '~/assets/js/face'

export default {
  name: 'Face',
  props: {
    isShow: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      faces,
    }
  },
  methods: {
    handleFaceClick(item) {
      this.$emit('addEvent', item)
    },
  },
}
</script>

<style lang="scss" scoped>
.faces {
  width: 373px;
  box-shadow: 5px 5px 5px #ddd;
  position: absolute;
  top: 40px;
  left: 0;
  z-index: 99;
  background-color: #fff;

  ul {
    display: flex;
    flex-wrap: wrap;
    border: 1px solid #ddd;
    border-bottom: none;
    border-right: none;
    li {
      width: 22px;
      border-right: 1px solid #ddd;
      border-bottom: 1px solid #ddd;
      padding: 4px;
      &:hover {
        transform: scale(1.5);
      }
    }
  }
}
</style>
