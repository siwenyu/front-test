<template>
    <div class="slide" v-on:mouseover="stop()" v-on:mouseout="move()">
    <div class="slideshow">
      <transition-group tag="ul" name="image" enter-active-class="image-enter-active">
        <li v-for="(img, index) in imgArray" v-show="index===mark" :key="index + 1">
          {{index}}<img width="100%" :src='img'>
        </li>
      </transition-group>
    </div>
    <div class="bullet">
      <span v-for="(item, index) in imgArray" :class="{ 'active':index===mark }" :key="index"></span>
    </div>
    <div class="dot-wrap">
      <div class="dot-div">
        <div @click="change(index)" v-for="(i, index) in imgArray" :key="index" :class="['dot', index === mark ? 'dot-active' : '']"></div>
      </div>
    </div>
  </div>
</template>

<script>
import fanyeItem from './fanye-item.vue'
export default {
    name: 'test1',
    props: { mini: Boolean , name},
    components:{
        'fanye-item': fanyeItem
    },
    data() {
        return {
            data: [],
            mark: 0,
            imgArray: ['http://pic1.nipic.com/2008-08-14/2008814183939909_2.jpg', 'http://pic1.nipic.com/2008-08-14/2008814183939909_2.jpg', 'http://pic1.nipic.com/2008-08-14/2008814183939909_2.jpg', 'http://pic1.nipic.com/2008-08-14/2008814183939909_2.jpg']
        }
    },
    mounted () {
        this.imgLength = this.imgArray.length;
    },
    methods: {
        autoPlay () {
            this.mark++;
            if (this.mark === this.imgLength) {
                this.mark = 0;
            }
        },
        play () {
            this.timer = setInterval(this.autoPlay, 2500)
        },
        change (i) {
            this.mark = i;
            console.log(i);
        },
        stop () {
            clearInterval(this.timer);
        },
        move () {
            this.timer = setInterval(this.autoPlay, 2500)
        }
    },
    created () {
        this.play()
    }
}
</script>


<style scoped>
* {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .slide {
    width: 100%;
    height: 320px;
    margin: 0 auto;
    margin-top: 50px;
    overflow: hidden;
    position: relative;
  }
  .slideshow {
    width: 100%;
    height: 320px;
  }
  li {
    position: absolute;
    width: 100%;
  }
  img {
    width: 100%;
    height: 320px;
  }
  .bar {
    position: absolute;
    width: 100%;
    bottom: 10px;
    margin: 0 auto;
    z-index: 10;
    text-align: center;
  }
  .bar span {
    width: 20px;
    height: 5px;
    border: 1px solid;
    background: white;
    display: inline-block;
    margin-right: 10px;
  }
  .active {
    background: red !important;
  }
  .image-enter-active {
    transform: translateX(0);
    transition: all 1.5s ease;
  }
  .image-leave-active {
    transform: translateX(-100%);
    transition: all 1.5s ease;
  }
  .image-enter {
    transform: translateX(100%);
  }
  .image-leave {
    transform: translateX(0);
  }
  
  .dot-wrap {
    width: fit-content;
    margin-left: 50%;
  }
  .dot-div {
    position: relative;
    top: -50px;
    z-index: 100;
    left: -50%;
  }
  .dot-div .dot {
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 10px;
    background: #ccc;
    margin: 5px;
  }
  .dot-div .dot-active {
    background: black;
    
  }
</style>