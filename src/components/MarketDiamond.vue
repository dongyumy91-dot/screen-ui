<template>
  <div class="market-diamond">
    <!-- 上排：家庭市场 + 商客市场 -->
    <div class="diamond-top-row">
      <div class="market-card" @click="$emit('navigate', 'home')">
        <div class="card-icon">
          <svg viewBox="0 0 40 40" class="icon-svg">
            <rect x="4" y="18" width="32" height="18" rx="2" fill="none" stroke="#00cfff" stroke-width="1.5"/>
            <polygon points="20,4 38,18 2,18" fill="none" stroke="#00cfff" stroke-width="1.5"/>
            <rect x="15" y="24" width="10" height="12" rx="1" fill="none" stroke="#00cfff" stroke-width="1"/>
            <circle cx="20" cy="14" r="3" fill="none" stroke="#00cfff" stroke-width="1"/>
          </svg>
        </div>
        <span class="card-label">家庭市场</span>
      </div>
      <div class="market-card" @click="$emit('navigate', 'business')">
        <div class="card-icon">
          <svg viewBox="0 0 40 40" class="icon-svg">
            <rect x="6" y="14" width="28" height="22" rx="2" fill="none" stroke="#00cfff" stroke-width="1.5"/>
            <rect x="10" y="8" width="20" height="8" rx="2" fill="none" stroke="#00cfff" stroke-width="1.5"/>
            <line x1="14" y1="20" x2="14" y2="30" stroke="#00cfff" stroke-width="1"/>
            <line x1="20" y1="20" x2="20" y2="30" stroke="#00cfff" stroke-width="1"/>
            <line x1="26" y1="20" x2="26" y2="30" stroke="#00cfff" stroke-width="1"/>
          </svg>
        </div>
        <span class="card-label">商客市场</span>
      </div>
    </div>

    <!-- 中间连线区 + 中心图标 -->
    <div class="diamond-mid">
      <!-- 左上连线 -->
      <div class="connector connector-tl"></div>
      <!-- 右上连线 -->
      <div class="connector connector-tr"></div>
      <!-- 中心：网格融合支撑 -->
      <div class="center-block">
        <div class="center-platform">
          <div class="platform-top">
            <svg viewBox="0 0 48 48" class="center-icon-svg">
              <circle cx="24" cy="24" r="16" fill="none" stroke="#22c55e" stroke-width="1.5"/>
              <ellipse cx="24" cy="24" rx="16" ry="7" fill="none" stroke="#22c55e" stroke-width="1" opacity="0.7"/>
              <ellipse cx="24" cy="24" rx="7" ry="16" fill="none" stroke="#22c55e" stroke-width="1" opacity="0.7"/>
              <circle cx="24" cy="24" r="3" fill="#22c55e" opacity="0.8"/>
            </svg>
          </div>
          <!-- 六角底座 -->
          <div class="platform-base">
            <svg viewBox="0 0 100 60" class="base-svg">
              <polygon points="50,0 95,15 95,45 50,60 5,45 5,15"
                fill="rgba(0,60,140,0.5)" stroke="#0088cc" stroke-width="1.2"/>
              <polygon points="50,8 85,20 85,42 50,54 15,42 15,20"
                fill="rgba(0,40,100,0.4)" stroke="#006aaa" stroke-width="0.8"/>
            </svg>
          </div>
        </div>
        <span class="center-label">网格融合支撑</span>
      </div>
      <!-- 左下连线 -->
      <div class="connector connector-bl"></div>
      <!-- 右下连线 -->
      <div class="connector connector-br"></div>
    </div>

    <!-- 下排：国际市场 + 战客市场 -->
    <div class="diamond-bottom-row">
      <div class="market-card" @click="$emit('navigate', 'international')">
        <div class="card-icon">
          <svg viewBox="0 0 40 40" class="icon-svg">
            <circle cx="20" cy="20" r="14" fill="none" stroke="#00cfff" stroke-width="1.5"/>
            <ellipse cx="20" cy="20" rx="14" ry="7" fill="none" stroke="#00cfff" stroke-width="0.8"/>
            <ellipse cx="20" cy="20" rx="7" ry="14" fill="none" stroke="#00cfff" stroke-width="0.8"/>
            <line x1="6" y1="14" x2="34" y2="14" stroke="#00cfff" stroke-width="0.6"/>
            <line x1="6" y1="26" x2="34" y2="26" stroke="#00cfff" stroke-width="0.6"/>
          </svg>
        </div>
        <span class="card-label">国际市场</span>
      </div>
      <div class="market-card" @click="$emit('navigate', 'strategic')">
        <div class="card-icon">
          <svg viewBox="0 0 40 40" class="icon-svg">
            <polygon points="20,4 36,14 36,30 20,36 4,30 4,14" fill="none" stroke="#00cfff" stroke-width="1.5"/>
            <circle cx="20" cy="20" r="6" fill="none" stroke="#00cfff" stroke-width="1"/>
            <line x1="20" y1="14" x2="20" y2="26" stroke="#00cfff" stroke-width="0.8"/>
            <line x1="14" y1="20" x2="26" y2="20" stroke="#00cfff" stroke-width="0.8"/>
          </svg>
        </div>
        <span class="card-label">战客市场</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MarketDiamond",
  emits: ["navigate"],
};
</script>

<style lang="scss" scoped>
.market-diamond {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0;
  padding: 10px 6px 8px;
  position: relative;
  width: 100%;
}

/* ===== 上下两排卡片 ===== */
.diamond-top-row,
.diamond-bottom-row {
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 16px;
  z-index: 2;
}

/* ===== 市场卡片 ===== */
.market-card {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 14px;
  background: linear-gradient(135deg, rgba(0, 40, 90, 0.7), rgba(0, 25, 60, 0.9));
  border: 1px solid rgba(0, 150, 220, 0.3);
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.25s ease;
  position: relative;
  overflow: hidden;

  /* 左上角斜切装饰 */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 20px;
    height: 20px;
    border-top: 2px solid rgba(0, 180, 255, 0.5);
    border-left: 2px solid rgba(0, 180, 255, 0.5);
    border-radius: 4px 0 0 0;
  }

  &:hover {
    border-color: rgba(0, 200, 255, 0.6);
    box-shadow: 0 0 16px rgba(0, 180, 255, 0.2), inset 0 0 20px rgba(0, 120, 200, 0.1);
    transform: translateY(-1px);
  }
}

.card-icon {
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  filter: drop-shadow(0 0 4px rgba(0, 200, 255, 0.4));
}

.icon-svg {
  width: 100%;
  height: 100%;
}

.card-label {
  font-size: 14px;
  font-weight: 600;
  color: #b0dcf8;
  letter-spacing: 2px;
  text-shadow: 0 0 6px rgba(0, 180, 255, 0.3);
}

/* ===== 中间区域 ===== */
.diamond-mid {
  position: relative;
  width: 100%;
  height: 110px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
}

/* ===== 中心块 ===== */
.center-block {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  z-index: 3;
}

.center-platform {
  position: relative;
  width: 90px;
  height: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.platform-top {
  width: 44px;
  height: 44px;
  z-index: 2;
  filter: drop-shadow(0 0 10px rgba(34, 197, 94, 0.5));
  animation: floatCenter 3s ease-in-out infinite;
}

@keyframes floatCenter {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-4px); }
}

.center-icon-svg {
  width: 100%;
  height: 100%;
}

.platform-base {
  margin-top: -10px;
  width: 90px;
  height: 50px;
  z-index: 1;
}

.base-svg {
  width: 100%;
  height: 100%;
  filter: drop-shadow(0 0 8px rgba(0, 100, 200, 0.5));
}

.center-label {
  font-size: 13px;
  font-weight: 600;
  color: #8ec8f8;
  letter-spacing: 2px;
  text-shadow: 0 0 6px rgba(0, 180, 255, 0.3);
  margin-top: -2px;
}

/* ===== 连线 ===== */
.connector {
  position: absolute;
  width: 60px;
  height: 2px;
  background: linear-gradient(90deg, rgba(0, 180, 255, 0.05), rgba(0, 180, 255, 0.35), rgba(0, 180, 255, 0.05));
  z-index: 0;

  &::after {
    content: "";
    position: absolute;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: #0cf;
    box-shadow: 0 0 6px #0cf;
    animation: pulseNode 2s ease-in-out infinite;
  }
}

@keyframes pulseNode {
  0%, 100% { opacity: 0.4; }
  50% { opacity: 1; }
}

.connector-tl {
  top: 16px;
  left: 22%;
  transform: rotate(35deg);
  transform-origin: right center;
  &::after { right: -2px; top: -1px; }
}

.connector-tr {
  top: 16px;
  right: 22%;
  transform: rotate(-35deg);
  transform-origin: left center;
  &::after { left: -2px; top: -1px; }
}

.connector-bl {
  bottom: 16px;
  left: 22%;
  transform: rotate(-35deg);
  transform-origin: right center;
  &::after { right: -2px; top: -1px; }
}

.connector-br {
  bottom: 16px;
  right: 22%;
  transform: rotate(35deg);
  transform-origin: left center;
  &::after { left: -2px; top: -1px; }
}
</style>
