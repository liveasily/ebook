<template>
<div class="menu-bar">
    <transition name="slide-up">
    <div class="menu-wrapper" v-show="ifTitleAndMenuShow">
      <div class="icon-wrapper">
        <span class="icon-menu icon" @click="contentShow"></span>
      </div>
      <div class="icon-wrapper">
        <span class="icon-progress icon" @click="progressShow"></span>
      </div>
      <div class="icon-wrapper">
        <span class="icon-sun icon"></span>
      </div>
      <div class="icon-wrapper">
        <span class="icon-font icon"></span>
      </div>
   </div>
   </transition>
   <Content :ifContentShow="ifContentShow"></Content>
   <Progress :ifProgressShow="ifProgressShow"></Progress>
</div>
</template>

<script>
import Content from '@/components/Content'
import Progress from '@/components/Progress'
export default {
  components: {
    Content,
    Progress
  },
  props: {
    ifTitleAndMenuShow: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      ifContentShow: false,
      ifProgressShow: false
    }
  },
  methods: {
    contentShow () {
      this.ifContentShow = !this.ifContentShow
    },
    progressShow () {
      this.ifProgressShow = !this.ifProgressShow
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/global.scss';
.menu-wrapper {
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 101;
    display: flex;
    width: 100%;
    height: px2rem(48);
    background: white;
    box-shadow: 0 px2rem(-8) px2rem(8) rgba(0, 0, 0, .15);
    .icon-wrapper{
      flex: 1;
      @include center;
    }
  }
</style>
