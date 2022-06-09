<template>
<div class="progress" v-show="ifProgressShow">
  <input class="progressbar" type="range"
                           max="100"
                           min="0"
                           step="1"
                           @change="$listeners.onProgressChange(progressvalue)"
                           @input="onProgressInput($event.target.value)"
                           :value="progressvalue"
                           :disabled="!bookAvailable"
                           ref="progressbar">
  <div class="text-wrapper">
    <span class="text">{{bookAvailable ? progressvalue + '%' : '加载中...'}}</span>
  </div>
</div>

</template>
<script>
export default {
  inheritAttrs: false,
  props: {
    ifProgressShow: {
      type: Boolean,
      default: false
    },
    bookAvailable: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      progressvalue: 0
    }
  },
  methods: {
    onProgressInput (progressvalue) {
      this.progressvalue = progressvalue
      this.$refs.progressbar.style.backgroundSize = `${this.progressvalue}% 100%`
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
    flex-direction: column;
    background: white;
    box-sizing: border-box;
    .progressbar{
      margin: 0;
      padding: 0;
      display: flex;
      width: 100%;
      height: px2rem(36);
      -webkit-appearance: none;
      background: -webkit-linear-gradient(#999,#999) no-repeat, #ddd;
      background-size: 0 100%;
      &:focus{
        outline: none;
      }
      &::-webkit-slider-thumb{
        -webkit-appearance: none;
        height: px2rem(20);
        width: px2rem(20);
        border-radius: 50%;
        background: white;
        box-shadow: 0 4px 4px 0 rgba(0, 0, 0, .15);
        border: px2rem(2) solid #ddd;
      }
    }
    .text-wrapper{
      display: flex;
      width: 100%;
      height: px2rem(12);
      left: 0;
      background: #ddd;
      .text {
        width: px2rem(380);
        font-size: 1px;
        line-height: px2rem(12);
        @include center
      }

    }
}
</style>
