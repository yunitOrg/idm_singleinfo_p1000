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
    <div class="icommandscreen">
      <div class="top"></div>
      <commandScreen></commandScreen>
    </div>
  </div>
</template>

<script>
import commandScreen from '../commonComponents/commandScreen.vue'
export default {
  name: 'ICommandScreen',
  components: {
    commandScreen
  },
  data() {
    return {
      moduleObject: {},
      propData: this.$root.propData.compositeAttr || {},
    }
  },
  mounted() {
    this.moduleObject = this.$root.moduleObject;
    this.init();
  },
  methods: {
    propDataWatchHandle(propData) {
      this.propData = propData.compositeAttr || {};
      this.init()
    },
    init() {
    }
  }
}
</script>

<style lang="scss" scoped>
.top{
 background-image: url('../assets/top3.png');
 background-repeat: no-repeat;
 background-size: "100% 100%";
}
@import '../style/ICommandScreen.scss';
</style>
