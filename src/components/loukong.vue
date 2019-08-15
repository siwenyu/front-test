<template>
    <div>
        <div class="img">
            <img @mousedown="imgDown($event)" @mousemove.prevent="imgMove" :src="imgSrc" alt="" />
            <div v-show="isShowImgImg" class="img-img" @mouseup='imgUp($event)' :style="[{width:imgWidth + 'px',height:imgHeight + 'px', left:startX + 'px', top: startY + 'px', background: 'url(' + imgSrc + ')', backgroundPositionX: -startX+'px', backgroundPositionY: -startY+'px'}]"></div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'loukong',
    props: {},
    data() {
        return {
            imgSrc:'https://raw.githubusercontent.com/siwenyu/img/master/QQ20161215-0.png',
            imgHeight:0,
            imgWidth: 0,
            show2: false,
            isDown: false,
            startX: 0,
            startY: 0,
            endX: 0,
            endY: 0,
            isShowImgImg: false
        }
    },
    mounted() {
        // JS实现集成的方式：
        // 1. 子类的原型直接指向父类的实例。子类的实例可以直接访问父类的属性和方法。
        let name = 'name1';
        function A(name) {
            this.name = name;
        }
        function B(age){
            this.age = age;
        }
        B.prototype = new A('31231');

        let b = new B('q');
        b.__proto__.name = '测试';
        // console.log(b);

        function C(name) {
            this.name = name || 'name';
        }
        let c = new C();
        // 实例的构造原型指向构造函数的原型
        // console.log(C.prototype == c.__proto__);
        

    },
    methods: {
        show() {
            this.show2 = !this.show2;
        },
        imgMove(data) {
            let self = this;
            if(this.isDown) {
                self.drowImg();
                this.imgWidth = data.offsetX - this.startX;
                this.imgHeight = data.offsetY - this.startY;
                self.isShowImgImg = true;
            }
        },
        imgDown(data) {
            let self = this;
            if (this.isShowImgImg) {
                // 已经有了
                self.isShowImgImg = false;
                this.init();
            }
            this.isDown = true;
            // 初始位置
            this.startX = data.offsetX;
            this.startY = data.offsetY;
        },
        imgUp(data) {
            this.isDown = false;
            // 初始位置
            this.endX = this.startX + this.imgWidth;
            this.endY = this.startY + this.imgHeight;
            this.drowImg();
        },
        drowImg() {
            this.startX = this.startX != 0 ? this.startX : 0; 
            this.startY = this.startY != 0 ? this.startY : 0; 
            this.endX = this.endX != 0 ? this.endX : 0; 
            this.endY = this.endY != 0 ? this.endY : 0; 

            this.imgWidth = Math.abs(this.endX - this.startX);
            this.imgHeight = Math.abs(this.endY - this.startY);
        },
        init() {
            this.endX = 0;
            this.endY = 0;
            this.startX = 0;
            this.startY = 0;
            this.imgWidth = 0;
            this.imgHeight = 0;
            this.isShowImgImg = false;
        }
        
    }
}
</script>


<style scoped>
.img {
    position: relative;
    width: fit-content;
}
.img img{
    border: 1px solid red;
    opacity: .5;
    position: absolute;
    cursor: move; 
}
.img-img {
    border: 1px solid blue;
    width: 50px;
    height: 50px;
    display: block;
    position: absolute;
    left:0;
    top:0;
    border-radius: 3px;
    background: url();
}
</style>


