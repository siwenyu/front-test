
<template>
  <div class="ths_swiper"
    ref="swiper"
    @touchstart="touchstart"
    @touchmove="touchmove"
    @touchend="touchend">
    <slot></slot>
  </div>
</template>
<script>


</script> 
<style lang='scss'>
.ths_swiper {
  position: relative;
  display: inline-block;
  text-align: center;
  font-size: 14px;
  transform: translateX(0)
}
</style>