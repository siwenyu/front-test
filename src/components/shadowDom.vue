<template>
    <div>
        <h1>shadowDom</h1>
        <p id="domP"></p>
        <el-button @click="changeState">点击</el-button>
        <user-card />
    </div>
</template>

<script>
import { aa, fetchData } from '../assets/util';
import CSSModules from 'vue-css-modules';

var events = require('events');

export default {
    name: 'test1',
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
            ],
            shadowDom: ''
        }
    },
    mounted() {
        // let aa = document.getElementById('domP');
        // this.shadowDom = document.querySelector('#domP').attachShadow({mode: 'open'});
        // this.shadowDom.innerHTML = '<p>shadow添加测试</p>';
        // console.log(this.shadowDom);

        class UserCard extends Element {
            constructor() {
                super();
            
                let img = document.createElement('img');
                img.src = "https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2940073195,546045600&fm=179&app=42&f=JPG?w=1242&h=492";
                img.classList.add('my-img');
                console.log(this);
                this.append(img);
            }
        }
        window.customElements.define('user-card', UserCard)
        console.log(window);
    },
    methods: {
        changeState(e) {
            // this.shadowDom.mode = !this.shadowDom.mode;
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
<style>
body {
    margin-left: 30px;
}
</style>



