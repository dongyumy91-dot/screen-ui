<template>
  <div class="adaptive-rounded-rect">
    <!-- 渐变边框层 -->
    <div class="gradient-border"></div>

    <!-- 内容卡片 -->
    <el-card class="content-card" shadow="hover">
      <template #header v-if="showHeader">
        <div class="card-header">
          <span>{{ title }}</span>
          <el-tag size="small" type="info">透明度 {{ opacity * 100 }}%</el-tag>
        </div>
      </template>
      <div class="card-content">
        <slot>
          <p>背景色: RGB(3, 19, 48) 透明度 {{ opacity }}</p>
          <p>边框渐变: RGB(18, 55, 134)</p>
          <p>宽度: 100% | 高度: 由内容撑开</p>
        </slot>
      </div>
    </el-card>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: "自适应圆角矩形",
  },
  opacity: {
    type: Number,
    default: 0.2,
  },
  showHeader: {
    type: Boolean,
    default: true,
  },
  borderWidth: {
    type: Number,
    default: 1,
  },
});
</script>

<style scoped>
.adaptive-rounded-rect {
  position: relative;
  width: 100%;
  border-radius: 16px;
  background-color: v-bind("`rgba(3, 19, 48, ${opacity})`");
  box-sizing: border-box;
  isolation: isolate; /* 创建新的层叠上下文 */
}

/* 渐变边框层 */
.gradient-border {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 16px;
  padding: v-bind('borderWidth + "px"');
  background: linear-gradient(135deg, rgb(18, 55, 134) 0%, rgb(64, 128, 255) 50%, rgb(18, 55, 134) 100%);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none; /* 确保边框不阻挡交互 */
  z-index: 1;
}

/* 内容卡片 */
.content-card {
  position: relative;
  width: 100%;
  background-color: transparent;
  border: none;
  box-shadow: none;
  z-index: 2;
}

.card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 8px;
  font-weight: 500;
  color: #fff;
}

.card-content {
  padding: 8px 16px 16px 16px;
  color: #e0e0e0;
}

:deep(.el-card__body) {
  background-color: transparent;
}

/* 确保卡片头部背景透明 */
:deep(.el-card__header) {
  background-color: transparent;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}
</style>