<template>
    <div>
        <h1>test3</h1>
        <router-link to="/test2">Go to Bar2</router-link>
        <router-link :to="{path: '/test4', meta: {x: 212120, y: 0}}">Go to Bar4</router-link>
        <div id="height4001" style="height:400px;border: 1px solid red; width:100px;" class="height400">这是height400高度</div>
        <div id="height4002" style="height:400px;border: 1px solid red; width:100px;" class="height400">这是height400高度</div>
        <div id="height4003" style="height:400px;border: 1px solid red; width:100px;" class="height400">这是height400高度</div>
        <div id="height400" style="height:400px;border: 1px solid red; width:100px;" class="height400">这是height400高度</div>
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
    name: 'test3',
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
        console.log(this.$route);
        console.log(this.$router);

    },
    methods: {
        
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



