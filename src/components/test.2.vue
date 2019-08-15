<template>
    <div>
        组件。
        <el-button @click="show">点击</el-button>
        <div v-show="show2">sad撒大所大</div>
        <router-view></router-view>
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

        // 基本数据类型：null,undefined,number,string,boolean,function,object,array

        // 1. typeof

        // console.log(typeof null);   //object
        // console.log(typeof undefined);   //undefined
        // console.log(typeof 121);   //number
        // console.log(typeof 'a');   //string
        // console.log(typeof true);   //boolean
        // console.log(typeof function(){});   //function
        // console.log(typeof {});   //object
        // console.log(typeof [1,2]);   //object
        // console.log(typeof NaN);   //number

        function checkType(val) {
            if (typeof val == 'object') {
                if (val === null) {
                    return null;
                } else if(Object.prototype.toString.call(val) === '[object Array]'){
                    return 'array';
                } else {
                    return 'object';
                }
            } else if (typeof val == 'number') {
                if (isNaN(val)) {
                    return NaN;
                } else {
                    return 'number';
                }
            } else {
                return typeof val;
            }
            return undefined;
        }
        console.log(checkType(undefined));

        // 可以看出，以上可以通过typeof直接判断的有undefined，number，function，string，boolean。
        // 原理：typeof封装的方法中使用JSVAL_TO_STRING等方法判断底层的变量存储成二进制的二进制值得出的，如果前三位是0，就是object。null是0，前三位也是0.
        
        // 2. 判断null
        // null: 直接和null恒等

        console.log(null === null); // true

        // 3. 判断对象和数组 
        // 方法1.instanceof。检测某个对象是不是另一个对象的实例。判断如果已经是一个对象了，判断构造函数是否是数组。注意，数组的构造对象也是对象，[1,2] instanceof Object所以也是真。
        // 原理是看变量的构造函数。
        console.log('instanceof:');
        console.log({} instanceof Array); // fasle
        console.log([1,2] instanceof Array); // ture
        console.log({} instanceof Object); // ture
        console.log([1,2] instanceof Object); // ture

        // 方法2：toString方法.
        // 原理，调用Object对象的源性方法toString，并改变其方法内部this指向当前要检测的实例。
        // 为何不能直接使用toString，而要去Object源头去调用这个方法？因为Object对象的toString方法是读取变量的内部属性，而Array继承Ogject的时候重写了Array对象的toString方法。
        [1,2].toString // '1,2'； 
        ({name:1}).toString() // "[object Object]"
        console.log(Object.prototype.toString.call([]).toString()); // [object Array]
        console.log(Object.prototype.toString.call({}).toString()); // [object Object]
        console.log({name:1}.toString());

        // 方法3：constructor检测构造函数
        // 原理：Array，Object本身是函数，实例的构造器指向构造函数。如果相等，就是该构造函数的实例。

        console.log([].constructor === Array);  // true
        console.log({}.constructor === Array);  // false
        console.log([].constructor === Object);  // false
        console.log({}.constructor === Object);  // true

        // 方法4：Array.isArray()

        console.log(Array.isArray([])) // true
        console.log(Array.isArray({})) // false



        // 如何判断一个变量是不可用的（null,undefined,0,false,'',{}）
        // 思路：空数组和空对象使用JSON.stringify()转换成字符串，比较。然后使用!!取反，其实一个也是可以的。

        function check(val) {
            // if (Object.prototype.toString.call(val) == '[object Object]') {
            //     console.log(val.length);
            //     if (val.length) {
            //         return true;
            //     }
            //     else {
            //         return false;
            //     }
            // }
            if (JSON.stringify(val) == '{}' || JSON.stringify(val) == '[]') {
                return false;
            }

            if (!!val) {
                return true;
            } else {
                return false;
            }
        }
        console.log('check：');
        console.log(check(NaN));

        // 更多理解：<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Equality_comparisons_and_sameness#非严格相等">入口</a>
        // JS中的相等性判断：
        
        // 2. 严格相等比较： ===；严格相等
            // 1.1 不进行类型转换，类型不同返回false。 如果类型相同，并且值相同，则严格相等（NaN除外）；等式(a !== a)成立的唯一情况是a=NaN。
        // 1. 抽象相等比较： == ；宽松相等
            // 1.1先进行类型转换。然后执行严格相等。
            // 类型转换规则：
            // 字符串与数字：字符串转换成数字。
            // 布尔与数字：布尔转换成数字。
            // 字符串与布尔：全部转换成数字。
            // 对象与数字\布尔：对象转换（valueOf/toString == '[object Object]'）成原始值，布尔转换成数字。
            // 对象与字符串：对象转化成原始值，与字符串本身比较。
            // 对象与对象比较：两个独立的对象永远返回false，因为是引用，除非是自身。怎么比较对象属性值相等？遍历每个属性值的基础类型比较。
        // 3. 以及 Object.is （ECMAScript 2015/ ES6 新特性）
            // 行为方式与===相同，只是增加了(NaN, NaN)、(+0、-0)相关的比较特殊处理，表现不一样。
            // 建议实践中全部使用===号，因为结果更容易预测，判断出现意外情况概率更低。



        
        

        


        
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


