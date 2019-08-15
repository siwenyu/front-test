<template>
    <div>
        <h1>test1</h1>
        
        组件。
        <el-button @click.prevent="show">点击</el-button>
        <div v-show="show2">sad撒大所大</div>
        <a  @click="show" href="#wwww驱蚊器二群翁">这是路由</a>
        <a href="http://www.baidu.com">这是路由111</a>
        {{show2}}
        
        <div class="aa">这是1
            <div class="bb">这是bb这是bb这是bb这是bb这是bb这是bb这是bb这是bb这是bb这是bb</div>
            <div class="cc">这是cc这是cc这是cc这是cc这是cc这是cc这是cc这是cc这是cc这是cc这是cc</div>
        </div>
        <div class="aaa">
            这是2
            <div class="bb">这是bb这是bb这是bb这是bb这是bb这是bb这是bb这是bb这是bb这是bb</div>
            <div class="cc">这是cc这是cc这是cc这是cc这是cc这是cc这是cc这是cc这是cc这是cc这是cc</div>
        </div>
        <div class="ddd">
            <div class="eee">这是e</div>
        </div>
        <template >
            <div v-if="!show2">sdasdasdadadasdas</div>
        </template>
        <div >
            <div v-if="!show2">sdasdasdadadasdas</div>
        </div>
        <div id="height4001" style="height:400px;border: 1px solid red; width:100px;" class="height400">这是height400高度</div>
        <div id="height4002" style="height:400px;border: 1px solid red; width:100px;" class="height400">这是height400高度</div>
        <div id="height4003" style="height:400px;border: 1px solid red; width:100px;" class="height400">这是height400高度</div>
        <div id="height400" style="height:400px;border: 1px solid red; width:100px;" class="height400">这是height400高度</div>
        <router-view/>
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
    props: { mini: Boolean , name},
    mixins: [CSSModules()],
    data() {
        return {
            pass: 'password',
            show2: false,
            fileList2:[
                {
                    name: 'food.jpeg', 
                    url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
                }
            ]
        }
    },
    mounted() {
        // 类数组
        let arrayLike = {
            0: 'name',
            1: 'age',
            2: 'height'
        }  
        // console.log(arrayLike);
        // Array.prototype.join.call(arrayLike, '&');
        // Array.prototype.slice.call(arrayLike, 0);
        // console.log(arrayLike);

        // Array.prototype.some.call(arrayLike, function(item){
        //     console.log(item);
        //     return item.toUpperCase();
        // });
        // console.log(arrayLike);

        function aa(...argument) {
            console.log(arguments);
        }

        aa(arrayLike);


        window.onhashchange = function(e){
            console.log('onhashchange');
            console.log(e);
        }

        console.log(history);
        window.onpopstate = (e,d,f) => {
            console.log(e,d,f);
        }
    },
    methods: {
        show(e) {
            console.log(e);
            this.show2 = !this.show2;
            // this.$emit('test1Click', 'test1');
        }
    }
}
</script>



<style scoped>
.test {
    font-size: 40px;
}
.scope .test {
    font-size: 100px;
}
body {
    margin-left: 30px;
}
.aa {
    position: relative;
    height: 200px;
    width: 200px;
    border: 1px solid red;
    background: #ccc;
    display: inline-block;
    top: -100px;
}
.aa .bb {
    position: relative;
    width: 200px;
    height: 100px;
    border: 1px solid blue;
    opacity: 1;
    background: #fff;
    display: block;
}
.aa .cc {
    position: relative;
    width: 200px;
    height: 100px;
    opacity: 1;
    border: 1px solid #ccc;
    top: -50px;
    background: #fff;
    display: block;
}
.aaa {
    top: -150px;
    position: relative;
    border:1px solid #ccc;
    padding-left: 30px;
    background: red;
    width: 300px;
    display: inline-block;
    left: -150px;
}
.aaa .bb {
    position: relative;
    width: 200px;
    height: 100px;
    border: 1px solid blue;
    opacity: 1;
    background: #fff;
    display: block;
}
.aaa .cc {
    position: relative;
    width: 200px;
    height: 100px;
    opacity: 1;
    border: 1px solid #ccc;
    top: -50px;
    background: #fff;
    display: block;
}
</style>



