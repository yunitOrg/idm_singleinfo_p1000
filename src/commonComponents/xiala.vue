<template>
<div class="selectBox">
    <span v-if="xiaLaOption.spanText.length>0">{{xiaLaOption.spanText}}:</span>
    <div class="select" @click.stop="optionShow=!optionShow">
        <div>{{xiaLaOption.spanText=='年份'?selectValue+'年':xiaLaOption.spanText=='月份' && selectValue!='请选择'? selectValue+'月':selectValue}}</div>
        <div :class="[optionShow==false? '':'show']"></div>
    </div>
    <div v-show="optionShow" class="option" ref="drop">
        <div v-for="(item,index) in option" :key="index" 
        @click="getOptionItem(item)">
        {{xiaLaOption.spanText=='年份'? item.name+'年':xiaLaOption.spanText=='月份' && item.name!='请选择'? item.name+'月':item.name}}</div>
    </div>
</div>
</template>

<script>
export default {
    name: 'xiala',
    props: ['xiaLaOption'],
    data: () => ({
        optionShow: false,
        selectValue: '',
        option: [{
                name: ""
            },
            {
                name: ""
            }
        ]
    }),
    mounted() {
        document.addEventListener('click', this.clickOut)
        //初始化选中的
        this.option = this.xiaLaOption.option
        this.selectValue = this.xiaLaOption.option[0].name
    },
    methods: {
        //下拉菜单的选择
        getOptionItem(el) {
            console.log(el, 123);
            this.selectValue = el.name
            this.$emit('getOptionItem',el)
            this.optionShow = false
        },
        // 当点击菜单以外的区域隐藏菜单
        clickOut(e) {
            let drop = this.$refs.drop
            if (drop && !drop.contains(e.target) && this.optionShow) {
                this.optionShow = false
            }
        },

    }
}
</script>

<style lang="scss" scoped>
@import "../style/util.scss";

.selectBox {
    height: vh(36);
    font-family: "pfm";
    font-size: vw(16);
    color: #FFFFFF;
    font-weight: 500;
    display: flex;
    align-items: center;
    position: relative;

    .select {
        width: vw(100);
        height: 100%;
        background: rgba(14, 229, 243, 0.10);
        border: 1px solid rgba(14, 229, 243, 1);
        box-shadow: inset 0 0 vh(10) vw(4) rgba(14, 229, 243, 0.35);
        border-radius: vw(4);
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-left: vw(10);
        cursor: pointer;

        &>div:nth-child(1) {
            width: 80%;
            overflow: hidden; // 溢出隐藏
            text-overflow: ellipsis; // 溢出用省略号显示
            white-space: nowrap;
            font-family: "pf";
            font-size: vw(14);
            margin-left: vw(5); // 规定段落中的文本不进行换行
        }

        &>div:nth-child(2) {
            width: vw(15);
            height: vw(15);
            background: url(../assets/xiala.png) no-repeat;
            background-size: 100% 100%;
            margin-right: vw(8);
        }

        .show {
            transform: rotate(180deg);
        }
    }

    .option {
        width: vw(100);
        position: absolute;
        background: rgba(14, 229, 243, 0.10);
        border: 1px solid rgba(14, 229, 243, 1);
        box-shadow: inset 0 0 vh(10) vw(4) rgba(14, 229, 243, 0.35);
        border-radius: vw(4);
        top: vh(38);
        left: vw(46);
        font-family: "pf";
        z-index: 999999999999;
        &>div {
            white-space: nowrap;
            line-height: vh(30);
            cursor: pointer;
            font-size: vw(14);
            text-align: center;
        }

        &>div:hover {
            color: rgba(14, 229, 243, 1);
        }
    }
}
</style>
