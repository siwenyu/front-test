<template>
    <div class="page">
        <h1>donghua</h1>

        <div :class="['btn', {'btn-click': clickFalse}]">
            hover动画
        </div>

        <el-button type="primary" @click="change">点击变换1</el-button>
        <hr>

        <div class="c1">文字</div>
        <div class="c2-p">
            <div ref="c2" class="c-line c2"></div>
            <div class="c-line c3"></div>
            <div class="c-line c4"></div>
            <div class="c-line c5"></div>
            <div class="c-line c6"></div>
            <div class="c-line c7"></div>
        </div>

        <div ref="scroll1" class="scroll1">
            ssada
        </div>
        

    </div>
</template>
<style lang="less">
.page {
    height: 5000px;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
}
.btn {
    width: 300px;
    height: 100px;
    border: 1px solid #eee;
    text-align: center;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all ease-in-out .5s;
}
.btn-click {
    border-radius: 50px;
    width: 100px;
    height: 300px;
    transition: all ease-in-out .5s;
    border: 10px solid black;
    cursor: pointer;
    box-sizing: border-box;
}

.c1 {
    width:150px;
    height:100px;
    font-size: 40px;
    text-align:center;
    -webkit-background-clip: text;//剪除背景中文本以外部分
    background:red;
    border:5px solid #567577;
    border-radius:20px;
    position: absolute;;
    margin:5px;
    animation:myfrist 10s linear 0s infinite alternate running;
}

@keyframes myfrist{
    0% {border-color:red;background-color:orange;}
    20%  {border-color:yellow; background-color:yellow;}
    40%  {border-color:blue; background-color:green;}
    60%  {border-color:green;background-color:blue; }
    80% {border-color:red;background-color:indigo; }
    100%  {border-color:green;background-color:violet; }
}
.c2-p {
    position: absolute;
    top: 0;
    left:0;
    width: 100%;
    height: 100%;
    border:1px solid red;
}
.c-line {
    width: 1px;
    height: 100%;
    border-radius: 50%;
    position: absolute;
    left: 50%;
    top: 0%;
    animation: keyc2 1s 1 linear;
    background-position: 0 0;
    box-sizing: border-box;
    background: linear-gradient(90deg,  #ffc700 0%, #e91e1e 50%, #6f27b0 100%);
    transform-origin: 50% 50%;
}
.c2 {
    transform: rotate(180deg);
    background: linear-gradient(90deg,  #d10f5a 0%, #e91e1e 50%, #161418 100%);
}
.c3 {
    transform: rotate(185deg);
}
.c4 {
    transform: rotate(190deg);
}
.c5 {
    transform: rotate(195deg);
}
.c6 {
    transform: rotate(200deg);
}


@keyframes keyc2 {
    0% {
        background-position: 0% 0%;
    }
    20% {
        transform: rotate(90deg);
    }
    50% {
        background-position:100% 100%;
        transform: rotate(180deg);
    }
    80% {
        background-position: 50% 50%;
        height: 100%;
    }
    100% {
        background-position: 0% 0%;
        transform: rotate(360deg);
    }
}
.scroll1 {
    position: fixed;
    top: 300px;
    left:0;
    width: 200px;
    height: 200px;
    border:1px solid red;
    animation: ball-run 1s 1 linear;
    background-color: #567577;
}
// @keyframes ball-run {
// }


</style>


<script>
import { setTimeout } from 'timers';
import _ from 'lodash';


export default {
    name: 'test3',
    props: { mini: Boolean},
    data() {
        return {
            pass: 'password',
            clickFalse: false,
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
        setTimeout(() => {
            this.change();
        });
        let arr = [1,2,3,4];for (let i = 0; i <= arr.length; i ++ ){console.log(arr[i]);};

        window.addEventListener('scroll', _.throttle(this.onscroll, 1000));

        // this.addCSSRule();
        
    },
    methods: {

        change(){
            this.clickFalse = !this.clickFalse;
        },
        ballRun(top){
            // js创建@keyframes，ball从定位在(10,10)的位置运动到(100,100) 的位置
            const runkeyframes =` @keyframes ball-run{
                30%{
                    left: ` + -top + `px;
                    top: 10px;
                    background-color: #567577;
                },
                50% {
                    background-color: red;
                    left: ` + -top + `px;
                }
                100%{
                    left: 1000px;
                    top: 1000px;
                    background-color: #567577;
                }
            } `;
            // 创建style标签
            const style = document.createElement('style');
            // 设置style属性
            style.type = 'text/css';
            // 将 keyframes样式写入style内
            style.innerHTML = runkeyframes;
            // 将style样式存放到head标签
            // console.log(document);
            document.getElementsByTagName('head')[0].appendChild(style);
        },
        addCSSRule(name, styleStr, time) {
            let self = this;

            // 先删除
            self.delCSSRule(name);

            // 在最后一个style添加
            let styleLast;
            setTimeout(function(){
                if (document.getElementsByTagName('style')) {
                    styleLast = document.getElementsByTagName('style')[document.getElementsByTagName('style').length -1];
                }
                styleLast.innerHTML = styleStr;
            }, 10);
            
        },
        delCSSRule(name){
            // this.sheet.deleteRule(0);
            let index = this.getkeyframes(name);
            console.log('index', index);
            if (index.index > -1) {
                document.styleSheets[document.getElementsByTagName('style').length-1].deleteRule(index);
            } else {
                console.log('还没问');
            }
            
        },
        // addCSSRule (sheet, selector, rules, index) {
        //     if("insertRule" in sheet) {
        //         sheet.insertRule(selector + "{" + rules + "}", index);
        //     }else if("addRule" in sheet) {
        //         sheet.addRule(selector, rules, index);
        //     }
        // },
        
        getkeyframes(name) {
        // 获取所有的style样式
        // 寻找ball keyframes对应的style样式
        // 获取方式：根据animation运动的名称ball-run查询到对应的keyframes对应的style
            var animation = {};
            // 获取所有的style
            var styleAll = document.styleSheets;
            for (var i = 0; i < styleAll.length; ++i) {
                const item = styleAll[i];
                if (item.cssRules[0] && item.cssRules[0].name && item.cssRules[0].name === name) {
                    animation.cssRule = item.cssRules[0];
                    animation.styleSheet = styleAll[i];
                    animation.index = 0;
                }
            }
            return animation;
        },
        onscroll(e){
            // let self = this;
            // this.ballRun(this.$el.getBoundingClientRect().top);
            // const ballRunKeyframes = this.getkeyframes('ball-run');
            // console.log(ballRunKeyframes);
            // // deleteRule方法用来从当前样式表对象中删除指定的样式规则
            // ballRunKeyframes.styleSheet.deleteRule(0);
            // setTimeout(function(){
            //     // self.ballRun(self.$el.getBoundingClientRect().top);
            //     console.log(document.styleSheets.length);
            //     if (document.styleSheets.length - 1 >= 0) {
            //         ballRunKeyframes.styleSheet.deleteRule(document.styleSheets.length - 1);
            //     }
                
            // }, 50);
            // setTimeout(function(){
            //     self.ballRun(self.$el.getBoundingClientRect().top);
            //     // ballRunKeyframes.styleSheet.deleteRule(0);
            // }, 100);

            let styleStr = ` @keyframes ball-run{
                30%{
                    left: ` + -top + `px;
                    top: 10px;
                    background-color: #567577;
                },
                50% {
                    background-color: red;
                    left: ` + -top + `px;
                }
                100%{
                    left: 1000px;
                    top: 1000px;
                    background-color: #567577;
                }
            } `;
            this.addCSSRule('ball-run', styleStr, 3000);


        }
    }
}
</script>



<style scoped>

</style>



