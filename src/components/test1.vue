<template>
    <div>
        <h1>test1</h1>
        组件。
        <el-button @click.prevent="show">点击</el-button>
        <div v-show="show2">sad撒大所大</div>
        <a  @click="show" href="#wwww驱蚊器二群翁">这是路由</a>
        <a href="http://www.baidu.com">这是路由111</a>
        {{show2}}
        <router-link to="/test2" >to test2</router-link>
        <router-link to="/test4#height400" >to test4</router-link>
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
            ]
        }
    },
    mounted() {
        
        console.log(this.$router);
        console.log(this.$route);
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
</style>
<style>
body {
    margin-left: 30px;
}
</style>



