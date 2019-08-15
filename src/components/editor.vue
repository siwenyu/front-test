<template>
    <div>
        组件。
        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552650302253&di=195e686e859c42008d29c7f7e435ca02&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20180507%2F984612e2ba084fa9b6e2e286c4c27dd9.gif" alt="">
        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552650302253&di=195e686e859c42008d29c7f7e435ca02&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20180507%2F984612e2ba084fa9b6e2e286c4c27dd9.gif" alt="">
        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552650302253&di=195e686e859c42008d29c7f7e435ca02&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20180507%2F984612e2ba084fa9b6e2e286c4c27dd9.gif" alt="">
        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552650302253&di=195e686e859c42008d29c7f7e435ca02&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20180507%2F984612e2ba084fa9b6e2e286c4c27dd9.gif" alt="">
        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552650302253&di=195e686e859c42008d29c7f7e435ca02&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20180507%2F984612e2ba084fa9b6e2e286c4c27dd9.gif" alt="">
        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552650302253&di=195e686e859c42008d29c7f7e435ca02&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20180507%2F984612e2ba084fa9b6e2e286c4c27dd9.gif" alt="">
        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552650302253&di=195e686e859c42008d29c7f7e435ca02&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20180507%2F984612e2ba084fa9b6e2e286c4c27dd9.gif" alt="">
        分类：<el-input></el-input>
        <mark-down
        :title="'这是测试'"
        ref="editor"
        :initialValue="initialValue"
        @on-save="save"/>
        <el-button @click="close">关闭</el-button>
        <el-button @click="addData">提交</el-button>
        <div v-html="htmlData"></div>

        <div class="line"></div>

        <div class="div11"></div>
        <div class="div12"></div>
        <hr size="1">
        <hr size=".5">
        <svg width="100%" height="5px" version="1.1" xmlns="http://www.w3.org/2000/svg">

        <line x1="0" y1="0" x2="300" y2="0" style="stroke:rgb(99,99,99);stroke-width:0.5"/>
        <!-- <line x1="0" y1="0" x2="300" y2="0" style="stroke:rgb(99,99,99);stroke-width:1"/> -->
        <!-- <line x1="0" y1="0" x2="300" y2="0" style="stroke:rgb(99,99,99);stroke-width:2"/> -->

        </svg>
        <svg width="100%" height="5px" version="1.1" xmlns="http://www.w3.org/2000/svg">

        <!-- <line x1="0" y1="0" x2="300" y2="0" style="stroke:rgb(99,99,99);stroke-width:0.5"/> -->
        <line x1="0" y1="0" x2="300" y2="0" style="stroke:rgb(99,99,99);stroke-width:1"/>
        <!-- <line x1="0" y1="0" x2="300" y2="0" style="stroke:rgb(99,99,99);stroke-width:2"/> -->

        </svg>
        <svg width="100%" height="5px" version="1.1" xmlns="http://www.w3.org/2000/svg">

        <!-- <line x1="0" y1="0" x2="300" y2="0" style="stroke:rgb(99,99,99);stroke-width:0.5"/> -->
        <!-- <line x1="0" y1="0" x2="300" y2="0" style="stroke:rgb(99,99,99);stroke-width:1"/> -->
        <line x1="0" y1="0" x2="300" y2="0" style="stroke:rgb(99,99,99);stroke-width:2"/>

        </svg>
    </div>
</template>

<script>
import { aa, fetchData } from '../assets/util';
import CSSModules from 'vue-css-modules';
import childProcess from 'child_process';

import MarkDown from 'vue-meditor'
import { setInterval } from 'timers';

var events = require('events');

export default {
    name: 'editor',
    components: {'mark-down': MarkDown},
    props: { mini: Boolean , name},
    mixins: [CSSModules()],
    data() {
        return {
            pass: 'password',
            htmlData:'',
            initialValue: '',
            markdownValue: '',
            show2: false,
            path: '',
            fileList2:[
                {
                    name: 'food.jpeg', 
                    url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
                }
            ]
        }
    },
    mounted() {
        window.onload = function(){
            
            console.log('window.onload');
        }

        window.load = function(){
            console.log('window.load');
        }
        // window.document.onload = function(){
        //     console.log('document.onload');
        // }
        // window.body.onload = function(){
        //     console.log('body.onload');
        // }
        // window.ready = function(){
        //     console.log('window.ready');
        // }
        document.onreadystatechange = function(e){
            console.log(document.readyState);
        }
        window.onbeforeunload = function(){
            console.log('document.readyState');
        }
        
        // console.log(1);
        // this.path = this.$route.query && this.$route.query.path;

        // this.testXhr();
        // // this.addData();

        // console.log(MarkDown);
        // window.localStorage.setItem('name', '321231231');

        // setInterval(function(){
        //     console.log(window.document.visibilityState);
        //     console.log(window.document.hidden);
        // }, 2000)

        // window.document.addEventListener('visibilitychange', function() {
        //     console.log('change', window.document.hidden);
        // });
        // window.document.addEventListener('visibilitychange', function() {
        // var isHidden = document.hidden;
        // console.log('change', isHidden);
        // if (isHidden) {
        //     // 动画停止
        //     // 服务器轮询停止 等等
        // } else {
        //     // 动画开始
        //     // 服务器轮询
        // }
        // });
        
    },
    methods: {
        async testXhr() {
            let url = 'http://localhost:1993/editorGet';
            await fetch(url, {
                method: "POST",
                mode: "cors",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                    // "Content-Type": "multipart/form-data"
                },
                credentials: "include",
                body: 'path=' + this.path
                }).then(function(res) {
                    console.log(res);
                    return res.json();
                })
                .then(res => {
                    console.log(res);
                    this.imgSrc = res.resData.img;
                    this.initialValue = res.fileText;
                })
                .catch(function(e) {
                console.log(e);
            });
        },
        async addData(e) {
            // console.log(this.$root);

            this.$refs.editor.save(e);
            
            let url = 'http://localhost:1993/editorPost';
            await fetch(url, {
                method: "POST",
                mode: "cors",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                    // "Content-Type": "multipart/form-data"
                },
                credentials: "include",
                body: 'fileData=' + this.markdownValue + '&path=' + this.path
                }).then(function(res) {
                    console.log(res);
                    return res.json();
                })
                .then(res => {
                    console.log(res);
                    this.imgSrc = res.resData.img;
                    this.initialValue = res.fileText;
                })
                .catch(function(e) {
                console.log(e);
            });
        },
        show() {
            this.show2 = !this.show2;
        },
        save(data){
            console.log(data);
            this.htmlData = data.htmlValue;
            this.markdownValue = data.markdownValue;
        },
        close() {
            window.close();
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
.div11 {
    margin-top: 20px;
    height: 1px;
    background: black;
    width: 100%;
    transform: scaleY(0.5);
}
.div12 {
    margin-top: 20px;
    height: 1px;
    background: black;
    width: 100%;
}
.line {
    height: 1px;
    width:100%;
    background: linear-gradient(0deg, #fff, #000);
}
</style>


