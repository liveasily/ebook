<template>
<div class="ebook">
  <title-bar
  :ifTitleAndMenuShow="ifTitleAndMenuShow"></title-bar>
  <div class="read-wrapper">
      <div id="read"></div>
      <div class="mask">
         <div class="left" @click="prevPage"></div>
         <div class="center" @click="toggleTitleAndMenu"></div>
         <div class="right" @click="nextPage"></div>
      </div>
  </div>
  <menu-bar :ifTitleAndMenuShow="ifTitleAndMenuShow">
  </menu-bar>

</div>

</template>
<script>
import MenuBar from '@/components/MenuBar'
import TitleBar from '@/components/TitleBar'
import Epub from 'epubjs'
const DOWNLOAF_URL = '/static/沉默的大多数 (王小波) (z-lib.org).epub'
global.ePub = Epub
export default {
  components: {
    TitleBar,
    MenuBar
  },
  data () {
    return {
      ifTitleAndMenuShow: false
    }
  },
  methods: {
    toggleTitleAndMenu () {
      this.ifTitleAndMenuShow = !this.ifTitleAndMenuShow
    },
    prevPage () {
      if (this.rendition) {
        this.rendition.prev()
      }
    },
    nextPage () {
      if (this.rendition) {
        this.rendition.next()
      }
    },
    showEpub () {
      this.book = Epub(DOWNLOAF_URL)
      this.rendition = this.book.renderTo('read', {
        width: window.innerWidth,
        height: window.innerHeight
      })
      console.log(this.book)
      this.rendition.display()
    }
  },
  mounted () {
    this.showEpub()
  }
}
</script>
<style lang="scss" scoped>
@import 'assets/styles/global.scss';
.ebook{
  position: relative;
  .read-wrapper{
    .mask{
      position: absolute;
      top: 0;
      left: 0;
      z-index: 100;
      display: flex;
      width: 100%;
      height: 100%;
      .left{
        flex: 0 0 px2rem(100);
      }
      .center{
         flex: 1;
      }
      .right{
        flex: 0 0 px2rem(100);
      }
    }
  }
}

</style>
