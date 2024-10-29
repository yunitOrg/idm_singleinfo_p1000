import Vue from 'vue'
import echarts from 'echarts'

// echarts(宽度)中自适应
Vue.prototype.getFontSize = (px) => {
  let width = document.body.clientWidth
  return px * width / 1920
}

// 高度的自适应
Vue.prototype.getFontSizeY = (px) => {
  let width = document.body.clientHeight
  return px * width / 1080
}

Vue.prototype.$echarts=echarts