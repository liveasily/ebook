<template>
<div class="content" v-show="ifContentShow" >
</div>
</template>

<script>
export default {
  props: {
    ifContentShow: {
      type: Boolean,
      default: false
    }
  }
}
</script>
<style lang="scss" scoped>
.content{
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  width: 80%;
  height: 100%;
  background: rgba(231, 221, 221, 0.8)
}

</style>
