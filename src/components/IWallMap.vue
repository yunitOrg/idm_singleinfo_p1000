<template>
  <!--
    根目录规范(必须不能为空)：
    idm-ctrl：控件类型 drag_container：容器，drag_container_inlieblock：行内容器，idm_module：非容器的组件
    id：使用moduleObject.id，如果id不使用这个将会被idm-ctrl-id属性替换
    idm-ctrl-id：组件的id，这个必须不能为空
  -->
  <div
    idm-ctrl="idm_module"
    :id="moduleObject.id"
    :idm-ctrl-id="moduleObject.id"
  >
    <div class="iwallmap">
      <div class="wall-tools ptb12">
        <div class="wall-left">
          <div class="wall-li" v-for="(item, index) in toolsTip" :key="index">
            <div :class="item.class" ><i></i></div>
            <span>{{ item.label }}</span>
          </div>
        </div>
      </div>
      <!--表格-->
      <div class="wall-table">
        <div class="year-ul pdr50">
          <div class="year-copyli w10"></div>
          <div class="year-li w10" v-for="(item, index) in theadList" :key="index">
            <span>{{ item.label }}</span>
          </div>
        </div>
        <div class="wall-content">
          <div class="li" v-for="(item, index) in roomList" :key="index">
            <div class="li-name">
              <span>{{ item.title }}</span>
              <div class="blockOut">
                <div class="block" :style="`transform: rotate(${-135+(item.percent/100)*180}deg)`"></div>
                <span class="text">{{ item.percent }}%</span>
              </div>
            </div>
            <div class="li-box">
              <div class="li-line pdr50" v-for="(room, roomindex) in item.table" :key="roomindex">
                <div class="title w10">{{ room.label }}</div>
                <div class="title w10" v-for="(td, t) in theadList" :key="t">
                  <span class="tdbg" :class="{
                      tdactive: handleSetClass(room[td.i]),
                    }">
                    <template v-if="handleSet(room[td.i])">
                      <a-tooltip placement="top">
                        <template #title>
                          <span v-if="handleSet(room[td.i]) == 'type1'">已反馈</span>
                          <span v-if="handleSet(room[td.i]) == 'type2'">未反馈</span>
                          <span v-if="handleSet(room[td.i]) == 'type3'">无需反馈</span>
                        </template>
                        <i :class="handleSetClass(room[td.i])"></i>
                      </a-tooltip>
                    </template>
                    <template v-else>
                      <i :class="handleSetClass(room[td.i])"></i>
                    </template>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getWallRoom } from '../utils/mock';
export default {
  name: 'IWallMap',
  data() {
    return {
      moduleObject: {},
      propData: this.$root.propData.compositeAttr || {
        ulbox: {
          marginTopVal: "",
          marginRightVal: "",
          marginBottomVal: "",
          marginLeftVal: "",
          paddingTopVal: "",
          paddingRightVal: "20px",
          paddingBottomVal: "",
          paddingLeftVal: "20px"
        }
      },
      // 表头
      theadList: [],
      // 会议室
      roomList: [],
      active: 1,
      toolsTip: [
        {
          class: 'state1 wall-scr',
          label: '已完成',
        },
        {
          class: 'state2 wall-scr',
          label: '已超期',
        },
        {
          class: 'state3 wall-scr',
          label: '进行中',
        },
        {
          class: 'wall1',
          label: '已反馈',
        },
        {
          class: 'wall2',
          label: '未反馈'
        },
        {
          class: 'wall3',
          label: '无需反馈'
        },
      ],
      searchList: [
        {
          label: '按月显示',
          value: 1
        },
        {
          label: '按周显示',
          value: 2
        },
        {
          label: '按日显示',
          value: 3
        }
      ]
    }
  },
  mounted() {
    this.moduleObject = this.$root.moduleObject;
    this.init();
    this.handleYearMonth()
  },
  methods: {
    // 设置class
    handleSetClass(item) {
      if (item) {
        const n = item.split(',');
        return `state${n[0]} type${n[1]}`
      } else {
        return ''
      }
    },
    handleSet(item) {
      if (item) {
        const n = item.split(',');
        return n[1] ? `type${n[1]}` : ''
      } else {
        return ''
      }
    },
    handleClick(item) {
      this.active = item.value
    },
    handleYearMonth() {
      let year = new Date().getFullYear()
      for(let i=1; i<=12; i++) {
        this.theadList.push({
          label: `${year}年${i}月`,
          i: i
        })
      }
    },
    propDataWatchHandle(propData) {
      this.propData = propData.compositeAttr || {};
      this.init()
    },
    /**
     * @Desc 设置样式
     */
     handleStyle() {
      let styleObject = {};
      for (const key in this.propData) {
        if (this.propData.hasOwnProperty.call(this.propData, key)) {
          const element = this.propData[key]
          if (!element && element !== false && element != 0) {
            continue
          }
          switch (key) {
            case 'width':
              styleObject['width'] = element;
              break
            case 'height':
              styleObject['height'] = element;
              break
            case 'ulbox':
              IDM.style.setBoxStyle(styleObject, element)
              break
            case 'bgColor':
              styleObject['background-color'] = element && element.hex8;
              break
            case 'boxShadow':
              styleObject['box-shadow'] = element;
              break
            case 'boxborder':
              IDM.style.setBorderStyle(styleObject, element);
              break
          }
        }
      }
      window.IDM.setStyleToPageHead(this.moduleObject.id + " .iwallmap", styleObject);
    },
    async getMockData() {
      const ary = getWallRoom();
      let start = false;
      let end = false;
      let result = [];
      ary.forEach(item => {
        if (item.table && item.table.length > 0) {
          item.table.forEach(k => {
            console.log(Object.keys(k), k, 88)
            result = []
            Object.keys(k).forEach(j => {
              console.log(k[j], 88)
              if (k[j]) {
                result.forEach(s => {
                  if (!s['yes']) {
                    result.push({yes: j}) 
                  }
                })
              }
              console.log(result, 888)
              // if (k[j] && !start) {
              //   start = true;
              //   end = false
              //   // start && (k[j] = k[j] + ",first");
              // }
              // // if (k[j+1]) {
              // //   k[j] = k[j]
              // // }
              // if (!k[j+1] || j=='12') {
              //   start = false;
              //   end = true;
              //   // (k[j] = k[j] + ",end");
              // }
              // if (start && !end) {
              //   start && (k[j] = k[j] + ",first");
              // }
              // end && (k[j] = k[j] + ",end");
              // if (k == '12') {
              // }
            })
          })
        }
      })
      this.roomList = ary;
      this.$nextTick(() => {
        const line = document.querySelectorAll('.li-line')
        line.forEach(k => {
          const align = k.querySelectorAll('.tdactive');
          const start = align[0].querySelector('i');
          const end = align[align.length-1].querySelector('i');
          start.style.borderRadius = '20px 0 0 20px';
          end.style.borderRadius = '0 20px 20px 0';
        })
      })
    },
    initData() {
      if (this.moduleObject.env !== 'production') {
        this.getMockData()
        return
      }
      if (this.propData.dataSourceForm) {
        IDM.datasource.request(this.propData.dataSourceForm[0]?.id, {
          moduleObject: this.moduleObject,
          }, (data) => {
            const ary = data;
            console.log(ary, 8)
            this.roomList = ary;
        })
      }
    },
    init() {
      this.handleStyle()
      this.initData()
    }
  }
}
</script>

<style lang="scss" scoped>
.iwallmap{
  li, ul{
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .ptb12{
    padding: 12px 0;
  }
  .pdr50{
    padding-right: 50px;
  }
  .w10{
    width: 10%;
  }
  .wall-tools{
    display: flex;
    // justify-content: space-between;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  .wall-left{
    display: flex;
    align-items: center;
    color: #333;
    .wall-li+.wall-li{
      margin-left: 40px;
    }
    .wall-li{
      display: flex;
      align-items: center;
      font-size: 16px;
    }
    .wall-tip{
      display: inline-block;
      width: 24px;
      height: 14px;
      margin-right: 10px;
      margin-bottom: 2px;
    }
    .wall-scr{
      margin-right: 12px;
      height: 15px;
      margin-bottom: 3px;
      color: #333333;
      i{
        width: 30px;
        height: 16px;
        display: inline-block;
      }
    }
    
  }
  .wall-right{
    position: absolute;
    right: 0;
    span{
      display: inline-block;
      position: relative;
      padding: 0 20px;
      cursor: pointer;
    }
    span::after{
      content: "";
      width: 2px;
      height: 80%;
      background-color: #868686;
      border-radius: 1px;
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
    }
    span:last-child{
      padding-right: 0;
    }
    span:last-child::after{
      content: "";
      display: none;
    }
    .active{
      color: #206FBF;
    }
  }
  // .table-time-bar{
  //   background-color: #E9F0FF;
  //   td{
  //     color: #333333;
  //   }
  // }
  .wall-table{
    padding-right: 20px;
    box-sizing: border-box;
    .year-ul{
      display: flex;
      align-items: center;
      width: 100%;
      height: 48px;
      .year-copyli{
        height: inherit;
      }
      .year-li{
        height: inherit;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #D3DBEE;
        font-size: 16px;
        color: #333333;
        border-right: 1px solid #fff;
      }
      .year-li:nth-child(2){
        border-radius: 100px 0 0 100px;
      }
      .year-li:last-child{
        border-right: 0;
        border-radius: 0 100px 100px 0;
      }
    }
    .wall-content{
      .li:last-child{
        margin-bottom: 20px;
      }
      .li{
        box-shadow: 0px 2px 10px 0px rgba(0,0,0,0.1);
        border-radius: 20px;
        margin-top: 20px;
        .li-name{
          height: 60px;
          display: flex;
          align-items: center;
          font-size: 20px;
          color: #333333;
          padding: 0 20px;
          box-sizing: border-box;
          font-weight: bold;
          border-bottom: 1px solid rgba(233,240,255,1);
        }
        .title{
          height: inherit;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
          color: #333333;
          font-family: PingFangSC-Regular;
          font-weight: 400;
        }
        .li-box{
          padding: 20px 0;
        }
        .li-line .tdactive:nth-child(1){
          // background-color: #f00;
        }
        .li-line{
          height: 50px;
          display: flex;
          .tdbg{
            width: 100%;
            height: inherit;
            display: inline-block;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            i{
              width: 100%;
              height: 32px;
              display: inline-block;
              border-right: 1px solid #ffffff;
            }
          }
          .tdactive{
            .type1::after{
              position: absolute;
              left: 50%;
              top: 50%;
              transform: translate(-50%, -50%);
              content: "";
              width: 20px;
              height: 20px;
              display: inline-block;
              background-image: url('../assets/alert_active.png');
              background-size: 100% 100%;
              background-repeat: no-repeat;
            }
            .type2::after{
              position: absolute;
              left: 50%;
              top: 50%;
              transform: translate(-50%, -50%);
              content: "";
              width: 20px;
              height: 20px;
              display: inline-block;
              background-image: url('../assets/nofeed.png');
              background-size: 100% 100%;
              background-repeat: no-repeat;
            }
            .type3::after{
              position: absolute;
              left: 50%;
              top: 50%;
              transform: translate(-50%, -50%);
              content: "";
              width: 22px;
              height: 6px;
              background-image: url('../assets/no.png');
              background-size: 100% 100%;
              background-repeat: no-repeat;
            }
          }
        }
      }
    }
  }
  .blockOut{
    margin-left: 40px;
    width: 78px;
    height: 39px;
    overflow: hidden;
    position: relative;
    .block{
      position: absolute;
      width: 78px;
      height: 78px;
      border-left: 10px solid #0489F0;
      border-top: 10px solid #0489F0;
      border-right: 10px solid #D7ECFC;
      border-bottom: 10px solid #D7ECFC;
      border-radius: 50%;
      transform-origin: 50%;
      box-sizing: border-box;
    }
    .text{
      position: absolute;
      bottom: 0px;
      left: 0;
      right: 0;
      margin: 0;
      text-align: center;
      font-size: 14px;
      color: #1F86E4;
    }
  }
  .state1{
    background-color: #2BA13C;
  }
  .state2{
    background-color: #D80000;
  }
  .state3{
    background-color: #2E80F6;
  }
  // .state4{
  //   background-color: #E63939;
  // }
  // .state5{
  //   background-color: #EEEEEE;
  // }
  .wall1{
    width: 20px;
    height: 20px;
    margin-right: 12px;
    margin-top: -3px;
    display: inline-block;
    background-image: url('../assets/alert.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
  .wall2{
    width: 20px;
    height: 20px;
    margin-right: 12px;
    margin-top: -3px;
    display: inline-block;
    background-image: url('../assets/nofeed.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
  .wall3{
    margin-right: 12px;
    margin-top: -3px;
    width: 22px;
    height: 6px;
    background-image: url('../assets/no.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
  // .state6{
  //   i{
  //     width: 22px;
  //     height: 22px;
  //     background: url('../assets/red.png');
  //     background-repeat: no-repeat;
  //     background-size: 100% 100%;
  //     display: inline-block;
  //   }
  // }
  // .state7{
  //   i{
  //     width: 22px;
  //     height: 22px;
  //     background: url('../assets/green.png');
  //     background-repeat: no-repeat;
  //     background-size: 100% 100%;
  //   }
  // }
}
</style>
