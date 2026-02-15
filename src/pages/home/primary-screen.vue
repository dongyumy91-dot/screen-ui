<template>
  <div class="primary-screen">
    <!-- 顶部标题栏 -->
    <div class="header">
      <div class="header-deco left"></div>
      <h1 class="header-title">福州交付融合支撑中心</h1>
      <div class="header-deco right"></div>
    </div>

    <!-- 主体四列布局 -->
    <div class="main-grid">
      <!-- 第一列：四大市场支撑 -->
      <div class="column col-1">
        <div class="panel">
          <div class="panel-header">
            <span class="panel-icon"></span>
            <span class="panel-title">四大市场支撑</span>
          </div>
          <div class="panel-body">
            <!-- 菱形布局 -->
            <MarketDiamond @navigate="handleMarketNav" />

            <!-- 市场数据行 -->
            <div class="market-rows">
              <div class="market-row">
                <div class="market-label">
                  <span class="market-tag">家客市场</span>
                </div>
                <div class="market-info">
                  <span class="market-desc">宽带网络不退单</span>
                  <span class="market-value cyan">0.01</span>
                  <span class="market-sub">宽带类退单率</span>
                </div>
                <div class="market-extra">
                  <span class="market-num">843</span>
                  <span class="market-unit">单</span>
                </div>
              </div>

              <div class="market-row">
                <div class="market-label">
                  <span class="market-tag">商客市场</span>
                </div>
                <div class="market-info">
                  <span class="market-desc">团单一次上门交付</span>
                  <span class="market-value cyan">96.4</span>
                  <span class="market-sub">一次交付率</span>
                </div>
                <div class="market-extra">
                  <span class="market-num">%</span>
                </div>
              </div>

              <div class="market-row">
                <div class="market-label">
                  <span class="market-tag">战客市场</span>
                </div>
                <div class="market-info">
                  <span class="market-desc">重要业务零投诉</span>
                  <span class="market-value cyan">0.03</span>
                  <span class="market-sub">重要业务投诉率</span>
                </div>
                <div class="market-extra">
                  <span class="market-num">533</span>
                  <span class="market-unit">单</span>
                </div>
              </div>

              <div class="market-row">
                <div class="market-label">
                  <span class="market-tag">国际市场</span>
                </div>
                <div class="market-info">
                  <span class="market-desc">潜客精准触达</span>
                  <span class="market-value cyan">85.3</span>
                  <span class="market-sub">潜客精准触达率</span>
                </div>
                <div class="market-extra">
                  <span class="market-num">3243</span>
                  <span class="market-unit">户</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 第二列：融合调度支撑 -->
      <div class="column col-2">
        <div class="panel">
          <div class="panel-header">
            <span class="panel-icon"></span>
            <span class="panel-title">融合调度支撑</span>
          </div>
          <div class="panel-body">
            <!-- 融合交付项目 -->
            <div class="sub-panel">
              <div class="sub-title">融合交付项目</div>
              <div class="delivery-flow">
                <div class="flow-step">
                  <div class="flow-box">方案<br/>制定</div>
                </div>
                <div class="flow-arrow">&#10132;</div>
                <div class="flow-step">
                  <div class="flow-box">交付<br/>支撑</div>
                </div>
                <div class="flow-arrow">&#10132;</div>
                <div class="flow-step">
                  <div class="flow-box">售后<br/>评估</div>
                </div>
              </div>
              <div class="delivery-stats">
                <div class="stat-item">
                  <span class="stat-big cyan">56</span>
                  <span class="stat-sep">/</span>
                  <span class="stat-big white">87</span>
                  <div class="stat-labels">
                    <span>办结量</span>
                    <span>需求量</span>
                  </div>
                </div>
                <div class="stat-item">
                  <span class="stat-big cyan">98</span>
                  <span class="stat-sep">/</span>
                  <span class="stat-big white">113</span>
                  <div class="stat-labels">
                    <span>办结量</span>
                    <span>需求量</span>
                  </div>
                </div>
                <div class="stat-item">
                  <span class="stat-big cyan">125</span>
                  <span class="stat-sep">/</span>
                  <span class="stat-big white">127</span>
                  <div class="stat-labels">
                    <span>办结量</span>
                    <span>需求量</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- 交付预警 -->
            <div class="sub-panel">
              <div class="sub-title">交付预警</div>
              <div class="warning-stats">
                <div class="warning-row">
                  <div class="warning-item">
                    <div class="warning-icon">&#9888;</div>
                    <div class="warning-label">预警量（当日）</div>
                    <div class="warning-val cyan">8</div>
                  </div>
                  <div class="warning-item">
                    <div class="warning-icon done">&#9898;</div>
                    <div class="warning-label">办结量（当日）</div>
                    <div class="warning-val cyan">7</div>
                  </div>
                </div>
                <div class="warning-row">
                  <div class="warning-item">
                    <div class="warning-label">预警量（30日）</div>
                    <div class="warning-val cyan">235</div>
                  </div>
                  <div class="warning-item">
                    <div class="warning-label">办结量（30日）</div>
                    <div class="warning-val cyan">232</div>
                  </div>
                </div>
              </div>

              <!-- 预警信息列表 -->
              <div class="warning-list">
                <div class="warning-msg">
                  <span class="dot green"></span>
                  社区 - 鼓楼区鼓东网格陈... - 压单超10单 -
                  <span class="link-text">提醒</span>
                </div>
                <div class="warning-msg">
                  <span class="dot red"></span>
                  网格 - 仓山区金山网格... - 压单超30单 -
                  <span class="link-text danger">严重</span>
                </div>
                <div class="warning-msg">
                  <span class="dot orange"></span>
                  客户 - 福州市政府 - 重要用户投诉 -
                  <span class="link-text warning">注意</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 第三列：融合包保支撑 -->
      <div class="column col-3">
        <div class="panel">
          <div class="panel-header">
            <span class="panel-icon"></span>
            <span class="panel-title">融合包保支撑</span>
          </div>
          <div class="panel-body">
            <!-- 投诉区域 -->
            <div class="complaint-area">
              <div class="complaint-left">
                <div class="complaint-item">
                  <span class="complaint-icon">&#128225;</span>
                  <span class="complaint-label">无线投诉</span>
                  <span class="complaint-val cyan">124</span>
                </div>
                <div class="complaint-item">
                  <span class="complaint-icon">&#128222;</span>
                  <span class="complaint-label">有线投诉</span>
                  <span class="complaint-val cyan">627</span>
                </div>
              </div>
              <div class="complaint-center">
                <div class="robot-icon">&#129302;</div>
                <div class="robot-label">智能判断机器人</div>
              </div>
              <div class="complaint-right">
                <div class="complaint-item">
                  <span class="complaint-label">无线队伍处理</span>
                  <span class="complaint-val cyan">113</span>
                </div>
                <div class="complaint-sep"></div>
                <div class="complaint-item">
                  <span class="complaint-label">融合队伍处理</span>
                  <span class="complaint-val cyan">42</span>
                </div>
                <div class="complaint-sep"></div>
                <div class="complaint-item">
                  <span class="complaint-label">有线队伍处理</span>
                  <span class="complaint-val cyan">596</span>
                </div>
              </div>
            </div>

            <!-- 工单统计 -->
            <div class="ticket-stats-row">
              <div class="ticket-block">
                <div class="ticket-title">融合工单数（30日）</div>
                <div class="ticket-nums">
                  <span class="cyan big">1382</span>
                  <span class="sep">/</span>
                  <span class="white big">1471</span>
                </div>
                <div class="ticket-sub">
                  <span>办日</span>
                  <span>工单总量</span>
                </div>
              </div>
              <div class="ticket-block">
                <div class="ticket-title">融合整治</div>
                <div class="ticket-nums">
                  <span class="cyan big">3281</span>
                  <span class="sep">/</span>
                  <span class="white big">4175</span>
                </div>
                <div class="ticket-sub">
                  <span>完成量</span>
                  <span>目标量</span>
                </div>
              </div>
            </div>

            <!-- 融合工单流转演示 -->
            <div class="flow-demo">
              <div class="sub-title">融合工单流转演示</div>
              <div class="flow-chart" ref="flowChart"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- 第四列：融合一点支撑 -->
      <div class="column col-4">
        <div class="panel">
          <div class="panel-header">
            <span class="panel-icon"></span>
            <span class="panel-title">融合一点支撑</span>
          </div>
          <div class="panel-body">
            <!-- 处理工单总量 -->
            <div class="sub-panel">
              <div class="sub-title">处理工单总量</div>
              <div class="total-digits">
                <span class="digit" v-for="(d, i) in totalDigits" :key="i">{{ d }}</span>
                <span class="digit-unit">单</span>
              </div>
            </div>

            <!-- 遗留问题点及责任人 -->
            <div class="sub-panel">
              <div class="sub-title">遗留问题点及责任人</div>
              <div class="issue-area">
                <div class="issue-left">
                  <div class="issue-stat-row">
                    <div class="issue-block">
                      <div class="issue-label">接入工单量（当日）</div>
                      <div class="issue-val">
                        <span class="cyan big">18</span>
                        <span class="unit">单</span>
                      </div>
                    </div>
                    <div class="issue-block">
                      <div class="issue-label">接入工单量（7日）</div>
                      <div class="issue-val">
                        <span class="cyan big">259</span>
                        <span class="unit">单</span>
                      </div>
                    </div>
                  </div>
                  <div class="issue-stat-row">
                    <div class="issue-block">
                      <div class="issue-label"></div>
                      <div class="issue-val"></div>
                    </div>
                    <div class="issue-block">
                      <div class="issue-label">办结工单量（7日）</div>
                      <div class="issue-val">
                        <span class="cyan big">263</span>
                        <span class="unit">单</span>
                      </div>
                    </div>
                  </div>
                  <div class="issue-stat-row">
                    <div class="issue-block">
                      <div class="issue-label"></div>
                      <div class="issue-val"></div>
                    </div>
                    <div class="issue-block">
                      <div class="issue-label">办结工单量（当日）</div>
                      <div class="issue-val">
                        <span class="cyan big">16</span>
                        <span class="unit">单</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="issue-right">
                  <div class="gauge-chart" ref="gaugeChart"></div>
                  <div class="gauge-label">驻地网处理</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts";
import MarketDiamond from "@/components/MarketDiamond.vue";

export default {
  name: "PrimaryScreen",
  components: { MarketDiamond },
  data() {
    return {
      totalDigits: ["1", "5", "2", "6", "8"],
    };
  },
  mounted() {
    this.initGaugeChart();
    this.initFlowChart();
    window.addEventListener("resize", this.handleResize);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.handleResize);
    if (this.gaugeInstance) this.gaugeInstance.dispose();
    if (this.flowInstance) this.flowInstance.dispose();
  },
  methods: {
    handleMarketNav(market) {
      // 市场导航预留
    },
    handleResize() {
      if (this.gaugeInstance) this.gaugeInstance.resize();
      if (this.flowInstance) this.flowInstance.resize();
    },
    initGaugeChart() {
      const el = this.$refs.gaugeChart;
      if (!el) return;
      this.gaugeInstance = echarts.init(el);
      this.gaugeInstance.setOption({
        series: [
          {
            type: "gauge",
            startAngle: 220,
            endAngle: -40,
            min: 0,
            max: 100,
            pointer: { show: false },
            progress: {
              show: true,
              width: 14,
              itemStyle: {
                color: {
                  type: "linear",
                  x: 0, y: 0, x2: 1, y2: 0,
                  colorStops: [
                    { offset: 0, color: "#0ff" },
                    { offset: 1, color: "#0a7cff" },
                  ],
                },
              },
            },
            axisLine: {
              lineStyle: { width: 14, color: [[1, "rgba(255,255,255,0.08)"]] },
            },
            axisTick: { show: false },
            splitLine: { show: false },
            axisLabel: { show: false },
            detail: {
              fontSize: 22,
              fontWeight: "bold",
              color: "#0ff",
              offsetCenter: [0, "0%"],
              formatter: "{value}%",
            },
            data: [{ value: 12 }],
          },
        ],
      });
    },
    initFlowChart() {
      const el = this.$refs.flowChart;
      if (!el) return;
      this.flowInstance = echarts.init(el);
      const categories = [
        "接单", "派单", "预约", "上门", "处理", "回访", "归档"
      ];
      const data1 = [120, 110, 95, 88, 80, 75, 70];
      const data2 = [100, 90, 80, 72, 68, 60, 55];
      this.flowInstance.setOption({
        tooltip: { trigger: "axis" },
        legend: {
          data: ["融合工单", "常规工单"],
          textStyle: { color: "#8ec8f8", fontSize: 10 },
          top: 0,
          right: 0,
        },
        grid: {
          left: "8%", right: "4%", top: "22%", bottom: "12%",
        },
        xAxis: {
          type: "category",
          data: categories,
          axisLine: { lineStyle: { color: "#1a3a6a" } },
          axisLabel: { color: "#8ec8f8", fontSize: 10 },
        },
        yAxis: {
          type: "value",
          axisLine: { show: false },
          splitLine: { lineStyle: { color: "rgba(255,255,255,0.06)" } },
          axisLabel: { color: "#8ec8f8", fontSize: 10 },
        },
        series: [
          {
            name: "融合工单",
            type: "bar",
            barWidth: 12,
            itemStyle: {
              color: {
                type: "linear", x: 0, y: 0, x2: 0, y2: 1,
                colorStops: [
                  { offset: 0, color: "#00e5ff" },
                  { offset: 1, color: "#0a3d7a" },
                ],
              },
            },
            data: data1,
          },
          {
            name: "常规工单",
            type: "bar",
            barWidth: 12,
            itemStyle: {
              color: {
                type: "linear", x: 0, y: 0, x2: 0, y2: 1,
                colorStops: [
                  { offset: 0, color: "#3a7cff" },
                  { offset: 1, color: "#0a1a3a" },
                ],
              },
            },
            data: data2,
          },
        ],
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.primary-screen {
  width: 100%;
  height: 100vh;
  background: linear-gradient(180deg, #040e27 0%, #091a3a 40%, #0a1e42 100%);
  color: #d0e8ff;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  font-family: "Microsoft YaHei", "PingFang SC", sans-serif;
  padding: 0 16px 12px;
  box-sizing: border-box;
}

/* ===== 顶部标题 ===== */
.header {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 56px;
  flex-shrink: 0;
  position: relative;
}
.header-title {
  font-size: 28px;
  font-weight: 700;
  letter-spacing: 8px;
  color: #e0f4ff;
  text-shadow: 0 0 20px rgba(0, 200, 255, 0.5), 0 0 40px rgba(0, 120, 255, 0.3);
  margin: 0;
  z-index: 1;
}
.header-deco {
  position: absolute;
  top: 50%;
  height: 2px;
  width: 30%;
  background: linear-gradient(90deg, transparent, #0cf, #f80, transparent);
  &.left { left: 0; }
  &.right { right: 0; transform: scaleX(-1); }
}

/* ===== 主体网格 ===== */
.main-grid {
  flex: 1;
  display: flex;
  gap: 12px;
  min-height: 0;
}
.column {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
}

/* ===== 面板 ===== */
.panel {
  flex: 1;
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(0, 180, 255, 0.25);
  border-radius: 6px;
  background: rgba(3, 19, 48, 0.6);
  box-shadow: inset 0 0 30px rgba(0, 100, 200, 0.08), 0 0 12px rgba(0, 120, 255, 0.1);
  overflow: hidden;
}
.panel-header {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 14px;
  background: linear-gradient(90deg, rgba(0, 100, 200, 0.2), transparent);
  border-bottom: 1px solid rgba(0, 180, 255, 0.15);
}
.panel-icon {
  width: 20px;
  height: 20px;
  background: radial-gradient(circle, #0cf 30%, transparent 70%);
  border-radius: 50%;
  flex-shrink: 0;
}
.panel-title {
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 3px;
  color: #00e5ff;
  text-shadow: 0 0 8px rgba(0, 200, 255, 0.4);
}
.panel-body {
  flex: 1;
  padding: 10px 12px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow-y: auto;
}

/* ===== 子面板 ===== */
.sub-panel {
  border: 1px solid rgba(0, 150, 255, 0.15);
  border-radius: 4px;
  padding: 8px 10px;
  background: rgba(0, 30, 70, 0.3);
}
.sub-title {
  font-size: 13px;
  font-weight: 600;
  color: #8ec8f8;
  margin-bottom: 8px;
  padding-left: 8px;
  border-left: 3px solid #0cf;
}

/* ===== 通用样式 ===== */
.cyan { color: #00e5ff !important; }
.white { color: #e0f0ff !important; }
.big { font-size: 22px; font-weight: 700; }
.sep { color: rgba(255,255,255,0.3); margin: 0 2px; }
.unit { color: #5a8ab5; font-size: 12px; margin-left: 4px; }

/* 市场数据行 */
.market-rows {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.market-row {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 8px;
  border: 1px solid rgba(0, 150, 255, 0.12);
  border-radius: 4px;
  background: rgba(0, 30, 70, 0.3);
}
.market-tag {
  font-size: 11px;
  color: #5a9acf;
  white-space: nowrap;
  padding: 2px 6px;
  border: 1px solid rgba(0, 150, 255, 0.2);
  border-radius: 3px;
  background: rgba(0, 50, 100, 0.3);
}
.market-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1px;
}
.market-desc {
  font-size: 11px;
  color: #8ec8f8;
}
.market-value {
  font-size: 22px;
  font-weight: 700;
}
.market-sub {
  font-size: 10px;
  color: #4a7a9f;
}
.market-extra {
  text-align: right;
}
.market-num {
  font-size: 16px;
  font-weight: 600;
  color: #5a9acf;
}
.market-unit {
  font-size: 10px;
  color: #4a7a9f;
  margin-left: 2px;
}

/* ===== 第二列：交付流程 ===== */
.delivery-flow {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  margin: 6px 0;
}
.flow-box {
  width: 58px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(0, 180, 255, 0.3);
  border-radius: 4px;
  background: rgba(0, 60, 120, 0.3);
  font-size: 12px;
  color: #8ec8f8;
  text-align: center;
  line-height: 1.3;
}
.flow-arrow {
  color: #0cf;
  font-size: 18px;
}
.delivery-stats {
  display: flex;
  justify-content: space-around;
  gap: 6px;
}
.stat-item {
  text-align: center;
}
.stat-big {
  font-size: 20px;
  font-weight: 700;
  &.cyan { color: #00e5ff; }
  &.white { color: #d0e8ff; }
}
.stat-sep {
  color: rgba(255,255,255,0.25);
  font-size: 16px;
  margin: 0 2px;
}
.stat-labels {
  display: flex;
  justify-content: space-between;
  font-size: 10px;
  color: #4a7a9f;
  gap: 8px;
  margin-top: 2px;
}

/* 交付预警 */
.warning-stats {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.warning-row {
  display: flex;
  gap: 12px;
}
.warning-item {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
}
.warning-icon {
  font-size: 18px;
  color: #f5a623;
  &.done { color: #0cf; }
}
.warning-label {
  font-size: 11px;
  color: #5a8ab5;
}
.warning-val {
  font-size: 26px;
  font-weight: 700;
}
.warning-list {
  margin-top: 6px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.warning-msg {
  font-size: 11px;
  color: #6a9ac0;
  line-height: 1.6;
  display: flex;
  align-items: center;
  gap: 4px;
}
.dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  flex-shrink: 0;
  &.green { background: #22c55e; }
  &.red { background: #ef4444; }
  &.orange { background: #f59e0b; }
}
.link-text {
  color: #0cf;
  cursor: pointer;
  &.danger { color: #ef4444; }
  &.warning { color: #f59e0b; }
}

/* ===== 第三列：投诉区域 ===== */
.complaint-area {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 0;
}
.complaint-left,
.complaint-right {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.complaint-item {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 11px;
}
.complaint-icon {
  font-size: 14px;
}
.complaint-label {
  color: #5a8ab5;
  font-size: 11px;
}
.complaint-val {
  font-size: 18px;
  font-weight: 700;
  margin-left: auto;
}
.complaint-center {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
}
.robot-icon {
  font-size: 32px;
  filter: drop-shadow(0 0 8px rgba(0, 200, 255, 0.5));
}
.robot-label {
  font-size: 10px;
  color: #5a8ab5;
  white-space: nowrap;
}
.complaint-sep {
  height: 1px;
  background: rgba(0, 150, 255, 0.1);
}

/* 工单统计 */
.ticket-stats-row {
  display: flex;
  gap: 10px;
}
.ticket-block {
  flex: 1;
  text-align: center;
  padding: 6px;
  border: 1px solid rgba(0, 150, 255, 0.12);
  border-radius: 4px;
  background: rgba(0, 30, 70, 0.3);
}
.ticket-title {
  font-size: 12px;
  color: #5a8ab5;
  margin-bottom: 4px;
}
.ticket-nums {
  font-size: 20px;
  font-weight: 700;
}
.ticket-sub {
  display: flex;
  justify-content: space-around;
  font-size: 10px;
  color: #4a7a9f;
  margin-top: 2px;
}

/* 工单流转 */
.flow-demo {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 120px;
}
.flow-chart {
  flex: 1;
  min-height: 100px;
}

/* ===== 第四列：工单总量 ===== */
.total-digits {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  margin: 8px 0;
}
.digit {
  width: 36px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  font-weight: 700;
  color: #00e5ff;
  border: 1px solid rgba(0, 200, 255, 0.3);
  border-radius: 4px;
  background: rgba(0, 40, 80, 0.5);
  text-shadow: 0 0 10px rgba(0, 200, 255, 0.5);
}
.digit-unit {
  font-size: 14px;
  color: #5a8ab5;
  margin-left: 4px;
}

/* 遗留问题 */
.issue-area {
  display: flex;
  gap: 10px;
}
.issue-left {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.issue-stat-row {
  display: flex;
  gap: 8px;
}
.issue-block {
  flex: 1;
}
.issue-label {
  font-size: 11px;
  color: #5a8ab5;
  margin-bottom: 2px;
}
.issue-val {
  display: flex;
  align-items: baseline;
  gap: 2px;
}
.issue-right {
  width: 110px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.gauge-chart {
  width: 100px;
  height: 100px;
}
.gauge-label {
  font-size: 11px;
  color: #5a8ab5;
  margin-top: -4px;
}
</style>
