<template>
    <div>
        <h1>test6</h1>

       <el-button @click.prevent="show">点击</el-button>
    </div>
</template>
<style>
.chart {
    width: 200px;
    height: 200px;
    position: relative;
    border: 1px solid red;
}

.chart_bar {
    height: 100px;
    width: 2px;
    background: black;
    margin-left: 100px;
}
.chart_bar:after {
    
}

.aaa:visited {
    font-size: 40px;
}
.aaa:hover {
    font-size: 20px;
}
</style>


<script>


export default {
    name: 'test3',
    props: { mini: Boolean},
    data() {
        return {
            pass: 'password',
            isShow: false,
            name: '21321',
            fileList2:[
                {
                    name: 'food.jpeg', 
                    url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
                }
            ]
        }
    },
    mounted() {
        // let arr = [1,2,3,4,5,6,7,8,9,10];
        // arr.map(function(item, index, all) {
        //     if (item%2 == 0) {
        //         if (index - 1 >= 0 && index + 1 < arr.length) {
                    
        //         }
        //     }
        // })

        let Arr = [1,2,3,4,5]; 
        // let l = 10; 
        // let a = Arr.map(function(a, b) {return a + 1;});
        let a = Arr.map((a, b) => {return a + 1;});
        console.log(a);
    },
    methods: {
        show() {
            var example = require('./example.js');
            example.incCounter();
            console.log(example);
        },
        change(){
            this.isShow = !this.isShow;
        },
        tiao() {
            function aaa1(){
                console.log(1);
                return 21312312312;
                console.log(111);
            }
            function aaa2(){
                console.log(2);
            }
            function aaa3(){
                console.log(3);
            }
            aaa1();
            aaa2();
            aaa3();
        }
    }
}
</script>



<style scoped>

</style>



