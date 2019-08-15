<template>
    <div class="ths_swiper"
        ref="swiper"
        @touchstart="touchstart"
        @touchmove="touchmove"
        @touchend="touchend">
        <slot></slot>
    </div>
</template>
<style>
.ddd {
    position: absolute;
    border:1px solid red;
    /* left: 300px; */
    /* top: 400px; */
    width: 100px;
    height: 100px;
}
.eee {
    position: absolute;
    display: inline-block;
}
</style>


<script>
import { aa, fetchData } from '../assets/util';
import CSSModules from 'vue-css-modules';

var events = require('events');

export default {
    name: 'test2',
    data() {
        return {
            pass: 'password',
            show2: false,
            pageWidth: 0,
            pageWidth: 0,
            swiperEles: {},
            fileList2:[
                {
                    name: 'food.jpeg', 
                    url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
                }
            ]
        }
    },
    mounted () {
        this.pageWidth = this.$refs.swiper.clientWidth;
        this.pageWidth = this.$refs.swiper.parentNode.offsetWidth;
        this.swiperEles = document.querySelectorAll('.ths_swiper');
    },
    methods: {
        touchstart (e) {
            this.originalPos = e.touches[0].pageX
            const transform = this.swiperEles[0].style.transform
            this.originalLeft = Number(transform ? transform.split('(')[1].split('px')[0] : 0)
        },
        touchmove (e) {
            let moveDistance = e.touches[0].pageX - this.originalPos // >0 右滑，<0 左滑
            this.doSlide(moveDistance, false)
        },
        touchend (e) {
            let moveDistance = e.changedTouches[0].pageX - this.originalPos // >0 右滑，<0 左滑
            const transform = this.swiperEles[0].style.transform
            let currentLeft = Number(transform ? transform.split('(')[1].split('px')[0] : 0)
            if ((Math.abs(moveDistance) > this.pageWidth / 3 && ((moveDistance > 0 && currentLeft < 0) || (moveDistance < 0 && Math.abs(currentLeft) < this.elementWidth - this.pageWidth)))) {
            // 滑动距离大于阙值，且内容在边界内时,滑动一整页
            let distance = moveDistance > 0 ? this.pageWidth : -this.pageWidth
            this.doSlide(distance, true)
            } else {
            // 滑动回原处
            this.doSlide(0, true)
            }
        },
        /**
         * 滑动方法
         * @param {Number} distance 滑动距离
         * @param {Boolean} delay 滑动是否有动画效果
         */
        doSlide (distance, delay = false) {
            this.swiperEles.forEach((element, index) => {
            element.style.transform = `translateX(${this.originalLeft + distance}px)`
            element.style.transition = delay ? 'transform .3s' : 'initial'
            })
        }
    }
}
</script>



<style scoped>
.ths_swiper {
    position: relative;
    display: inline-block;
    text-align: center;
    font-size: 14px;
    transform: translateX(0);
    width: 100%;
}
</style>



