<template>
<div class="progress" v-show="ifProgressShow"></div>
</template>
<script>
export default {
  props: {
    ifProgressShow: {
      type: Boolean,
      default: false
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/assets/styles/global.scss';
.progress{
    position: absolute;
    left: 0;
    bottom: px2rem(48);
    z-index: 101;
    width: 100%;
    height: px2rem(48);
    display: flex;
    background: white;
}
</style>
