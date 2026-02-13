<template>
  <el-dialog
    v-model="visible"
    title="图标选择器"
    width="50%"
    class="dialog-warp"
  >
    <el-alert description="双击选择图标" type="warning" :closable="false" style="line-height: normal;font-size:13px"/>

    <el-input
      v-model="searchIconValue"
      placeholder="可通过 IconKey 模糊搜索..."
      prefix-icon="ElIconSearch"
      style="margin-top: 10px;margin-bottom: 15px;"
      @input="handleIconInputChange"
    />

    <el-tabs v-model="tabs.active">
      <el-tab-pane name="el">
        <template #label>
          <span class="tabs-label">
            <span>Element</span>
            <el-tag size="small" type="info">{{ Object.values(icons.elIcons).length }}</el-tag>
          </span>
        </template>

        <div class="tabs-main-warp">
          <el-tooltip
            effect="dark"
            placement="top"
            :content="_getComponentName(iconName)"
            v-for="(iconName, key) in icons.elIcons" :key="key"
          >
            <el-avatar class="icons-item"  :icon="_getComponentName(iconName)" :size="iconsSize"
                       shape="square" fit="cover" @dblclick="handleIconSelect(iconName)"/>
          </el-tooltip>
        </div>
      </el-tab-pane>

      <el-tab-pane name="custom">
        <template #label>
          <span class="tabs-label">
            <span>{{ $TOOLS.upperFirst($CONFIG.APP_PREFIX) }}</span>
            <el-tag size="small" type="info">{{ Object.values(icons.customIcons).length }}</el-tag>
          </span>
        </template>

        <div class="tabs-main-warp">
          <el-tooltip
            effect="dark"
            placement="top"
            :content="_getComponentName(iconName)"
            v-for="(iconName, key) in icons.customIcons" :key="key"
          >
            <el-avatar class="icons-item"  :icon="_getComponentName(iconName)" :size="iconsSize"
                       shape="square" fit="cover" @dblclick="handleIconSelect(iconName)"/>
          </el-tooltip>

        </div>
      </el-tab-pane>
    </el-tabs>
  </el-dialog>
</template>

<script>
import * as elIcons from "@element-plus/icons-vue";
import * as customIcons from "@/assets/icons";

export default {
  name: "dialogSetting",
  emits: ['update:modelValue','currentIcon'],
  props: {
    modelValue: { type: Boolean, default: () => false },
  },
  watch: {
    modelValue: function(visible) {
      this.visible = visible;
    },
    visible: function(visible) {
      this.$emit("update:modelValue", visible);
    },
  },
  data() {
    return {
      icons: {
        elIcons: [],
        customIcons: [],
      },

      visible: false,
      iconsSize: 55,
      searchIconValue: '',
      tabs: {
        active: "el",
      },

    };
  },
  methods: {
    handleIconInputChange: function(search)
    {

      if (!search || search.length<=0){
        this.icons = this.$options.data.call(this).icons;
        return;
      }

      let SearchFilterFun = function(data){
        let _list = {};
        for (let iconName in data){
          if (iconName.indexOf(search)>0){
            _list[iconName] = data[iconName];
          }
        }
        return _list;
      };

      this.icons.elIcons = SearchFilterFun(this.icons.elIcons);
      this.icons.customIcons = SearchFilterFun(this.icons.customIcons);
    },
    /**
     * 图标双击回调事件
     *
     * @param {Object} item
     *
     * @return {void}
     */
    handleIconSelect: function(item) {
      let _componentName = this._getComponentName(item);

      this.$emit('currentIcon', _componentName);
      this.visible = false;
    },

    _getComponentName(item)
    {
      let _componentName;
      if (!!item['name']){
        _componentName = item.name;
      }else{
        _componentName = item.__file.substr(item.__file.lastIndexOf('/')+1);
        _componentName = _componentName.substr(0, _componentName.lastIndexOf('.'));
      }

      if (this.tabs.active === 'el'){
        _componentName = `ElIcon${_componentName}`
      }else{
        _componentName = `${this.$TOOLS.upperFirst(this.$CONFIG.APP_PREFIX)}Icon${_componentName}`
      }
      return _componentName;
    },

    importIcon: async function(list, varName)
    {
      this.icons[varName] = JSON.parse(JSON.stringify(list))
    },
  },
  created() {
    this.importIcon(elIcons, 'elIcons');
    this.importIcon(customIcons, 'customIcons');
  }
};
</script>

<style lang="scss" scoped>
:deep(.el-alert){
  line-height: normal;
}
.tabs-label{
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 0 10px;
}
.tabs-main-warp {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  max-height: 300px;
  overflow-y: auto;
}

.icons-item{
  cursor: pointer;
  border: 1px solid transparent;

  &:hover{
    color: var(--el-color-primary);
    border-color: var(--el-color-primary);
    background: var(--el-color-white);
  }
}
</style>