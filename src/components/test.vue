<template>
    <div>
        <!-- 组件。
        <el-button @click="show">点击</el-button>
        <div v-show="show2">sad撒大所大</div>
        <img :src="imgSrc" alt="">
        <img src="http://localhost:1993/test.jpg" alt=""> -->

        <router-link to="/test1">Go to Bar</router-link>

        <div class="a">
            <div id="d" class="b">
                b
            </div>
            <div id="d" class="c">
                c
            </div>

        </div>
        <test1 @click.native="test1Click">这就是test1</test1>
        <p @click="test1Click">这是测试用的 </p>
        
    </div>
</template>

<script>
import { aa, fetchData } from '../assets/util';
import CSSModules from 'vue-css-modules';
import test1 from './test1.vue';

var events = require('events');

export default {
    name: 'scope',
    components:{
        'test1': test1
    },
    props: { mini: Boolean},
    mixins: [],
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
        let name = "name";
        function Name(name){
            this.name = name;
        }
        let b = new Name(name);
        // console.log(b);

        // let foo = function(){
        //     let local = 'local';
        //     let a = Math.random();
        //     return function bar(){
        //         console.log(local + a);
        //         return local + a;
        //     }
        // }();

        // let foo = (function (a, b){
        //     console.log(a,b);
        //     let local = 'local';
        //     let random1 = Math.random();
        //     return function bar(n){
        //         console.log(local + random1 + n);
        //         return local + random1 + n;
        //     }
        // }(function(c){
        //     console.log('c:' + c);
        //     return c;
        // }( (d)=> {
        //     console.log('d:' + d);
        //     return d;
        // })(1231231)));
        
        // console.log(foo(100));

        // var test = (function(a) {
        //     console.log('a:' + a);
        //     window.a = a;
        //     return function (b) {
        //         console.log('b:' + b);
        //         return window.a + b;
        //     }
        // }(function(a, b) {
        //     return a;
        // }(1,2)));
        // console.log(test(4));

        // let arr = Array(100);
        // arr = arr.join(',').split(',').map((val, index) => {
        //     return index;
        // })
        // console.log(arr);
        // arr = arr.reduce((a,b) => {
        //     return a + b;
        // }, 0)
        // console.log(arr);

        // function Person(name) {
        //     this.name = name || 'name';
        // }
        // function Teacher(subject) {
        //     // Person.call(this);
        //     this.subject = subject;
        // }

        // // Teacher.prototype = new Person();
        // Teacher.prototype = new Person();
        // // Teacher.prototype.constructor = Teacher;
        // let t1 = new Teacher('语文', 'dasdas');
        // console.log(t1);
        // console.log(t1.name);
        // console.log(Teacher.prototype);

        console.log(document.getElementById('d'));

        




        
        

        // 什么是闭包。函数和该函数能访问到的变量（也就是函数的运行环境）组成的总和就是闭包。
        // 日使用闭包的目的，局可隐藏局部变量，且全以访问局部函数，比如return，window也是可以的。
        // 注意，既然外部可以访问这个局部函数，则这个局部函数的this指向全局，但是在webpack中重写了this，无法测试。
        // 你在哪些地方用到了闭包？看闭包定义，其实导出都在用。只是为了达到隐藏变量的目的，故意使闭包发挥这个作用，才有了访问局部变量这样的说法。
        // 保护局部变量。保存局部变量的状态。对外提供变量的增删改查的方法，则该变量的状态能一直保存在闭包中。
        // 闭包存在的问题：内存泄露，不存在。部分浏览器下有问题，但是是浏览器自己的回收机制有问题，而不是闭包本身的问题。
        // function foo1(){
        //     let local = 'local';
        //     window.bar = function (){
        //         return local;
        //     }
        // };
        // console.log(window.bar());





        // this.testXhr();
        // console.log(process);
        // console.log('start');

// let prom = new Promise((res,rej)=>{
//     res('Promise');
// });
// console.log(prom.then(res => {
//     console.log(res);
//     return res;
// }).then(res => {
//     console.log(res);
// }))

// setImmediate(() => {
//     console.log('setImmediate1');
//     setImmediate(() => {
//         console.log('setImmediate3');
//     })
//     setTimeout(() => {
//         console.log('setTimeout3');
//     })
//     let prom1 = new Promise((res,rej)=>{
//         res('Promise3');
//     });
//     console.log(prom1.then(res => {
//         console.log(res);
//     }))
// })

// process.nextTick(() => {
//     console.log('nextTick1');
//     process.nextTick(() => {
//         console.log('nextTick2');
//     })
// })

// setTimeout(() => {
//     console.log('setTimeout1');
// })

// setTimeout(() => {
//     console.log('setTimeout2');
// });

// setImmediate(() => {
//     console.log('setImmediate1');
    // setImmediate(() => {
    //     console.log('setImmediate2');
    // })
    // setImmediate(() => {
    //     console.log('setImmediate3');
    // })
// })



// console.log('end');

    },
    methods: {
        show() {
            this.show2 = !this.show2;
        },
        test1Click(e) {
            console.log(e);
            console.log('回调');
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
.test {
    font-size: 40px;
}
.scope .test {
    font-size: 100px;
}
.a {
    border: 1px solid red;
    width: 300px;
    height: 300px;
    /* position: fixed; */
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: relative;
}
.b {
    border: 1px solid blue;
    width: 100px;
    height: 100px;
    margin: auto;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    /* position: absolute; */
    /* left: 50%;
    top: 50%;
    transform-origin:20% 40%; */
}
.c {
    border: 1px solid blue;
}
#d {
    font-size: 40px;
}
</style>


