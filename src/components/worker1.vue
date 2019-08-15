<template>
    <div>
        <!-- 组件。
        <el-button @click="show">点击</el-button>
        <div v-show="show2">sad撒大所大</div>
        <img :src="imgSrc" alt="">
        <img src="http://localhost:1993/test.jpg" alt=""> -->

        <div class="a">
            <div id="d" class="b">
                b
            </div>
            <div id="d" class="c">
                c
            </div>
            <div id="d" class="d">
                d
            </div>

        </div>
        
    </div>
</template>

<script>
import { aa, fetchData } from '../assets/util';
import CSSModules from 'vue-css-modules';

var events = require('events');

export default {
    name: 'worker1',
    props: { mini: Boolean},
    mixins: [CSSModules()],
    data() {
        return {
            pass: 'password',
            show2: false,
            imgSrc: '',
            name: 'name',
            fileList2:[
                {
                    name: 'food.jpeg', 
                    url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
                }
            ]
        }
    },
    mounted() {
       let w = new Worker("./worker.js");

    },
    methods: {
        show() {
            this.show2 = !this.show2;
        },
        async testXhr() {
            let url = 'http://localhost:1993/test';
            await fetch(url, {
                method: "GET",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json",
                    // "Content-Type": "multipart/form-data"
                },
                // credentials: "include",
                // body: 'pass=' + this.pass + '&name=' + this.name
                }).then(function(res) {
                    console.log(res);
                    return res.json();
                })
                .then(res => {
                    console.log(res);
                    this.imgSrc = res.resData.img;
                })
                .catch(function(e) {
                console.log(e);
            });
            console.log(2312);
        },
        async testXhr1() {
            let url = 'http://localhost:1993/test';
            await fetch(url, {
                method: "GET",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json"
                }
                }).then(function(res) {
                    console.log(res);
                    return res.json();
                })
                .then(res => {
                    console.log(res);
                })
                .catch(function(e) {
                console.log(e);
            });
            console.log(2312);
        },
    }
}
</script>


<style scoped>

.a {
    border: 1px solid red;
    display: flex;
    justify-content: center;
    align-items: center;
}
.b {
    border: 1px solid blue;
    flex-shrink: 1;
    flex-grow: 1;
}
.c {
    border: 1px solid blue;
    flex-shrink: 1;
    flex-grow: 1;
}
.d {
    font-size: 40px;
    border: 1px solid blue;
    flex-shrink: 1;
    flex-grow: 1;
}
</style>


