<template>
    <el-aside class="layout-aside" 
      :width="_width">
      <div class="aside-warp">
        <div class="aside-scroll">
          <el-menu class="layout-menu" router 
            :default-active="_menuActive" 
            :unique-opened="$CONFIG.STYLE_OPTION.LAYOUT_STYLES.menu.unique_opened"
            :collapse="_menuCollapse">
            <NavMenu :navMenus="menu" />
          </el-menu>
        </div>
        <div class="aside-bottom">
          <el-button :icon="_menuCollapse ? 'ElIconExpand' :'ElIconFold'" link 
            style="width:100%;height:40px" 
            @click="_menuCollapse = !_menuCollapse" />
        </div>
      </div>
    </el-aside>
</template>

<script>
import NavMenu from '@/layout/components/navMenu.vue'
export default {
    name: 'LayoutAside',
    components: {
      NavMenu
    },
    props: {
      width: {type: String, default:()=>'200px'},
      menu: {type: Array, default:()=>[]},
      menuActive: {type: String, default:()=>''},
      menuCollapse: {type: Boolean, default:()=>true},
    },
    watch: {
      width: function(width)
      {
        this._width = width;
      },
      menuActive: function (active)
      {
        this._menuActive = active;
      },
      menuCollapse: function(isCollapse)
      {
        this._menuCollapse = isCollapse;
        if(isCollapse){
          this._width = '48px';
        }else{
          this._width = this.width;
        }
      },
      _menuCollapse: function(isCollapse){
        this.$emit('update:menuCollapse', isCollapse);
        if(isCollapse){
          this._width = '48px';
        }else{
          this._width = this.width;
        }
      },
    },
    data(){
        return {
          _width: '48px',
          _menuCollapse: true,
          _menuActive: '',
        }
    },
    mounted(){
      this._width = this.width;
      this._menuActive = this.menuActive;
      this._menuCollapse = this.menuCollapse;
      if (this.menuCollapse){
        this._width = '48px';
      }
    }
}
</script>

<style lang="scss" scoped>
:deep(.el-menu-item),
:deep(.el-menu-tooltip__trigger),
:deep(.el-sub-menu__title),
:deep(.el-menu--collapse){
  // --el-menu-level-padding: 10px;
  --el-menu-icon-width: 28px;
  --el-menu-base-level-padding: 10px;
}
:deep(.el-sub-menu__title) {
  padding-right: var(--el-menu-base-level-padding);
}
:deep(.el-menu--vertical):not(.el-menu--collapse):not(.el-menu--popup-container) .el-menu-item{
  --el-menu-sub-item-height: calc(var(--el-menu-item-height));
}
:deep(.el-menu-item) {
  &:hover{
    color: var(--el-menu-active-color);
    background-color: transparent;
  }
}
:deep(.el-menu--collapse) {
  width: calc(var(--el-menu-icon-width) + var(--el-menu-base-level-padding) * 2 + 7px);

  .el-sub-menu.is-active{
    .el-sub-menu__title{
      color: var(--el-menu-active-color);
    }
  }
}
:deep(.el-menu-item.is-active){
  background-color: var(--el-menu-hover-bg-color);
  &:hover {
    background-color: var(--el-menu-hover-bg-color);
  }
}


.layout-aside{
    background-color: var(--el-bg-color);
    box-shadow: var(--el-box-shadow);
    transition: all .2s;
    z-index: 1;
}

.aside-bottom{
  position: relative;
  border-top: 1px solid var(--el-border-color);
  background-color: var(--el-bg-color);
  z-index: 1;
}

.aside-warp{
  display: flex;
  flex-direction: column;
  height: 100%;
}

.aside-scroll{
  flex: 1;
  height: calc(100% - 41px);
  overflow: hidden;
}

.layout-menu{
  height: 100%;
  border-right: 0;
  overflow-y: scroll;
}
</style>
