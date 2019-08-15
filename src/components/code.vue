<template>
    <div class="page">
        常用code

        # 数组去重

        ```
        1. 
        /**
        * @methods
        * @param {array} 要处理的数组
        * @return {array} 去重后的数组
        * @desc 数组去重
        */
        duplicateArrForeach(arr) {
            let newArr = [];
            arr.forEach((item, index, allArr) => {
                if (newArr.indexOf(item) < 0) {
                    newArr.push(item);
                }
            });
            return newArr;
        },
        duplicateArrMap(arr) {
            let newArr = [];
            arr.map((item, index, allArr) => {
                if (newArr.indexOf(item) < 0) {
                    newArr.push(item);
                }
            });
            return newArr;
        },
        duplicateArrFor(arr) {
            let newArr = [];
            for (let i = 0; i < arr.length; i ++) {
                if (newArr.indexOf(arr[i]) < 0) {
                    newArr.push(arr[i]);
                }
            }
            return newArr;
        }
        ```

        # 数组乱序

        ```
        /**
        * @methods
        * @param {array} 要处理的数组
        * @return {array} 乱序后的数组
        * @desc 数组乱序
        */
        randomArrSort(arr) {
            let newArr = [];
            newArr = arr.sort(() => {
                return Math.random() - 0.5 > 0 ? -1 : 1;
            })
            return newArr;
        }
        // 洗牌算法
        randomArrShuffle(arr) {
            return arr.forEach((item, index) => {
                let tmp;
                let indexTmp = parseInt(index + Math.random() * (arr.length - index));
                tmp =arr[indexTmp];
                arr[indexTmp] = item;
                arr[index] = tmp;
            })
        },
        ```

        # 
        <hr>
        {{count}}

        <el-button @click="add">sdasd</el-button>
        

    </div>
</template>
<style lang="less">



</style>


<script>
import { setTimeout } from 'timers';
import _ from 'lodash';


export default {
    name: 'code',
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
        // 数组去重
        let arr = [];
        arr[0] = [1,3,5,6,7,1,2,3,4,5,6,8];
        arr[1] = [1,2,3,4,5,6,7,8];
        arr[2] = [];
        arr[3] = [null];
        arr[4] = [0];

        // console.log(this.duplicateFor(arr));
        // arr.forEach((item, index) => {
        //     console.log(this.duplicateForeach(item));
        // })

        arr.forEach((item, index) => {
            console.log(this.duplicateArrSet(item));
        })

        
    },
    methods: {
        add() {
            this.$store.commit('increment');
        },
        mostItemArr1(arr) {
            // 统计所有的元素和出现次数
            let tmp = [];
            arr.forEach((item, index) => {
                let key = item;
                let isHas = {};
                let tmpItem = tmp.filter((item, index) => {
                    return item.name == key;
                })
                if (tmp.indexOf(tmpItem[0]) > -1) {
                    tmp[tmp.indexOf(tmpItem[0])].value ++;
                } else {
                    tmp[tmp.length] = {};
                    tmp[tmp.length - 1].name = key;
                    tmp[tmp.length - 1].value = 1;
                }
            });
            // 拿到统计之后，查找value最大的值
            let maxLength;
            let tmpMax = [];
            let firstValue = tmp[0] && tmp[0].value;
            tmp.forEach((item, index) => {
                if (item.value > firstValue) {
                    firstValue = item.value;
                }
            });
            tmp.forEach((item, index) => {
                if (item.value == firstValue) {
                    tmpMax.push(item);
                }
            });
            return tmpMax;
        },
        mostItemArr(arr) {
            let tmp = [];
            arr.forEach((item, index) => {
                let key = item;
                let isHas = {};
                tmp.forEach((item, index) => {
                    if (item.name == key) {
                        isHas = {
                            hasKey: 1,
                            index: index
                        };
                        return;
                    }
                })
                if (isHas && isHas.hasKey == 1) {
                    tmp[isHas.index].value ++;
                } else {
                    tmp[tmp.length] = {};
                    tmp[tmp.length - 1].name = key;
                    tmp[tmp.length - 1].value = 1;
                }
            });
            let maxLength;
            let tmpMax = [];
            let firstValue = tmp[0] && tmp[0].value;
            tmp.forEach((item, index) => {
                if (item.value > firstValue) {
                    firstValue = item.value;
                }
            });
            tmp.forEach((item, index) => {
                if (item.value == firstValue) {
                    tmpMax.push(item);
                }
            });
            return tmpMax;
        },
        randomArrShuffle(arr) {
            return arr.forEach((item, index) => {
                let tmp;
                let indexTmp = parseInt(index + Math.random() * (arr.length - index));
                tmp =arr[indexTmp];
                arr[indexTmp] = item;
                arr[index] = tmp;
            })
        },
        randomArrSort(arr) {
            let newArr = [];
            newArr = arr.sort(() => {
                return Math.random() - 0.5 > 0 ? -1 : 1;
            })
            return newArr;
        },
        duplicateArrForeach(arr) {
            let newArr = [];
            arr.forEach((item, index, allArr) => {
                if (newArr.indexOf(item) < 0) {
                    newArr.push(item);
                }
            });
            return newArr;
        },
        duplicateArrMap(arr) {
            let newArr = [];
            arr.map((item, index, allArr) => {
                if (newArr.indexOf(item) < 0) {
                    newArr.push(item);
                }
            });
            return newArr;
        },
        duplicateArrFor(arr) {
            let newArr = [];
            for (let i = 0; i < arr.length; i ++) {
                if (newArr.indexOf(arr[i]) < 0) {
                    newArr.push(arr[i]);
                }
            }
            return newArr;
        },
        duplicateArrSet(arr) {
            return new Set(arr);
        }
        
    },
    computed: {
        count() {
            console.log(this.$store.state);
            return this.$store.state.count;
        }
    }
}
</script>



<style scoped>

</style>



