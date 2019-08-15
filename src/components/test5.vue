<template>
    <div>
        <h1>test5</h1>

        <button @click="change" >改变组件</button>

        <div class="chart">
            <div class="chart_bar">

            </div>
        </div>
        <a target="_blank" @click="tiao" class="aaa" href="http://www.baidu.com">连接</a>

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
        
        let obj = [1,2,4,4];
        for(let i of obj) {
            console.log(i);
        }
    },
    methods: {
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



