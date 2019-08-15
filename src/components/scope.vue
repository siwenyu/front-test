<template>
    <div>
        组件。
        <div class="scope" :styleName="['p1','p2']">
            <test :name="name | addOne"/>
        </div>
        <button @click="change" >改变组件</button>
        <br>
        <br>
        <br>

        <!-- <div v-if="show1">
            这是组件1
               <br> 
            <button @click="handleChangeView1('A')">A</button>
            <button @click="handleChangeView1('B')">B</button>
            <button @click="handleChangeView1('C')">C</button>
            <component :is="currentView1"></component>
        </div> -->
        <div>
            这是组件2<br>
            
            <button @click="handleChangeView('A')">A</button>
            <button @click="handleChangeView('B')">B</button>
            <button @click="handleChangeView('C')">C</button>
                <component :is="currentView"></component>
        </div>
 
    </div>
</template>

<script>
import { aa, fetchData } from '../assets/util';
import CSSModules from 'vue-css-modules';
import test from './test.vue'

var events = require('events');

export default {
    name: 'scope',
    props: { mini: Boolean },
    mixins: [CSSModules()],
    components: {
        'test': test,
        A:test,
        B:{
            template:`
                <div>组件B</div>
            `
        },
        C:{
            template:`
                <div>组件C</div>
            `
        }
    },
    data() {
        return {
            name: 'name',
            pass: 'password',
            currentView: 'B',
            currentView1: 'C',
            show1: false,
            fileList2:[
                {
                    name: 'food.jpeg', 
                    url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
                }
            ]
        }
    },
    mounted() {
        function* helloWorldGenerator() {
            console.log('1');
            yield 'hello';
            console.log('2');
            yield 'world';
            console.log('3');
            return 'ending';
            console.log('4');
        }

        // var hw = helloWorldGenerator();
        // hw.next();
        // hw.next();

        // helloWorldGenerator();
        // for (var f of helloWorldGenerator()) {
        //     console.log(f);
        // }

        console.log(helloWorldGenerator());

        // var arr = [1, [[2, 3], 4], [5, 6]];

        // function* flat(a) {
        // var length = a.length;
        // for (var i = 0; i < length; i++) {
        //     var item = a[i];
        //     if (typeof item !== 'number') {
        //     yield* flat(item);
        //     } else {
        //     yield item;
        //     }
        // }
        // };
        // var n1 = flat(arr);
        // console.log(n1.next());

        // for (var f of flat(arr)) {
        //     console.log(f);
        // }
    },
    methods: {
        change() {
            this.show1=!this.show1;
        },
        handleChangeView(data) {
            this.currentView = data;
        },
        handleChangeView1(data) {
            this.currentView1 = data;
        }

    }
}
</script>


<style scoped>
.scope {
    color: red;
}
button {
    display: inline-block;
    border: 1px solid red;
    border-radius: 4px;
}
</style>


