<template>
  <div class="market-rows">
    <div
      v-for="(item, i) in rows"
      :key="i"
      class="market-row"
    >
      <div class="row-label">
        <span class="label-text">{{ item.market }}</span>
      </div>
      <div class="row-title">{{ item.title }}</div>
      <div class="row-stat">
        <span class="stat-value">{{ item.value }}</span>
        <span class="stat-unit">%</span>
        <div class="stat-desc">{{ item.desc }}</div>
      </div>
      <div class="row-extra">
        <svg class="shield-icon" viewBox="0 0 40 40" fill="none">
          <circle cx="20" cy="20" r="18" fill="rgba(0,180,255,0.15)" stroke="rgba(0,200,255,0.5)" stroke-width="1.5"/>
          <path d="M20 10 L28 15 V23 C28 28 20 32 20 32 C20 32 12 28 12 23 V15 Z" fill="rgba(0,160,255,0.3)" stroke="#0cf" stroke-width="1.2"/>
          <path d="M17 21 L19.5 23.5 L24 17.5" stroke="#0cf" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
        </svg>
        <div class="extra-info">
          <span class="extra-value">{{ item.extraValue }}<span class="extra-unit">{{ item.extraUnit }}</span></span>
          <div class="extra-desc">{{ item.extraDesc }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MarketRows",
  props: {
    data: { type: Array, default: null },
  },
  computed: {
    rows() {
      return this.data || [
        { market: "家客\n市场", title: "宽带网络不退单", value: "0.01", desc: "网络类退单率", extraValue: "843", extraUnit: "单", extraDesc: "攻坚完成工单" },
        { market: "商客\n市场", title: "团单一次上门交付", value: "96.4", desc: "一次交付率", extraValue: "953", extraUnit: "单", extraDesc: "智能网定工单" },
        { market: "战客\n市场", title: "重要业务零投诉", value: "0.03", desc: "重要专线投诉率", extraValue: "533", extraUnit: "单", extraDesc: "主动关怀次数" },
        { market: "国际\n市场", title: "潜客精准触达", value: "85.3", desc: "国漫潜客触客率", extraValue: "3243", extraUnit: "次", extraDesc: "主动触客次数" },
      ];
    },
  },
};
</script>

<style scoped lang="scss">
.market-rows {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.market-row {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 14px 18px;
  background: linear-gradient(135deg, rgba(0, 40, 80, 0.7) 0%, rgba(0, 20, 50, 0.85) 100%);
  border: 1px solid rgba(0, 140, 255, 0.15);
  border-radius: 4px;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(120deg, transparent 40%, rgba(0, 140, 220, 0.06) 60%, transparent 80%);
    pointer-events: none;
  }
}

.row-label {
  flex-shrink: 0;
  width: 48px;

  .label-text {
    font-size: 16px;
    font-weight: 700;
    color: #f0a830;
    white-space: pre-line;
    line-height: 1.3;
  }
}

.row-title {
  flex-shrink: 0;
  width: 140px;
  font-size: 16px;
  font-weight: 700;
  color: #fff;
  letter-spacing: 1px;
}

.row-stat {
  flex: 1;
  min-width: 120px;
  position: relative;

  .stat-value {
    font-size: 32px;
    font-weight: 700;
    color: #00e0ff;
    font-family: "DIN Alternate", "Impact", sans-serif;
    letter-spacing: 1px;
  }

  .stat-unit {
    font-size: 14px;
    color: #00c8ff;
    margin-left: 2px;
    vertical-align: super;
  }

  .stat-desc {
    font-size: 12px;
    color: rgba(140, 200, 255, 0.7);
    margin-top: 2px;
  }
}

.row-extra {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  gap: 8px;

  .shield-icon {
    width: 36px;
    height: 36px;
    flex-shrink: 0;
  }

  .extra-info {
    text-align: left;
  }

  .extra-value {
    font-size: 22px;
    font-weight: 700;
    color: #fff;
    font-family: "DIN Alternate", "Impact", sans-serif;
  }

  .extra-unit {
    font-size: 12px;
    color: rgba(140, 200, 255, 0.7);
    margin-left: 3px;
    font-weight: 400;
  }

  .extra-desc {
    font-size: 11px;
    color: rgba(140, 200, 255, 0.6);
    margin-top: 1px;
  }
}
</style>
