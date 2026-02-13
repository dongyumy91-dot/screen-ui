<template>
  <el-main class="page-ct" @click="goPrimary">
    <!-- 四大市场支撑 -->
    <div class="section four-market">
      <RectCard :background="titleBg" class="section-title">
        <div class="title-wrap">
          <div class="title-prefix">
            <img class="prefix-base" :src="titlePrefixBase" />
            <img class="prefix-center" :src="titlePrefixCenter" />
          </div>
          <span class="title-text">四大市场支撑</span>
        </div>
      </RectCard>

      <div class="card-row">
        <!-- <RectCard v-for="(bg, i) in marketBgs" :key="i" :background="effect1Bg" height="100%" /> -->
        <CommonRect />
      </div>
    </div>

    <!-- 融合调度支撑 -->
    <div class="section">
      <RectCard :background="titleBg" class="section-title">
        <div class="title-wrap">
          <div class="title-prefix">
            <img class="prefix-base" :src="titlePrefixBase" />
            <img class="prefix-center" :src="titlePrefixCenter" />
          </div>
          <span class="title-text">融合调度支撑</span>
        </div>
      </RectCard>

      <div class="card-row">
        <RectCard :background="rectBg1" />
        <RectCard :background="rectBg1" />
      </div>
    </div>

    <!-- 融合包保支撑 -->
    <div class="section">
      <RectCard :background="titleBg" class="section-title">
        <div class="title-wrap">
          <div class="title-prefix">
            <img class="prefix-base" :src="titlePrefixBase" />
            <img class="prefix-center" :src="titlePrefixCenter" />
          </div>
          <span class="title-text">融合包保支撑</span>
        </div>
      </RectCard>

      <div class="card-row">
        <RectCard :background="rectBg1" />
        <RectCard :background="rectBg1" />
      </div>
    </div>

    <!-- 融合一点支撑 -->
    <div class="section">
      <RectCard :background="titleBg" class="section-title">
        <div class="title-wrap">
          <div class="title-prefix">
            <img class="prefix-base" :src="titlePrefixBase" />
            <img class="prefix-center" :src="titlePrefixCenter" />
          </div>
          <span class="title-text">融合一点支撑</span>
        </div>
      </RectCard>

      <div class="card-row">
        <RectCard :background="rectBg1" />
        <RectCard :background="rectBg1" />
      </div>
    </div>
  </el-main>
</template>

<script>
import RectCard from "@/components/common/card-group/rect/index.vue";
import CommonRect from "@/components/common/card-group/border-rect.vue";
import titlePrefixBase from "@/assets/primaryscreen/title-prefix-base.png";
import titlePrefixCenter from "@/assets/primaryscreen/title-prefix-car.png";
import businessBg1 from "@/assets/primaryscreen/four-business-bg.png";
import businessBg2 from "@/assets/primaryscreen/four-business-bg1.png";
import rectBg1 from "@/assets/common/title-card1.png";
import titleBg from "@/assets/primaryscreen/title-bg.png";
import effect1Bg from "@/assets/sepcialeffects/effect1.png";

export default {
  name: "Index",
  components: {
    RectCard,
    CommonRect,
  },
  data() {
    return {
      titlePrefixBase,
      titlePrefixCenter,
      rectBg1,
      titleBg,
      marketBgs: [businessBg1, businessBg2, businessBg2, businessBg2],
      effect1Bg,
    };
  },
  methods: {
    goPrimary() {
      this.$router.push("/primaryscreen");
    },
  },
};
</script>

<style lang="scss" scoped>
.page-ct {
  width: 100%;
  height: 100%;
  display: flex;
  gap: 16px;
}

/* 每一列区域 */
.section {
  flex: 1;
  display: flex;
  flex-direction: column;
}

/* 标题卡 */
.section-title {
  height: 64px;
  margin-bottom: 8px;
}

/* 标题内容 */
.title-wrap {
  display: flex;
  align-items: center;
}

/* 前缀 icon */
.title-prefix {
  position: relative;
  width: 48px;
  height: 48px;
  margin-right: 8px;
}

.prefix-base {
  width: 100%;
  height: 100%;
}

.prefix-center {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 24px;
  height: 24px;
  transform: translate(-50%, -50%);
}

.title-text {
  white-space: nowrap;
}

/* 卡片区域 */
.card-row {
  flex: 1;
  display: flex;
  gap: 8px;
  flex-direction: column;
}

/* 四大市场更高 */
.four-market .card-row {
  gap: 8px;
}
</style>
