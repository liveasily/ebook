<template>
<div class="ebook">
  <title-bar
  :ifTitleShow="ifTitleShow"></title-bar>
  <div class="read-wrapper">
      <div id="read"></div>
      <div class="mask">
         <div class="left" @click="prevPage"></div>
         <div class="center" @click="toggleTitleAndMenu"></div>
         <div class="right" @click="nextPage"></div>
      </div>
  </div>
  <menu-bar :ifMenuShow="ifMenuShow"
            @hideTitle="hideTitle"
            :bookAvailable="bookAvailable"
            @jumpTo="jumpTo"
            @onProgressChange="onProgressChange"
            :navigation="navigation"
            ref="menubar">
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
      ifTitleShow: false,
      ifMenuShow: false,
      bookAvailable: false
    }
  },
  methods: {
    hideTitleAndMenu () {
      this.ifTitleShow = false
      this.ifMenuShow = false
    },
    hideTitle () {
      this.ifTitleShow = !this.ifTitleShow
    },
    jumpTo (href) {
      this.rendition.display(href)
      this.hideTitleAndMenu()
      this.$refs.menubar.hideProgress()
      this.$refs.menubar.hideContent()
    },
    onProgressChange (progressvalue) {
      const percentage = progressvalue / 100
      const location = percentage > 0 ? this.locations.cfiFromPercentage(percentage) : 0
      this.rendition.display(location)
    },
    toggleTitleAndMenu () {
      this.ifTitleShow = !this.ifTitleShow
      this.ifMenuShow = !this.ifMenuShow
      this.$refs.menubar.hideProgress()
    },
    prevPage () {
      if (this.rendition) {
        this.rendition.prev()
        const currentLocation = this.rendition.currentLocation()
        const progress = this.locations.percentageFromCfi(currentLocation.start.cfi)
        console.log(progress)
        // this.progress = progress * 100
        // this.$refs.progressbar.onProgressInput(this.progress)
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
      this.book.ready.then(() => {
        this.navigation = this.book.navigation
        return this.book.locations.generate()
      }).then(result => {
        this.locations = this.book.locations
        this.bookAvailable = true
        // console.log(this.navigation)
      })
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
