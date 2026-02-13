<template>
  <div class="topbar-warp" v-if="_isShow">
    <el-breadcrumb separator-icon="el-icon-arrow-right" class="hidden-sm-and-down">
      <transition-group name="breadcrumb" mode="out-in">
        <template v-for="item in breadList" :key="item.title">
          <el-breadcrumb-item v-if="item.path != '/' && !item.meta.hiddenBreadcrumb" :key="item.meta.title">
            <el-icon class="icon" v-if="item.meta.icon">
              <component :is="item.meta.icon" />
            </el-icon>
            <span
              class="meta-title"
              :class="{ clickable: !!item.meta.titleLinkTo }"
              @click="handleClick(item.meta.titleLinkTo)"
            >
              {{ item.meta.title }}
            </span>
          </el-breadcrumb-item>
        </template>
      </transition-group>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  props: {
    isShow: { type: Boolean, default: () => true },
    height: { type: String, default: () => "50px" },
  },
  watch: {
    $route() {
      this.getBreadcrumb();
    },
    isShow: function (isShow) {
      this._isShow = isShow;
    },
    _isShow: function (isShow) {
      this.$emit("update:isShow", isShow);
    },
  },
  data() {
    return {
      _isShow: false,
      _height: "50px",
      breadList: [],
      _cursor: "",
    };
  },
  created() {
    this.getBreadcrumb();
  },
  mounted() {
    this._isShow = this.isShow;
    this._height = this.height;
  },
  methods: {
    getBreadcrumb() {
      let matched = this.$route.meta.breadcrumb;
      this.breadList = matched;
    },
    handleClick(link) {
      if (!link) return;
      this.$router.push(link);
    },
  },
};
</script>

<style lang="scss" scoped>
.topbar-warp {
  display: flex;
  align-items: center;
  height: v-bind(_height);
  padding: 0 20px;
  background-color: "transparent";
  justify-content: center;
  background: url("@/assets/common/title-bg.png") no-repeat center center;
  background-size: 100% auto;
  letter-spacing: 8px; // 字间距

  :deep(.el-breadcrumb) {
    .el-breadcrumb__inner {
      display: flex;
      gap: 5px;
    }
  }

  .meta-title {
    color: var(--white);
    font-family: "PangMenZhengDao";
    font-size: 23px; // 字号
    font-weight: 600;
  }

  .meta-title.clickable {
    cursor: pointer;
  }
}
</style>
