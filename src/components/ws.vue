<template>
    <div>
        组件。
        <el-button @click="show">点击</el-button>
        <div v-show="show2">sad撒大所大</div>
 
    </div>
</template>

<script>
import { aa, fetchData } from '../assets/util';
import CSSModules from 'vue-css-modules';

var events = require('events');

export default {
    name: 'scope',
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
        var CreateWebSocket = (function () {
        return function (urlValue) {
            if (window.WebSocket) return new WebSocket(urlValue);
            if (window.MozWebSocket) return new MozWebSocket(urlValue);
            return false;
        }
        })();

        var webSocket = CreateWebSocket("ws://localhost:1993/");

        webSocket.onopen = function (evt) {
            // 一旦连接成功，就发送第一条数据
            webSocket.send(JSON.stringify({txt:"我这边服务已经打开", ok: true}));
        }
        webSocket.onmessage = function (evt) {
            // 这是服务端返回的数据
            console.log("服务端说" + evt.data)
        }
        // 关闭连接
        webSocket.onclose = function (evt) {
            console.log("Connection closed.")
        }
        console.log(1);
        window.onstorage = (e) => {console.log(e)}

        // let c;

        // function a (){
        //     console.log('a');
        //     function c() {
        //         console.log('c');
        //     }


        // }
        // a();
        // console.log(c);
    },
    methods: {
        show() {
            this.show2 = !this.show2;
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
</style>


