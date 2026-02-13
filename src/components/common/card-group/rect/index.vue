<template>
  <div class="rect-card" :style="cardStyle">
    <div class="card-content">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "RectCard",
  props: {
    width: {
      type: String,
      default: "100%",
    },
    height: {
      type: String,
      default: "auto",
    },
    aspectRatio: {
      type: String,
      default: "",
    },
    background: {
      type: String,
      required: true,
    },
  },
  computed: {
    cardStyle() {
      return {
        width: this.width,
        height: this.height,
        aspectRatio: this.aspectRatio || undefined,
        background: `url(${this.background}) no-repeat center center`,
        backgroundSize: "contain",
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.rect-card {
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--white);
}

.card-content {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
