<template>
    <div>
        <h1>test7</h1>

       <el-button @click.prevent="show">点击</el-button>

       <div class="div1">
           <div class="div11"></div>
       </div>
    </div>
</template>
<style>
.div1 {
    width: 100px;
    height: 100px;
    background: #ccc;
    border: 10px solid red;
    border-radius: 100px;
    position: relative;
    margin-left: 100px;
    padding: 50%;
}
.div11 {
    position: absolute;
    width: 20px;
    height: 20px;
    background: yellow;
    border: 1px solid red;
    border-radius: 10px;
    /* transform:  rotate(90deg); */
    animation: run1 2s infinite linear;
    /* transform: rotateZ(0deg) translate(100px, 100px) rotateZ(60deg); */
}


@keyframes run1 {
    0% {

    transform: rotate(0deg) translate(40px, 40px) rotate(0deg);

    }

    50% {

    transform: rotate(90deg) translate(40px, 40px) rotate(-360deg);

    }


    100% {

    transform: rotate(0deg) translate(40px, 40px) rotate(0deg);

    }
}

@keyframes run {
    0% {
        transform:  rotate(0deg);
    }
    50% {
        transform:  rotate(90deg);
    }
    /* 100% {
        transform:  rotate(0deg);
    } */
}

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
        let d1 = new Date('2017-01-02').getTime();
        let d2 = new Date('2017-04-01').getTime();
        console.log(d1, d2);
        let arr = [];
        while (d1 <= d2) {
            let str1 = new Date(d1).getFullYear();
            console.log(new Date(d1));
            // let str = new Date(d1).getFullYear() + '-' + (new Date(d1).getMonth() + 1) + '-' + new Date(d1).getDate();
            let str = new Date(d1).getFullYear() + '-' + (new Date(d1).getMonth() + 1);
            arr.push(str);
            d1 += 28*24*60*60*1000;
        }
        arr.push(new Date(d2).getFullYear() + '-' + (new Date(d2).getMonth() + 1));
        console.log(arr);



        // let arr = [1,2,3,4,5,6,7,8,9,10];
        // arr.map(function(item, index, all) {
        //     if (item%2 == 0) {
        //         if (index - 1 >= 0 && index + 1 < arr.length) {
                    
        //         }
        //     }
        // })

        // Object.prototype.b = () => {alert('b')};var a = new A();function A(){};a.b();
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



