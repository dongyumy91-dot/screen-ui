<template>
  <template v-for="navMenu in navMenus" :key="navMenu">
    <el-menu-item v-if="!hasChildren(navMenu)" :index="navMenu.path">
      <el-link
        v-if="navMenu.meta && navMenu.meta.type == 'link'"
        :underline="false"
        class="menu-link"
        target="_blank"
        :href="navMenu.path"
        @click.stop="() => {}"
      />
      <el-icon v-if="navMenu.meta && navMenu.meta.icon">
        <component :is="navMenu.meta.icon || 'el-icon-menu'" />
      </el-icon>
      <template #title>
        <span>{{ navMenu.meta.title }}</span>
        <el-tag
          v-if="navMenu.meta.tag"
          class="menu-tag"
          size="small"
          type="danger"
          >{{ navMenu.meta.tag }}</el-tag
        >
      </template>
    </el-menu-item>
    <el-sub-menu v-else :index="navMenu.path">
      <template #title>
        <el-icon v-if="navMenu.meta && navMenu.meta.icon">
          <component :is="navMenu.meta.icon || 'el-icon-menu'" />
        </el-icon>
        <span>{{ navMenu.meta.title }}</span>
        <el-tag
          v-if="navMenu.meta.tag"
          class="menu-tag"
          size="small"
          type="danger"
          >{{ navMenu.meta.tag }}</el-tag
        >
      </template>
      <NavMenu :navMenus="navMenu.children"></NavMenu>
    </el-sub-menu>
  </template>
</template>

<script>
export default {
  name: "NavMenu",
  props: ["navMenus"],
  data() {
    return {};
  },
  methods: {
    hasChildren(item) {
      return item.children && !item.children.every((item) => item.meta.hidden);
    },
  },
};
</script>

<style lang="scss" scoped>
:deep(.el-menu) {
  .menu-tag {
    position: absolute;
    height: 18px;
    line-height: 18px;
    background: var(--el-color-danger);
    font-size: 12px;
    color: #fff;
    right: 20px;
    border-radius: 18px;
    padding: 0 6px;
  }
}

:deep(.menu-link) {
  color: inherit;
  text-decoration: none;
  display: block;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
</style>
