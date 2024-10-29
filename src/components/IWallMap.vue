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
            <div :class="[item.class, !item.show?'wall-scr':'wall-tip']" ><i v-if="!item.show"></i></div>
            <span>{{ item.label }}</span>
          </div>
        </div>
        <div class="wall-right">
          <span v-for="(item, index) in searchList" :key="index" :class="item.value == active && 'active'" @click="handleClick(item)">{{ item.label }}</span>
        </div>
      </div>
      <!--表格-->
      <div class="wall-table">
        <table ref="table" class="idm-meeting-room-card-table" border="1" cellspacing="0">
          <tbody>
            <tr class="table-time-bar">
              <td ref="tableTdName" class="td-name" style="border-right-color: transparent;">
                <span></span>
              </td>
              <td ></td>
              <!-- <colgroup style="width:90px"></colgroup> -->
              <td class="td-time" :key="t" v-for="(td, t) in theadList">
                <span>{{ td.label }}</span>
              </td>
            </tr>
          </tbody>
        </table>
        <table ref="table" class="idm-meeting-room-card-table" border="1" cellspacing="0">
          <tbody>
            <template v-for="(item, index) in roomList">
              <th :colspan="theadList.length+2" :key="index">{{ item.title }}</th>
              <tr v-for="(room, r) in item.table" :key="r">
                <td class="td-room" colspan="2"><span>{{ room.label }}</span></td>
                <td v-for="(td, t) in theadList" :key="t" class="td-item" >
                  <span class="tdbg" :class="`state${room[td.i]}`" v-if="room[td.i] == 1">-</span>
                  <span class="tdbg" :class="`state${room[td.i]}`" v-else>
                    <i></i>
                  </span>
                </td>
              </tr>
            </template> 
          </tbody>
        </table>
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
          class: 'state2',
          label: '已反馈',
          show: true
        },
        {
          class: 'state3',
          label: '临期',
          show: true
        },
        {
          class: 'state4',
          label: '超期',
          show: true
        },
        {
          class: 'state5',
          label: '未到反馈期',
          show: true
        },
        {
          class: 'state7',
          label: '已办结'
        },
        {
          class: 'state6',
          label: '未办结'
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
      this.roomList = getWallRoom()
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
            this.roomList = data;
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
      margin-left: 20px;
    }
    .wall-li{
      display: flex;
      align-items: center;
    }
    .wall-tip{
      display: inline-block;
      width: 24px;
      height: 14px;
      margin-right: 10px;
      margin-bottom: 2px;
    }
    .wall-scr{
      margin-right: 10px;
      height: 15px;
      margin-bottom: 3px;
      i{
        width: 17px;
        height: 17px;
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
  .table-time-bar{
    background-color: #E9F0FF;
    td{
      color: #333333;
    }
  }
  .wall-table{
    .wall-header{
      width: 100%;
      display: flex;
    }
    .td{
      height: 50px;
      text-align: center;
      width: 90px;
      border: 1px solid #ddd;
      font-weight: 500;
      color: #333;
    }
    .idm-meeting-room-card-table{
      width: 100%;
      height: 100%;
      border-collapse: collapse;
      table-layout: fixed;
      th{
        // border-right: 1px solid transparent;
        width: 100%;
        border: 1px solid #ddd;
        background: none;
        border-top-color: transparent;
        // border: none;
        padding: 0;
        line-height: 55px;
        padding: 0 20px;
        font-size: 18px;
        font-weight: bold;
      }
      tbody{
        border-right: 1px solid transparent;
        tr:first-child td {
          // border-top-color: transparent;
        }
        tr:last-child td {
          // border-bottom-color: transparent;
        }
        tr td:first-child {
          // border-left-color: transparent;
          // border-right-color: transparent;
        }
        tr td:last-child {
          // border-right-color: transparent;
        }
      }
      td{
        height: 40px;
        text-align: center;
        width: 90px;
        border: 1px solid #ddd;
        font-weight: 500;
        color: #333;
      }
      .td-content td{
        height: 100px;
      }
      .td-noon img{
        width: 15px;
        height: 15px;
        margin-right: 5px;
      }
    }
  }
  .td-item{
    position: relative;
  }
  .tdbg{
    display: inline-block;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
  }
  .state2{
    background-color: #CCFF95;
  }
  .state3{
    background-color: #FFE371;
  }
  .state4{
    background-color: #E63939;
  }
  .state5{
    background-color: #EEEEEE;
  }
  .state6{
    i{
      width: 22px;
      height: 22px;
      background: url('../assets/red.png');
      background-repeat: no-repeat;
      background-size: 100% 100%;
      display: inline-block;
    }
  }
  .state7{
    i{
      width: 22px;
      height: 22px;
      background: url('../assets/green.png');
      background-repeat: no-repeat;
      background-size: 100% 100%;
    }
  }
}
</style>
