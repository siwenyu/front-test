<template>
    <div>
        组件。
        <div>
            <el-input v-model="name" placeholder="请输入内容"></el-input>
            <el-input v-model="pass" placeholder="请输入内容"></el-input>
            <el-button @click="sub">登录</el-button>
            <hr>
            <br>
            <el-button>
                测试
            </el-button>
            <div class="p">
                <div class="p1">
                    这是一
                    这是一
                    这是一
                    这是一
                    这是一
                    这是一
                    这是一
                    这是一
                    这是一
                    这是一
                    这是一
                    这是一
                    这是一
                    这是一v
                </div>
                <div class="p2">
                    这是一
                </div>
            </div>
        </div>
        <el-upload
            class="upload-demo"
            action="http://localhost:1993/upload/"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :on-success="handleSec"
            :file-list="fileList2"
            list-type="picture">
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
    </div>
</template>

<script>
import { aa, fetchData } from '../assets/util';
import { setTimeout } from 'timers';

// var events = require('events');

export default {
    name: 'Login',
    data() {
        return {
            name: 'name',
            pass: 'password',
            fileList2:[
                {
                    name: 'food.jpeg', 
                    url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
                }
            ]
        }
    },
    mounted() {
//      function convert(m) {
        //   if(!m) {
        //     return ;
        //   }
        //   let arr = [];
        //   let item;
        //   while(m >= 1) {
        //   	item = m % 1000;
        //     m = parseInt(m / 1000);
        //     console.log(m);
        //     arr.push(item);
        //   }
        //   console.log(arr);
        //   return arr.reverse().join(',');
        
        // }
        // console.log(convert(-1));

        // const foo = (a, b) => {
        //     return Object.assign(a, b);
        // };
        // console.log(foo({name: '12'}, {name1: '3212213'}));



        
        // function a() {
        //     let a = 2;
        //     b();
        //     console.log('a函数');
        //     console.log(a,b);
        // }
        
        // function b() {
        //     var b = 1;
        //     console.log(a);
        // }
        // a();
        // function c() {
        //     i  = 3;
        //     console.log(i);
        // }
        // c();
        // console.log(i);


        
        // function pro(time) {
        //     return new Promise(resolve => {
        //         setTimeout(function(){resolve('res')},6000);
        //     })
        // }
        // pro(3000).then(res=>{
        //     console.log(res);
        // });

        let obj = {
            name: 'obj',
            sayName(){
                console.log(this.name);
            }
        }
        let obj1 = {
            name: 'obj1',
            sayName(){
                console.log(this.name);
            }
        }
        obj.sayName.call(obj1);

        // functionsleep(time) {
        // return newPromise( (resolve) =>setTimeout(resolve, time));

        // }

        // function sayp(say, val) {
        //     say(val);
        // }
        // function say(val) {
        //     console.log(process);
        // }
        // // sayp(say, 'name');
        // let time = (new Date()).getSeconds();
        // let sum = 0;
        // for(let i = 0; i < 1000000000; i++) {
        //     sum = sum + i;
        // }
        // let diff = (new Date()).getSeconds() - time;
        // console.log(`读文件操作耗费的%d秒`,diff);
        
        // const buf = Buffer.from('a');
        // console.log(buf.toString('hex'));
        // console.log(buf.toString('base64'));
        // console.log(buf);

        // console.log(events);
        // let eventEmitter = new events.EventEmitter();
        // console.log(eventEmitter);
        // eventEmitter.on('log', log);
        // function log() {
        //     console.log(111);
        // }
        // eventEmitter.emit('log');
        this.testXhr();
        // localStorage.name = 'test';
        // let nameTest = localStorage.nameTest;
        // if (!nameTest) {
        //     nameTest = prompt('创建一个测试用户？');
        //     localStorage.nameTest = nameTest;
        // };
        // let nameInfo = {
        //     name: 'test',
        //     age: 18,
        //     height: 180
        // }
        // localStorage.nameInfo = JSON.stringify(nameInfo);

        // this.name = localStorage.name;



        // console.log(localStorage);

        



        // this.sub();
        // this.subGet();
        this.setCookie('nameCookie', 'http://localhost:1993/');
        
        // fetch(url, {
        //     method: "POST",
        //     mode: "cors",
        //     headers: {
        //         "Content-Type": "application/x-www-form-urlencoded"
        //     },
        //     body: 'pass=' + this.pass + '&name=' + this.name
        //     }).then(function(res) {
        //         console.log("Response succeeded?", JSON.stringify(res.status));
        //         console.log(JSON.stringify(res));
        //     }).catch(function(e) {
        //     console.log("fetch fail", JSON.stringify(e));
        // });

        // fetch(url, {
        //     method: "get",
        //     mode: "cors",
        //     headers: {
        //         "Content-Type": "application/x-www-form-urlencoded"
        //     },
        //     }).then(function(res) {
        //         console.log("Response succeeded?", JSON.stringify(res.status));
        //         console.log(JSON.stringify(res));
        //     }).catch(function(e) {
        //     console.log("fetch fail", JSON.stringify(e));
        // });

    },
    methods: {
        async testXhr() {
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
        xhrDemo() {
            let xhr = new XMLHttpRequest();
            xhr.open('POST','http://localhost:1993/', false);
            xhr.onreadystatechange = function(data,d){
                if(xhr.readyState == 4) {
                    console.log('xhr回调');
                    console.log(xhr);
                }
            }
            xhr.send({name: 1});
        },
        handlePreview(data){
            console.log(data);
        },
        handleRemove(data){
            console.log(data);
        },
        handleSec(data){
            console.log(data);
        },
        getCookie(name) {
            var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
            if (arr = document.cookie.match(reg)){
            return true;
            // return (arr[2]);
            }else{
            return false
            }
        },

        //设置cookie   name为cookie的名字，value是值，expiredays为过期时间（天数）
        setCookie (name, value, expiredays) {
            expiredays = expiredays || 100000;
            var exdate = new Date();
            exdate.setDate(exdate.getDate() + expiredays);
            document.cookie = name + "=" + escape(value) + ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString());
        },

        //删除cookie
        delCookie (name) {
            var exp = new Date();
            exp.setTime(exp.getTime() - 1);
            var cval = getCookie(name);
            if (cval != null)
            document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
        },
        sub(){
            let url = 'http://localhost:1993/';
            fetch(url, {
                method: "POST",
                mode: "cors",
                credentials: "include",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                body: 'pass=' + this.pass + '&name=' + this.name
                }).then(function(res) {
                    console.log(res);
                    return res.json();
                })
                .then(res => {
                    console.log(res);
                })
                .catch(function(e) {
                console.log("fetch fail", JSON.stringify(e));
            });
        },
        subGet(){
            let url = 'http://localhost:1993/';
            fetch(url, {
                method: "GET",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json"
                },
                body: 'pass=' + this.pass + '&name=' + this.name
                }).then(function(res) {
                    console.log(res);
                    return res.json();
                })
                .then(res => {
                    console.log(res);
                })
                .catch(function(e) {
                console.log("fetch fail", JSON.stringify(e));
            });
        },
        /**
         * JSONP请求工具
         * @param url 请求的地址
         * @param params 请求的参数
         * @returns {Promise<any>}
         */
        // fetchData({url, params}) {
        //     return new Promise((resolve, reject) => {
        //         const strParams = (params) => {
        //             const keys = Object.keys(params);
        //             const keysLen = keys.length;
        //             return keys.reduce((pre, cur, index) => {
        //                 const value = params[cur];
        //                 const flag = index !== keysLen - 1 ? '&' : '';
        //                 return `${pre}${cur}=${value}${flag}`;
        //             }, '');
        //         }
                
        //         // 动态创建script标签
        //         let script = document.createElement('script');
        //         // 接口返回的数据获取
        //         window.jsonpCb = (res) => {
        //             document.body.removeChild(script);
        //             delete window.jsonpCb;
        //             resolve(res);
        //         }
        //         script.src = `${url}?${strParams(params)}&callback=jsonpCb`;
        //         document.body.appendChild(script);
        //     })
        // }
    }
}
</script>
<style scoped>
.p {
    position: relative;
    border: 1px solid blue;
}
.p1 {
    border: 1px solid red;
    position: relative;
}
.p2 {
    border: 1px solid red;
    font-size: 40px;
    position: relative;
    top: 40px;
}
</style>


