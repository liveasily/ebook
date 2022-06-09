<template>
<div class="content" v-show="ifContentShow">
  <div class="content-wrapper" v-if="bookAvailable">
    <div class="content-item" v-for="(item, index) in navigation.toc" :key="index" @click="$listeners.jumpTo(item.href)">
      <span class="text">{{item.label}}</span>
    </div>
  </div>
  <div class="empty" v-else>加载中...</div>
</div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  props: {
    ifContentShow: {
      type: Boolean,
      default: false
    },
    bookAvailable: {
      type: Boolean,
      default: false
    },
    navigation: {
      type: Object
    }
  },
  methods: {

  }
}
</script>
<style lang="scss" scoped>
@import '@/assets/styles/global.scss';
.content{
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  width: 80%;
  height: 100%;
  background: white;
  overflow: auto;
  .content-wrapper{
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    flex-direction: column;
    .content-item{
      z-index: 100;
      width: 100%;
      padding: px2rem(20) px2rem(15);
      border-bottom: px2rem(1) solid #f4f4f4;
      color: #333;
      .text{
        font-size: px2rem(15);
      }
    }
  }
   .empty{
     position: absolute;
     top: 0;
     left: 0;
     width: 100%;
     height: 100%;
     @include center;
   }
}

</style>
