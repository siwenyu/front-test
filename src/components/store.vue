<template>
    <div>
        vuex

        <hr>
        {{count}}

        <el-button @click="add">sdasd</el-button>
        <!-- <v-code></v-code> -->

 
    </div>
</template>

<script>
import { aa, fetchData } from '../assets/util';
import CSSModules from 'vue-css-modules';
import code from './code'

var events = require('events');

export default {
    name: 'store',
    props: { mini: Boolean , name},
    mixins: [CSSModules()],
    components:{
        'v-code': code
    },
    data() {
        return {
            pass: 'password',
            show2: false,
            fileList2:[
                {
                    name: 'food.jpeg', 
                }
            ]
        }
    },
    mounted() {
        let a = 0;
        console.log(window.a);
        var b = 0;
        console.log(window.b);
        this.$store.commit('increment');
        console.log(this.$store.state.count)
    },
    methods: {
        show() {
            this.show2 = !this.show2;
        },
        add() {
            this.$store.commit('increment', 10);
        }
    },
    computed:{
        count() {
            return this.$store.state.count;
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


