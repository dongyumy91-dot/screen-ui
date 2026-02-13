<!-- 屏保 -->
<template>
  <el-main class="screen-saver" @click="goPrimary">
    <div>
      
    </div>
    <div></div>
    <div></div>
  </el-main>
</template>

<script>
import RectCard from "@/components/common/card-group/rect/index.vue";
import rectBg from "@/assets/common/rect-card.png";
import rectBg1 from "@/assets/common/title-card1.png";

export default {
  name: "Index",
  components: {
    RectCard,
  },
  data() {
    return {
      rectBg,
      rectBg1,
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
.screen-saver {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px; /* 多个 RectCard 时间距 */
}
</style>

