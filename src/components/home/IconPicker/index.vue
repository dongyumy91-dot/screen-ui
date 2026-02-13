<template>
  <div :class="iconWarpCls">
    <div :class="`${iconWarpCls}__trigger`" @click="dialog.visible=true">
      <div :class="`${iconWarpCls}__icons`">
        <component :is="iconComponentName"/>
      </div>
    </div>

    <DialogSetting v-model="dialog.visible" @currentIcon="handleIconSelect" />
  </div>
</template>

<script>
import DialogSetting from './dialogSetting.vue'
export default {
  name: "IconPicker",
  emits:['update:modelValue','change'],
  components:{
    DialogSetting
  },
  props: {
    modelValue: {type: String, default:()=>''}
  },
  computed: {
    iconWarpCls: function() {
      return `${this.$CONFIG.APP_PREFIX}-icon-warp`;
    },
  },
  watch: {
    iconComponentName: function(name) {
      this.$emit('update:modelValue', name)
    },
    modelValue: function(name) {
      this.iconComponentName = name;
    }
  },
  data(){
    return {
      iconComponentName: '',
      dialog: {
        visible: false,
      },
      value: '',
    }
  },
  created() {
    this.iconComponentName = this.modelValue.length>0?this.modelValue:'ElIconLocationInformation';
  },
  mounted() {
    // this.handleIconSelect(this.iconComponentName)
    this.iconComponentName = this.modelValue.length>0?this.modelValue:'ElIconLocationInformation';
  },
  methods: {
    handleIconSelect: function(iconComponentName) {
      this.iconComponentName = iconComponentName;
      this.$emit('change', iconComponentName)
    }
  }
};
</script>

<style scoped lang="scss">
.#{$app_prefix}-icon-warp{
  display: flex;
  .#{$app_prefix}-icon-warp__trigger{
    display: inline-flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    height: 32px;
    width: 32px;
    padding: 4px;
    border: 1px solid var(--el-border-color);
    border-radius: calc(var(--el-border-radius-base) - 1px);
    background-color: var(--el-bg-color);
    font-size: 0;
    position: relative;
    cursor: pointer;
  }
  .#{$app_prefix}-icon-warp__icons{
    position: relative;
    display: flex;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    text-align: center;
    align-items: center;
    justify-content: center;

    svg{
      font-size: 20px;
    }
  }
}
</style>