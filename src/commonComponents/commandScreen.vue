<template>
  <div class="db">
    <div class="xiaBox">
        <div>
            <!-- <div class="dwBox" @click="isShowTc = true">
            <span>单位：</span>
            <div>黑龙江省运营营商环境</div>
        </div> -->
            <!-- <div class="back" @click="toBack()">
                <img src="../assets/db/back.png" alt="">
                返回
            </div> -->
        </div>
        <div>
            <xiala v-if="nianOption.option.length > 0" :xiaLaOption="nianOption" @getOptionItem="nianGetoption"></xiala>
            <xiala v-if="jdOption.option.length > 0" :xiaLaOption="jdOption" @getOptionItem="jdGetoption"></xiala>
            <xiala v-if="yueOption.option.length > 0" :xiaLaOption="yueOption" @getOptionItem="yueGetoption"></xiala>
        </div>
    </div>
    <div class="main">
            <div>
                <div>
                    <div class="titleBox">
                        <div>督办整体分析</div>
                    </div>
                    <div class="cardBox">
                        <div>
                            <div class="card-title">
                                <img src="../assets/db/title-icon.png" alt="">
                                <div>总体情况</div>
                            </div>
                            <div class="card">
                                <div>
                                    <div>今日督办件数</div>
                                    <div>27</div>
                                </div>
                                <div>
                                    <div>省全部督办件数</div>
                                    <div>521</div>
                                </div>
                                <div>
                                    <div>省督办件流转中文件数</div>
                                    <div>833</div>
                                </div>
                                <div>
                                    <div>省督办件已办结文件数</div>
                                    <div>251</div>
                                </div>
                                <div>
                                    <div>省督办件未流转文件数</div>
                                    <div>122</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="cardBox">
                        <div>
                            <div class="card-title">
                                <img src="../assets/db/title-icon.png" alt="">
                                <div>省市督办情况</div>
                            </div>
                            <div class="card">
                                <div>
                                    <div>省督办件下发各市数</div>
                                    <div>323</div>
                                </div>
                                <div>
                                    <div>省督办件下发各市已接…</div>
                                    <div>235</div>
                                </div>
                                <div>
                                    <div>省督办件下发各市未接…</div>
                                    <div>8</div>
                                </div>
                                <div>
                                    <div>省督办件下发各市补发数</div>
                                    <div>52</div>
                                </div>
                                <div>
                                    <div>省督办件下发各市回收数</div>
                                    <div>32</div>
                                </div>
                                <div>
                                    <div>省督办件下发各市催…</div>
                                    <div>53</div>
                                </div>
                                <div>
                                    <div>省督办件下发各市延期…</div>
                                    <div>35</div>
                                </div>
                                <div>
                                    <div>省督办件下发各市正常…</div>
                                    <div>64</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tabBox">
                        <div>
                            <img src="../assets/db/title-icon.png" alt="">
                            <div>部门办理情况</div>
                        </div>
                        <div>
                            <div class="tab">
                                <div class="active">全部</div>
                                <div>起草数</div>
                                <div>流转数</div>
                                <div>办结数</div>
                                <div>未接收数</div>
                                <div>已反馈</div>
                                <div>未反馈</div>
                                <div>催办</div>
                                <div>正常反馈</div>
                                <div>反馈周期</div>
                                <div>延期</div>
                            </div>
                        </div>
                    </div>
                    <div class="echartsBox" ref="line1">
                    </div>
                </div>
                <div>
                    <div class="titleBox">
                        <div>省市督办件协同分析</div>
                    </div>
                    <div class="cardBox">
                        <div>
                            <div class="card-title">
                                <img src="../assets/db/title-icon.png" alt="">
                                <div>总体情况</div>
                            </div>
                            <div class="card card3">
                                <div>
                                    <div>全部督办件数</div>
                                    <div>352</div>
                                </div>
                                <div>
                                    <div>今日督办件数</div>
                                    <div>324</div>
                                </div>
                                <div>
                                    <div>督办件流转中文件数</div>
                                    <div>125</div>
                                </div>
                                <div>
                                    <div>督办件已办结文件数</div>
                                    <div>65</div>
                                </div>
                                <div>
                                    <div>督办件未流转文件数</div>
                                    <div>53</div>
                                </div>
                                <div>
                                    <div>督办件下发各区数</div>
                                    <div>235</div>
                                </div>
                                <div>
                                    <div>督办件下发各区已接收数</div>
                                    <div>643</div>
                                </div>
                                <div>
                                    <div>督办件下发各区未接收数</div>
                                    <div>45</div>
                                </div>
                                <div>
                                    <div>督办件下发各区补发数</div>
                                    <div>35</div>
                                </div>
                                <div>
                                    <div>督办件下发各区催办数</div>
                                    <div>266</div>
                                </div>
                                <div>
                                    <div>各区督办件反馈省数</div>
                                    <div>423</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tabBox">
                        <div>
                            <img src="../assets/db/title-icon.png" alt="">
                            <div>市级办理情况</div>
                        </div>
                        <div>
                            <xiala v-if="sqdbakData.sqdbsOption.option.length > 0" :xiaLaOption="sqdbakData.sqdbsOption"></xiala>
                            <xiala v-if="sqdbakData.sqdbqOption.option.length > 0" :xiaLaOption="sqdbakData.sqdbqOption"></xiala>
                            <div class="tab">
                                <div class="active">全部</div>
                                <div>反馈数</div>
                                <div>未接收数</div>
                                <div>转办件</div>
                            </div>
                        </div>
                    </div>
                    <div class="echartsBox" ref="line2">
                    </div>
                </div>
            </div>
            <div>
                <div class="table-port2">
                    <div class="titleBox">
                        <div>部门办理具体情况</div>
                    </div>
                    <div class="tableBox-section">
                        <div class="tableBox">
                            <div class="header">
                                <div>序号</div>
                                <div>部门</div>
                                <div>专班数</div>
                            </div>
                            <div class="tbody">
                                <div v-for="(el,index) in zbData.tableData" :key="index">
                                    <div>{{index+1}}</div>
                                    <div>{{el.name}}</div>
                                    <div>{{el.num}}</div>
                                </div>
                                <div></div>
                            </div>
                        </div>
                        <div class="echartsBox" ref="szhu">

                        </div>
                    </div>
                </div>
                <div class="table-port1">
                    <div class="titleBox">
                        <div>市级督办分析</div>
                    </div>
                    <div class="cardBox">
                        <div>
                            <div class="card-title">
                                <img src="../assets/db/title-icon.png" alt="">
                                <div>总体情况</div>
                            </div>
                            <div class="card card2">
                                <div>
                                    <div>今日督办件数</div>
                                    <div>202</div>
                                </div>
                                <div>
                                    <div>省全部督办件数</div>
                                    <div>320</div>
                                </div>
                                <div>
                                    <div>省督办件流转中文件数</div>
                                    <div>530</div>
                                </div>
                                <div>
                                    <div>省督办件已办结文件数</div>
                                    <div>740</div>
                                </div>
                                <div>
                                    <div>省督办件未流转文件数</div>
                                    <div>280</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tabBox">
                        <div>
                            <img src="../assets/db/title-icon.png" alt="">
                            <div>省市交换当日情况</div>
                        </div>
                        <div>
                            <xiala v-if="dbjsJhData.sqdbsOption.option.length > 0" :xiaLaOption="dbjsJhData.sqdbsOption"></xiala>
                            <xiala v-if="dbjsJhData.sqdbqOption.option.length > 0" :xiaLaOption="dbjsJhData.sqdbqOption"></xiala>
                            <div class="tab">
                                <div class="active">全部</div>
                                <div>起草数</div>
                                <div>流转数</div>
                                <div>已办数</div>
                            </div>
                        </div>
                    </div>
                    <div class="echartsBox" ref="line3">

                    </div>
                </div>
                
            </div>
        </div>
  </div>
</template>

<script>
import {
    getMonthDate,
    getJdDate,
    getYearDate
} from '../utils/clData.js'
import * as echarts from 'echarts'
import xiala from './xiala.vue';
export default {
  components: {
        xiala,
    },
    data: () => ({
        //年份的下拉
        nianOption: {
            spanText: "年份",
            option: [
                {
                    name: '2024',
                    value: 2024
                },
                {
                    name: '2023',
                    value: 2023
                },
                {
                    name: '2022',
                    value: 2022
                }
            ]
        },
        //年份的选中
        nianActive: {},
        //季度的下拉
        jdOption: {
            spanText: "季度",
            option: [{
                name: "请选择"
            },
            {
                name: "第一季度",
                startdate: 1,
                enddate: 3
            },
            {
                name: '第二季度',
                startdate: 4,
                enddate: 6
            },
            {
                name: '第三季度',
                startdate: 7,
                enddate: 9
            },
            {
                name: '第四季度',
                startdate: 10,
                enddate: 12
            }
            ]
        },
        //季度的选中
        jdActive: {},
        //月份的下拉
        yueOption: {
            spanText: "月份",
            option: [{
                name: "请选择"
            }]
        },
        yueActive: {},
        //时间参数的开始结束时间
        timeDate: {},
        //省市督办下发交换分析的总体情况和省市督办情况数据
        dbxfData:{
            //总体情况
            info1:[
                {name:"今日督办件数",num:35},
                {name:"省全部督办件数",num:200}
            ],
            //省市督办情况
            info2:[
                {name:"省督办件下发各市数",num:35},
                {name:"省督办件下发各市已接…",num:200}
            ],
        },
        //省市督办下发交换分析的会议情况数据
        dbxfHyData:{
            tab:[{name:"全部",value:1},{name:"起草数",value:1}],
            //默认先返回全部数据后续根据传递的value值返回
            lineData:{
                unit:'',
                names: ["哈尔滨市", "大庆市", "齐齐哈尔市", "牡丹江市", "佳木斯市","黑河市","鸡西市","双鸭山市","伊春市","七台河市","鹤岗市","绥化市","大兴安岭地区"],
                legends: ["起草数", "流转数","办结数","未接收数","已反馈","未反馈","催办","正常反馈"],
                values: [
                    [300,500,385,496,511,708,654,332,252,678,654,675,500],
                    [708,654,332,252,678,500,600,300,400,456,300,500,385],
                    [500,600,300,400,456,500,385,496,511,708,654,252,678],
                    [564,352,465,654,675,300,300,400,456,500,385,496,511],
                    [385,496,511,708,654,332,252,678,396,511,708,654,252],
                    [500,600,300,400,456,500,385,496,511,708,654,252,678],
                    [564,352,465,654,675,300,300,400,456,500,385,496,511],
                    [708,654,332,252,678,500,600,300,400,456,300,500,385]
                ],
            }
        },
        //省区督办件协同交换分析总体情况的数据
        sqdbData:[
            {name:"全部督办件数",num:35},
            {name:"今日督办件数",num:200}
        ],
        //市区督办情况的数据
        sqdbakData:{
            //市区督办情况的省和区下拉
            sqdbsOption: {
                spanText: "",
                option: [
                    {
                        name: "南昌市",
                        value:0
                    },
                    {
                        name: '景德镇市',
                        value:1
                    },
                    {
                        name: '萍乡市',
                        value:2
                    }
                ]
            },
            sqdbqOption: {
                spanText: "",
                option: [{
                    name: "道外区",
                    value:0
                },
                {
                    name: '2',
                    value:1
                }
                ]
            },
            tab:[{name:"全部",value:1},{name:"反馈书",value:2}],
            //默认先返回全部数据后续根据传递的他爸的value值和省区返回
            lineData:{
                unit:'',
                names: ["哈尔滨市", "大庆市", "齐齐哈尔市", "牡丹江市", "佳木斯市","黑河市","鸡西市","双鸭山市","伊春市","七台河市","鹤岗市","绥化市","大兴安岭地区"],
                legends: ["起草数", "流转数","办结数","未接收数"],
                values: [
                    [300,500,385,496,511,708,654,332,252,678,654,675,500],
                    [708,654,332,252,678,500,600,300,400,456,300,500,385],
                    [500,600,300,400,456,500,385,496,511,708,654,252,678],
                    [564,352,465,654,675,300,300,400,456,500,385,496,511]
                ],
            }
        },
        //省市督办接收交换分析的总体数据
        dbjsData:[ 
            {name:"今日督办件数",num:35},
            {name:"省全部督办件数",num:200}
        ],
        //省市督办交换当日情况
        dbjsJhData:{
            //市区督办情况的省和区下拉
            sqdbsOption: {
                spanText: "",
                option: [
                    {
                        name: "南昌市",
                        value:0
                    },
                    {
                        name: '景德镇市',
                        value:1
                    },
                    {
                        name: '萍乡市',
                        value:2
                    }
                ]
            },
            sqdbqOption: {
                spanText: "",
                option: [{
                    name: "大数据中心",
                    value:0
                },
                {
                    name: '2',
                    value:1
                }
                ]
            },
            tab:[{name:"全部",value:1},{name:"起草数",value:2}],
            //默认先返回全部数据后续根据传递的他爸的value值和省区返回
            lineData:{
                unit:'',
                names: ["哈尔滨市", "大庆市", "齐齐哈尔市", "牡丹江市", "佳木斯市","黑河市","鸡西市","双鸭山市","伊春市","七台河市","鹤岗市","绥化市","大兴安岭地区"],
                legends: ["起草数","流转数","已办数"],
                values: [
                    [300,500,385,496,511,708,654,332,252,678,654,675,500],
                    [708,654,332,252,678,500,600,300,400,456,300,500,385],
                    [500,600,300,400,456,500,385,496,511,708,654,252,678]
                ],
            }
        },
        //各部门转办具体情况数据
        zbData:{
            tableData:[
                {
                    name:"省财政厅",
                    num:23
                },
                {
                    name:"省工信厅",
                    num:43
                },
                {
                    name:"省住建厅",
                    num:64
                },
                {
                    name:"省卫健委",
                    num:63
                },
                {
                    name:"省发改委",
                    num:43
                },
                {
                    name:"南昌铁路局",
                    num:25
                },
                {
                    name:"省科技厅",
                    num:64
                }
            ],
            //双柱图数据
            szhuData:{
                unit:'',
                names: ["省财政厅", "省工信厅", "省住建厅", "省发改委"],
                legends: ["2022年", "2023年"],
                values: [
                    [300, 500, 385, 496, 511],
                    [708, 654, 332, 252, 678],
                ],
            }
        }
    }),
    mounted() {
        this.nianActive = this.nianOption.option[0]
        this.timeDate = getYearDate(this.nianActive.value)
        this.lineCharts('line1')
        this.lineCharts('line2')
        this.lineCharts('line3')
        this.zhusCharts('szhu')
    },
    methods: {
        //年度的下来菜单
        nianGetoption(el) {
            console.log(el, '年份');
            this.nianActive = el
        },
        //季度下拉菜单的选择
        jdGetoption(el) {
            this.jdActive = el
            this.yueOption.option = []
            if (el.name != '请选择') {
                this.timeDate = getJdDate(this.nianActive.value, el.startdate, el.enddate)
                this.$nextTick(() => {
                    if (el.name == '第一季度') {
                        this.yueOption.option = [{
                            name: "请选择"
                        },
                        {
                            name: "1",
                            startdate: 1
                        },
                        {
                            name: "2",
                            startdate: 2
                        },
                        {
                            name: "3",
                            startdate: 3
                        }
                        ]
                    } else if (el.name == '第二季度') {
                        this.yueOption.option = [{
                            name: "请选择"
                        },
                        {
                            name: "4",
                            startdate: 4
                        },
                        {
                            name: 5,
                            startdate: 5
                        },
                        {
                            name: 6,
                            startdate: 6
                        }
                        ]
                    } else if (el.name == '第三季度') {
                        this.yueOption.option = [{
                            name: "请选择"
                        },
                        {
                            name: "7",
                            startdate: 7
                        },
                        {
                            name: "8",
                            startdate: 8
                        },
                        {
                            name: "9",
                            startdate: 9
                        }
                        ]
                    } else {
                        this.yueOption.option = [{
                            name: "请选择"
                        },
                        {
                            name: "10",
                            startdate: 10
                        },
                        {
                            name: "11",
                            startdate: 11
                        },
                        {
                            name: "12",
                            startdate: 12
                        }
                        ]
                    }
                })
            } else {
                this.$nextTick(() => {
                    this.yueOption.option = [{
                        name: '请选择'
                    }]
                })
                this.timeDate = getYearDate(this.nianActive.value)
            }
        },
        //月份的下拉菜单的选择
        yueGetoption(el) {
            console.log(el, "月份");
            this.yueActive = el
            if (el.name != '请选择') {
                let timeArr = getMonthDate(this.nianActive.value, el.startdate)
                this.timeDate = timeArr
            } else {
                if (this.yueActive.name == "请选择" && this.jdActive.name != "请选择") {
                    this.timeDate = getJdDate(this.nianActive.value, this.jdActive.startdate, this.jdActive.enddate)
                } else if (this.yueActive.name == "请选择" && this.jdActive.name == "请选择") {
                    this.timeDate = getYearDate(this.nianActive.value)
                }
            }
        },
        //折线图
        lineCharts(ref) {
            var myEchart = this.$echarts.init(this.$refs[ref]);
            let dataSource = {}
            if(ref == 'line1') {
                dataSource = {
                    unit:'',
                    names: ["省发改委", "省教育厅", "省财政厅", "省住建厅", "省科技厅","南昌铁路局","赣州市政府","九江市财政局","九江市卫健委","九江市政府","九江市卫健委"],
                    legends: ["起草数", "流转数","办结数","未接收数","已反馈","未反馈","催办","正常反馈"],
                    values: [
                        [10,20,30,300,50,600,70,0,30,20,10,90,30],
                        [20,40,60,50,30,20,30,20,20,30,40,50,10],
                        [10,30,210,0,0,500,0,0,0,30,0,0,0],
                        [20,0,0,30,0,70,600,0,0,40,0,0,0],
                        [30,0,50,0,0,60,0,0,50,0,230,0,0],
                        [40,0,760,0,590,50,0,30,0,0,210,0,0],
                        [50,0,60,340,450,40,0,0,40,0,12,0,0],
                        [60,320,0,50,0,70,0,0,0,0,16,0,0],
                    ],
                };
            } else if (ref == 'line2') {
                dataSource = {
                    unit:'',
                    names: ["南昌市", "景德镇市", "萍乡市", "九江市", "新余市","鹰潭市","赣州市","吉安市","宜春市","抚州市","上饶市"],
                    legends: ["起草数", "流转数","办结数","未接收数","已反馈","未反馈","催办","正常反馈"],
                    values: [
                        [0,210,120,300,50,600,70,0,30,20,10,90,30],
                        [230,40,60,50,30,20,30,20,20,30,40,50,10],
                        [120,30,210,230,0,500,0,0,0,30,0,0,0],
                        [220,0,0,30,320,70,600,0,0,40,0,0,0],
                        [310,0,50,0,330,60,0,0,50,0,230,0,0],
                        [450,0,760,0,590,50,0,30,0,0,210,0,0],
                        [540,0,60,340,450,40,230,0,40,0,12,0,0],
                        [610,320,0,50,0,70,0,0,0,0,16,0,0],
                    ],
                };
            } else {
                dataSource = {
                    unit:'',
                    names: ["南昌市", "景德镇市", "萍乡市", "九江市", "新余市","鹰潭市","赣州市","吉安市","宜春市","抚州市","上饶市"],
                    legends: ["起草数", "流转数","办结数","未接收数","已反馈","未反馈","催办","正常反馈"],
                    values: [
                        [10,20,30,300,50,20,70,0,30,20,10,90,30],
                        [20,40,60,50,30,20,30,20,20,30,40,50,10],
                        [120,30,210,0,0,500,0,0,0,30,0,0,0],
                        [230,0,0,30,0,70,200,0,0,40,0,0,0],
                        [30,0,50,0,0,60,0,0,50,0,230,0,0],
                        [40,0,60,0,590,50,0,30,0,0,210,0,0],
                        [50,0,60,340,450,40,0,0,40,0,12,0,0],
                        [60,20,0,50,0,70,0,0,0,0,16,0,0],
                    ],
                };
            }
            let  colors=["#25DBDB", "#FDE727","#E98E3C","#87A7FF","#40A9FF","#9254DE","#F759AB","#D9D9D9"]
            let series = []
            dataSource.legends.forEach((item, index) => {
                series.push({
                    name: item,
                    type: "line",
                    data: dataSource.values[index],
                    // stack: 'Total',
                    symbolSize: this.getFontSize(0),
                    itemStyle: {
                        color: colors[index],
                        borderWidth: this.getFontSize(0)
                    },
                    lineStyle: {
                        normal: {
                            color: colors[index], // 线条颜色
                            width:this.getFontSize(2)
                        }
                    },
                    label: {
                        show: false,
                        position: 'top',
                        textStyle: {
                            color: '#333',
                        }
                    },
                });
            });
            let option = {
                animationDuration: 2800, //加上这个
                animationEasing: "quadraticOut", //加上这个
                legend: {
                    selectedMode: false,
                    data: dataSource.legends,
                    textStyle: {
                        color: "#fff",
                        fontSize: this.getFontSize(14),
                        padding: [0, 0, 0, this.getFontSize(6)],
                    },
                    icon:"rect",
                    itemWidth: this.getFontSize(11),
                    itemHeight: this.getFontSize(2),
                    top: this.getFontSize(10),
                },
                tooltip: {
                    trigger: 'axis',
                    textStyle: {
                        fontSize: this.getFontSize(14),
                        colors: '#000',
                    }
                },
                grid: {
                    left: '0%',
                    right: '0%',
                    bottom: '0%',
                    top: '20%',
                    containLabel: true
                },
                xAxis: {
                    type: 'category',
                    data: dataSource.names,
                    axisTick: {
                        show: false
                    },
                    axisLine: { // 横轴
                        show: true,
                        lineStyle: {
                            color: '#23A4FF', // 颜色
                            width:this.getFontSize(1)
                        }
                    },
                    axisLabel: {
                        interval: 0,
                        rotate: 15, //倾斜的程度
                        margin: this.getFontSize(15),
                        padding: [this.getFontSize(0), this.getFontSizeY(-10), 0, 0], //文字左右定位
                        textStyle: {
                            color: "#FFFFFF",
                            fontSize: this.getFontSize(14),
                            fontWeight: 400
                        },
                    }
                },
                yAxis: {
                    type: 'value',
                    splitNumber: 4,
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: "#FFFFFF",
                            fontSize: this.getFontSize(14),
                            fontWeight: 400
                        },
                    },
                    axisTick: {
                        show: false
                    },
                    axisLine: { // 横轴
                        show: false,
                        lineStyle: {
                            color: '#20618f' // 颜色
                        }
                    },
                    splitLine: {
                        show: false
                    },
                    splitArea: {
                        show: true,
                        areaStyle: {
                            color: ["rgba(250,250,250,0.0)", " rgba(35,164,255,0.09)"]
                        }
                    }
                },

                series: series
            };
            myEchart.clear();
            myEchart.setOption(option);
            window.addEventListener('resize', () => {
                myEchart.resize()
            })
        },
        //双柱图
        zhusCharts(ref) {
            var myEchart = this.$echarts.init(this.$refs[ref]);
            let dataSource = {
                unit:'',
                names: ["省财政厅", "省工信厅", "省住建厅", "省发改委"],
                legends: ["2022年", "2023年"],
                values: [
                    [20, 40, 30, 100, 30],
                    [80, 60, 10, 20, 30],
                ],
            };
            let colors = [
                ['rgba(0,163,255,0.60)', ' #00EEFF'],
                ['#CFBB58', '#FFED96']
            ]
            let series = []
            dataSource.legends.forEach((item, index) => {
                series.push({
                    name: item,
                    type: 'bar',
                    barWidth: this.getFontSize(22),
                    label: {
                        show: false,
                        position: 'top', // 顶部显示
                        formatter: '{c}', // 显示数据值
                        textStyle: { //数值样式
                            color: '#FFFFFF', //字体颜色
                            fontSize: this.getFontSize(16) //字体大小
                        }
                    },
                    itemStyle: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: colors[index][0]
                            },
                            // { offset: 0.5, color: '#188df0' },
                            {
                                offset: 1,
                                color:colors[index][1] 
                            }
                        ])
                    },
                    data: dataSource.values[index],
                    
                });
            });
            let option = {
                animationDuration: 2800, //加上这个
                animationEasing: "quadraticOut", //加上这个
                legend: {
                    selectedMode: false,
                    data: dataSource.legends,
                    textStyle: {
                        color: "#fff",
                        fontSize: this.getFontSize(14),
                        padding: [0, 0, 0, this.getFontSize(6)],
                    },
                    icon:"rect",
                    itemWidth: this.getFontSize(11),
                    itemHeight: this.getFontSize(11),
                    itemGap: this.getFontSize(30),
                    right: 'center',
                    top: this.getFontSize(10),
                },
                tooltip: {
                    trigger: 'axis',
                    confine: 'true',//限制在显示框里
                    axisPointer: {
                        type: 'shadow'
                    },
                    textStyle:{
                        fontSize:this.getFontSize(14),
                        colors:'#000'
                    }
                },
                grid: {
                    left: '0%',
                    right: '0%',
                    bottom: '3%',
                    top: '17%',
                    containLabel: true
                },
                xAxis: {
                    type: 'category',
                    data: dataSource.names,
                    axisTick: {
                        show: false
                    },
                    axisLine: { // 横轴
                        show: true,
                        lineStyle: {
                            color: '#23A4FF', // 颜色
                            width:this.getFontSize(1)
                        }
                    },
                    axisLabel: {
                        textStyle: {
                            color: "#FFFFFF",
                            fontSize: this.getFontSize(14),
                            fontWeight: 400
                        },
                    },
                },
                yAxis: {
                    type: 'value',
                    splitNumber: 7,
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: "#FFFFFF",
                            fontSize: this.getFontSize(14),
                            fontWeight: 400
                        },
                    },
                    axisTick: {
                        show: false
                    },
                    axisLine: { // 横轴
                        show: false,
                        lineStyle: {
                            color: '#20618f' // 颜色
                        }
                    },
                    splitLine: {
                        show: false
                    },
                    splitArea: {
                        show: true,
                        areaStyle: {
                            color: ["rgba(250,250,250,0.0)", " rgba(35,164,255,0.09)"]
                        }
                    }
                },

                series: series
            };
            myEchart.clear();
            myEchart.setOption(option);
            window.addEventListener('resize', () => {
                myEchart.resize()
            })
        },
        //返回上一个路由
        toBack() {
            this.$router.go(-1)
        },
    }
}
</script>

<style lang="scss" scoped>
@import '../style/util.scss';

.db {
    .xiaBox {
        width: 100%;
        height: 36px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: -30px;

        &>div:nth-child(1) {
            display: flex;

            .back {
                width: 87px;
                height: 36px;
                background: rgba(14, 229, 243, 0.10);
                border: 1px solid rgba(14, 229, 243, 1);
                box-shadow: inset 0 0 10px 4px rgba(14, 229, 243, 0.35);
                border-radius: 4px;
                font-family: '';
                font-size: 16px;
                color: #FFFFFF;
                letter-spacing: 0;
                text-align: center;
                font-weight: 600;
                display: flex;
                align-items: center;
                justify-content: center;
                margin-left: 40px;
                cursor: pointer;

                img {
                    width: 14px;
                    height: 14px;
                    margin-right: 10px;
                }
            }
        }

        &>div:nth-child(2) {
            margin-right: 42px;
            display: flex;
            align-items: center;

            &>div {
                margin-left: 40px;
            }

        }
    }

    .main {
        width: 1860px;
        height: 948px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        margin-top: 22px;

        .titleBox {
            width: 100%;
            height: 41px;
            display: flex;
            align-items: center;
            justify-content: space-between;

            &>div:nth-child(1) {
                font-family: AlimamaShuHeiTi-Bold;
                font-size: 18px;
                color: #E3F8FF;
                text-shadow: 0 2px 8px rgba(227, 248, 255, 0.40);
                font-weight: 700;
                margin-left: 44px;
                margin-top: 2px;
            }
        }

        .cardBox {
            width: 97%;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            margin-top: 12px;

            &>div:nth-child(1) {
                .card-title {
                    display: flex;
                    align-items: center;

                    img {
                        width: 18px;
                        height: 19px;
                    }

                    font-family: 'pfm';
                    font-size: 16px;
                    color: #FFFFFF;
                    letter-spacing: 0;
                    font-weight: 500;
                }

                .card {
                    width: 100%;
                    height: 130px;
                    display: flex; //把盒子在一行显示
                    overflow-x: hidden; //超出隐藏
                    flex-wrap: wrap; //超出自动换行
                    overflow-y: auto;

                    &>div {
                        width: 166px;
                        height: 59px;
                        background: url(../assets/db/card1.png) no-repeat;
                        background-size: 100% 100%;
                        margin: 3px;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;

                        &>div:nth-child(1) {
                            font-family: 'pf';
                            font-size: 14px;
                            color: #FFFFFF;
                            text-align: center;
                            text-shadow: 0 0 5px rgba(30, 198, 255, 0.80);
                            font-weight: 400;
                            // background-image: -webkit-linear-gradient(top, #ffffff, #0DCAF5);
                            // -webkit-background-clip: text;
                            // -webkit-text-fill-color: transparent;
                        }

                        &>div:nth-child(2) {
                            font-family: 'pfm';
                            font-size: 16px;
                            color: #008BFF;
                            text-align: center;
                            font-weight: 500;
                            background-image: -webkit-linear-gradient(top, #ffffff, #0DCAF5);
                            -webkit-background-clip: text;
                            -webkit-text-fill-color: transparent;
                        }
                    }
                }

                .card::-webkit-scrollbar {
                    /*滚动条整体样式*/
                    width: 0;
                    /*高宽分别对应横竖滚动条的尺寸*/
                }

                .card2 {
                    &>div {
                        background: url(../assets/db/card3.png) no-repeat;
                        background-size: 100% 100%;

                        &>div:nth-child(1) {
                            text-shadow: 0 0 5px rgba(255, 202, 30, 0.80);
                            // background-image: -webkit-linear-gradient(top, #ffffff, #0DCAF5);
                            // -webkit-background-clip: text;
                            // -webkit-text-fill-color: transparent;
                        }

                        &>div:nth-child(2) {
                            color: #F5E50D;
                            background-image: -webkit-linear-gradient(top, #ffffff, #F5E50D);

                        }
                    }
                }
                .card3 {
                    &>div {
                        background: url(../assets/db/card2.png) no-repeat;
                        background-size: 100% 100%;

                        &>div:nth-child(1) {
                            text-shadow: 0 0 5px rgba(30,198,255,0.80);
                            // background-image: -webkit-linear-gradient(top, #ffffff, #0DCAF5);
                            // -webkit-background-clip: text;
                            // -webkit-text-fill-color: transparent;
                        }

                        &>div:nth-child(2) {
                            color:  #008BFF;
                            background-image: -webkit-linear-gradient(top, #ffffff, #0DF5DD);

                        }
                    }
                }

            }
        }

        .tabBox {
            width: 97%;
            margin: 0 auto;
            height: 26px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-top: 16px;

            &>div:nth-child(1) {
                display: flex;
                align-items: center;
                font-family: 'pfm';
                font-size: 16px;
                color: #FFFFFF;
                letter-spacing: 0;
                font-weight: 500;

                img {
                    width: 18px;
                    height: 19px;
                }
            }

            &>div:nth-child(2) {
                display: flex;
                align-items: center;

                .tab {
                    height: 26px;
                    background: rgba(14, 229, 243, 0.10);
                    border: 1px solid rgba(14, 229, 243, 1);
                    border-radius: 4px;
                    display: flex;

                    &>div {
                        min-width: vw(60);
                        font-family: 'pf';
                        font-size: vw(14);
                        color: #A5DFFB;
                        letter-spacing: 0;
                        font-weight: 400;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        cursor: pointer;
                    }

                    .active {
                        background: rgba(14, 229, 243, 0.10);
                        box-shadow: inset 0px 0px 10px 4px rgba(14, 229, 243, 0.35);
                        color: #ffffff;
                    }

                    &>div:not(:first-child) {
                        border-left: 1px solid rgba(14, 229, 243, 1);
                    }
                }

                >>>.selectBox {
                    height: 26px;
                    font-size: 14px;
                    z-index: 99999;
                    margin-right: 10px;

                    .select {
                        width: 92px;
                    }

                    .option {
                        width: 92px;
                        top: 30px;
                        left: 10px;
                    }
                }
            }
        }

        &>div {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        &>div:nth-child(1) {
            &>div {
                width: 918px;
                height: 564px;
                background: url(../assets/db/bg1.png) no-repeat;
                background-size: 100% 100%;
                .echartsBox{
                    width: 97%;
                    height: 215px;
                    margin: 0 auto;
                }
            }

            &>div:nth-child(1) {
                .cardBox {
                    &>div:nth-child(1) {
                        .card {
                            height: 65px;
                        }
                    }
                }

                &>div:nth-child(3) {
                    &>div:nth-child(1) {
                        .card {
                            height: 130px;
                        }
                    }
                }
                
            }
            &>div:nth-child(2){
                .cardBox {
                    &>div:nth-child(1) {
                        .card {
                            height: 200px;
                        }
                    }
                }
                .tabBox{
                    margin-top: 45px;
                }
            }
        }

        &>div:nth-child(2) {
            &>div {
                width: 918px;
                height: 366px;
                background: url(../assets/db/bg2.png) no-repeat;
                background-size: 100% 100%;
            }
            &>div:nth-child(2) {
                .cardBox {
                    &>div:nth-child(1) {
                        .card {
                            height: 65px;
                        }
                    }
                }
                .echartsBox{
                    width: 97%;
                    height: 180px;
                    margin: 0 auto;
                }
            }
            &>div:nth-child(1) {
                .tableBox-section{
                    width: 97%;
                    height: calc(100% - 41px);
                    margin:0 auto;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    .tableBox{
                        display: flex;
                        flex-direction: column;
                        width: 314px;
                        height: 300px;
                        .header{
                            height: 32px;
                            font-family: 'pfm';
                            font-size: 14px;
                            color: #FFFFFF;
                            text-align: center;
                            font-weight: 500;
                            display: flex;
                            align-items: center;
                            &>div:nth-child(1){
                                width: 80px;
                            }
                            &>div:nth-child(2){
                                width: 130px;
                            }
                            &>div:nth-child(3){
                                width: 100px;
                            }
                        }
                        .tbody{
                            height: 270px;
                            overflow-x: hidden; //超出隐藏
                            flex-wrap: wrap; //超出自动换行
                            overflow-y: auto;
                            &>div{
                                height: 32px;
                                font-family: 'pf';
                                font-size: 14px;
                                color: #FFFFFF;
                                text-align: center;
                                background-image: linear-gradient(78deg, rgba(54,217,230,0.00) 0%, rgba(25,177,201,0.42) 49%, rgba(25,177,201,0.00) 100%);
                                font-weight: 400;
                                display: flex;
                                align-items: center;
                                &>div:nth-child(1){
                                    width: 75px;
                                }
                                &>div:nth-child(2){
                                    width: 140px;
                                }
                                &>div:nth-child(3){
                                    width: 100px;
                                }
                            }
                            &>div:not(:first-child){
                                margin-top: 7px;
                            }
                        }
                        .tbody::-webkit-scrollbar {
                            /*滚动条整体样式*/
                            width: 0;
                            /*高宽分别对应横竖滚动条的尺寸*/
                        }
                    }
                    .echartsBox{
                        width: 550px;
                        height: 98%;
                    }
                }
            }
        }
    }
}
</style>
