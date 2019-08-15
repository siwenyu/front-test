<template>
    <div>
        <h1>test5</h1>

        <button @click="change" >改变组件</button>
        <div id="character-target-div"></div>

        <div class="chart">
            <div class="chart_bar">

            </div>
        </div>
        <a target="_blank" @click="tiao" class="aaa" href="http://www.baidu.com">连接</a>

    </div>
</template>
<style>

</style>


<script>

const HanziWriter = require('hanzi-writer');
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
        var writer = HanziWriter.create('character-target-div', '爽', {
  width: 150,
  height: 150,
  padding: 0,
  radicalColor: '#EE00FF', // pink
  showOutline: true
});

        console.log(writer);
        writer.animateCharacter();

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



