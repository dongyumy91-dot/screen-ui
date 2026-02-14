<!-- 二级屏 家客支撑 -->
<template>
  <div class="home-customer">
    <!-- 顶部标题栏 -->
    <div class="header">
      <div class="header-deco left"></div>
      <h1 class="header-title">家庭市场支撑</h1>
      <div class="header-deco right"></div>
    </div>

    <!-- 主体布局：左 - 中 - 右 -->
    <div class="main-content">
      <!-- ========== 左侧区域 ========== -->
      <div class="left-area">
        <!-- 业务体量 -->
        <div class="panel">
          <div class="panel-hd">
            <span class="panel-tt">业务体量</span>
          </div>
          <div class="panel-bd">
            <div class="biz-volume">
              <div class="biz-col">
                <div class="biz-label">有线用户总数</div>
                <div class="biz-val"><span class="num-big cyan">219.3</span><span class="num-unit">W</span></div>
                <div class="biz-sub"><span class="sub-icon">&#9679;</span> 转化率 <span class="cyan fw">83.5%</span></div>
              </div>
              <div class="biz-col">
                <div class="biz-label">千兆用户数</div>
                <div class="biz-val"><span class="num-big cyan">59.8</span><span class="num-unit">W</span></div>
                <div class="biz-sub"><span class="sub-icon">&#9201;</span> 24小时装工占比 <span class="cyan fw">69.4%</span></div>
              </div>
            </div>
          </div>
        </div>

        <!-- 业务情况 -->
        <div class="panel">
          <div class="panel-hd">
            <span class="panel-tt">业务情况</span>
          </div>
          <div class="panel-bd">
            <div class="biz-sit">
              <div class="sit-block">
                <div class="sit-head"><span class="sit-tag">工单<br/>情况</span></div>
                <div class="sit-data">
                  <div class="sit-row">
                    <span class="num-mid cyan">1251</span><span class="num-sm">个</span>
                    <span class="sit-desc">今日受理工单</span>
                  </div>
                  <div class="sit-row">
                    <span class="num-mid cyan">1067</span><span class="num-sm">个</span>
                    <span class="sit-desc">今日派工工单</span>
                  </div>
                </div>
              </div>
              <div class="sit-block">
                <div class="sit-head"><span class="sit-tag">队伍<br/>情况</span></div>
                <div class="sit-data">
                  <div class="sit-row">
                    <span class="num-mid cyan">628</span><span class="num-sm">个</span>
                    <span class="sit-desc">今日在岗人数</span>
                  </div>
                  <div class="sit-row">
                    <span class="num-mid cyan">568</span><span class="num-sm">人</span>
                    <span class="sit-desc">今日产单人数</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 异常区县监管 -->
        <div class="panel flex-1">
          <div class="panel-hd">
            <span class="panel-tt">异常区县监管</span>
          </div>
          <div class="panel-bd">
            <table class="mon-table">
              <thead>
                <tr>
                  <th>区县</th>
                  <th>在途单量</th>
                  <th>日均竣工量</th>
                  <th>异常单量</th>
                  <th>预警事件</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(r, i) in monitorData" :key="i">
                  <td>{{ r.district }}</td>
                  <td>{{ r.pending }}</td>
                  <td>{{ r.daily }}</td>
                  <td>{{ r.abnormal }}</td>
                  <td><span :class="['atag', r.cls]">{{ r.alert }}</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- ========== 中间区域 ========== -->
      <div class="center-area">
        <!-- 上半：基础覆盖 → 装机调度 -->
        <div class="center-row">
          <!-- 基础覆盖 -->
          <div class="panel center-p">
            <div class="panel-hd"><span class="panel-tt">基础覆盖</span></div>
            <div class="panel-bd row-bd">
              <div class="gauge-col">
                <div class="gauge-box" ref="coverageGauge"></div>
                <div class="gauge-lbl">宽带资源覆盖率</div>
              </div>
              <div class="cov-info">
                <div class="cov-block">
                  <div class="cov-name">不退单小区</div>
                  <div class="cov-nums">
                    <span class="num-mid cyan">9309</span><span class="num-sm">个</span>
                    <span class="num-mid white">7708</span><span class="num-sm">个</span>
                  </div>
                  <div class="cov-sub"><span>今年目标数</span><span>累计完成</span></div>
                </div>
                <div class="cov-block">
                  <div class="cov-name bold">资源建设</div>
                  <div class="cov-nums">
                    <span class="num-mid cyan italic">1208</span><span class="num-sm">个</span>
                    <span class="num-mid white italic">156</span><span class="num-sm">个</span>
                  </div>
                  <div class="cov-sub"><span>今年目标数</span><span>累计完成</span></div>
                </div>
              </div>
            </div>
          </div>

          <!-- 箭头 -->
          <div class="arrow-h">
            <svg width="36" height="24" viewBox="0 0 36 24"><polygon points="0,4 22,4 22,0 36,12 22,24 22,20 0,20" fill="rgba(180,210,240,0.3)"/></svg>
          </div>

          <!-- 装机调度 -->
          <div class="panel center-p">
            <div class="panel-hd"><span class="panel-tt">装机调度</span></div>
            <div class="panel-bd row-bd">
              <div class="gauge-col">
                <div class="gauge-box" ref="dispatchGauge"></div>
                <div class="gauge-lbl">缓装工单占比</div>
              </div>
              <div class="disp-info">
                <div class="warn-group">
                  <div class="warn-head"><span class="tri-red"></span> 压单预警</div>
                  <div class="warn-row">
                    <div class="wn"><span class="num-mid cyan">1</span><span class="num-sm">个</span><div class="wn-d">区县</div></div>
                    <div class="wn"><span class="num-mid cyan">9</span><span class="num-sm">个</span><div class="wn-d">网格</div></div>
                    <div class="wn"><span class="num-mid cyan">95</span><span class="num-sm">个</span><div class="wn-d">网格调度</div></div>
                  </div>
                </div>
                <div class="warn-group">
                  <div class="warn-head"><span class="dia-green"></span> 劳效预警</div>
                  <div class="warn-row">
                    <div class="wn"><span class="num-mid cyan">1</span><span class="num-sm">个</span><div class="wn-d">区县</div></div>
                    <div class="wn"><span class="num-mid cyan">7</span><span class="num-sm">个</span><div class="wn-d">网格</div></div>
                    <div class="wn"><span class="num-mid cyan">37</span><span class="num-sm">个</span><div class="wn-d">人员</div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 向下箭头 -->
        <div class="arrow-v-wrap">
          <svg width="24" height="28" viewBox="0 0 24 28"><polygon points="4,0 20,0 20,16 24,16 12,28 0,16 4,16" fill="rgba(180,210,240,0.3)"/></svg>
        </div>

        <!-- 下半：质检关怀 → 攻坚调度 -->
        <div class="center-row">
          <!-- 质检关怀 -->
          <div class="panel center-p">
            <div class="panel-hd"><span class="panel-tt">质检关怀</span></div>
            <div class="panel-bd">
              <!-- 格小哥 -->
              <div class="qc-sec">
                <div class="qc-role">格小哥 - 质检分析师</div>
                <div class="qc-cols">
                  <div class="qc-left">
                    <div class="qc-bl-title">质检不合格TOP项点</div>
                    <div class="qc-li"><span class="dot blue"></span> 技术不规范</div>
                    <div class="qc-li"><span class="dot blue"></span> 未期概上门跑端</div>
                  </div>
                  <div class="qc-right">
                    <div class="qc-bl-title">质差人员帮扶</div>
                    <div class="qc-hn"><span class="num-mid cyan">23</span><span class="num-sm">人</span><span class="hn-l">帮扶培训</span></div>
                    <div class="qc-hn"><span class="num-mid cyan">17</span><span class="num-sm">人</span><span class="hn-l">人员出库</span></div>
                  </div>
                </div>
              </div>
              <!-- 格小满 -->
              <div class="qc-sec">
                <div class="qc-role">格小满 - 满意度管家</div>
                <div class="qc-satis">
                  <div class="qc-satis-left">
                    <div class="qc-li"><span class="dot blue"></span> 回单不规范</div>
                  </div>
                  <div class="qc-satis-right">
                    <div class="satis-label">满意到家关怀</div>
                    <div class="satis-nums">
                      <span class="num-mid cyan italic">5624</span><span class="num-sm">人</span>
                      <span class="num-mid cyan">98.9%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- 箭头 -->
          <div class="arrow-h flip">
            <svg width="36" height="24" viewBox="0 0 36 24"><polygon points="0,4 22,4 22,0 36,12 22,24 22,20 0,20" fill="rgba(180,210,240,0.3)"/></svg>
          </div>

          <!-- 攻坚调度 -->
          <div class="panel center-p">
            <div class="panel-hd"><span class="panel-tt">攻坚调度</span></div>
            <div class="panel-bd">
              <div class="tk-top">
                <div class="gauge-col sm">
                  <div class="gauge-box sm" ref="tackleGauge"></div>
                  <div class="gauge-lbl">攻坚工单占比</div>
                </div>
              </div>
              <div class="tk-blocks">
                <div class="tk-block">
                  <div class="tk-bl-title">交付攻坚</div>
                  <div class="tk-row">
                    <div class="tk-item"><span class="num-mid cyan">125</span><span class="num-sm">单</span><div class="tk-d">待攻坚工单</div></div>
                    <div class="tk-item"><span class="num-mid cyan">17</span><span class="num-sm">个</span><div class="tk-d">已完成攻坚</div></div>
                  </div>
                </div>
                <div class="tk-block">
                  <div class="tk-bl-title">建设攻坚</div>
                  <div class="tk-row">
                    <div class="tk-item"><span class="num-mid cyan">789</span><span class="num-sm">个</span><div class="tk-d">待建工单量</div></div>
                    <div class="tk-item"><span class="num-mid cyan">125</span><span class="num-sm">个</span><div class="tk-d">已完成建设</div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- ========== 右侧区域 ========== -->
      <div class="right-area">
        <!-- 预警 + 人员调度 -->
        <div class="panel flex-1">
          <div class="panel-hd">
            <div class="legend-row">
              <span class="lg-item"><span class="tri-red sm"></span> 压单预警</span>
              <span class="lg-item"><span class="dia-green sm"></span> 劳效预警</span>
            </div>
            <span class="panel-tt">人员调度</span>
          </div>
          <div class="panel-bd">
            <div class="person-grid">
              <div
                v-for="(p, i) in personnelData"
                :key="i"
                class="person-cell"
                :class="p.color"
              >
                <span class="p-area">{{ p.area }}</span>
                <span class="p-name">{{ p.name }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- 攻坚状态 -->
        <div class="status-cards">
          <div v-for="(c, i) in statusCards" :key="i" class="st-card">
            <div class="st-hd">
              <span class="st-icon" :class="c.iconCls"></span>
              <span class="st-title" :class="c.titleCls">{{ c.title }}</span>
            </div>
            <div class="st-body">
              <div class="st-item" v-for="(s, j) in c.items" :key="j">
                <span class="num-lg cyan">{{ s.val }}</span><span class="num-sm">单</span>
                <div class="st-label">{{ s.label }}</div>
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

export default {
  name: "HomeCustomer",
  data() {
    return {
      monitorData: [
        { district: "鼓楼", pending: 237, daily: 132, abnormal: 23, alert: "产能预警", cls: "a-yellow" },
        { district: "台江", pending: 237, daily: 132, abnormal: 23, alert: "劳效预警", cls: "a-green" },
        { district: "晋安", pending: 237, daily: 132, abnormal: 23, alert: "规模预警", cls: "a-blue" },
      ],
      personnelData: [
        { area: "福清龙田镇装维班", name: "付浩龙", color: "c-red" },
        { area: "闽清美联装维班", name: "陈小海", color: "c-red" },
        { area: "仓山城门装维班", name: "洪居美", color: "c-yellow" },
        { area: "台山建设调度", name: "郑宇杭", color: "c-yellow" },
        { area: "区县调度", name: "林芳", color: "c-green" },
        { area: "区县调度", name: "张秀", color: "c-green" },
        { area: "区县调度", name: "薛志杰", color: "c-green" },
        { area: "区县调度", name: "蒋宇鸥", color: "c-green" },
        { area: "网络上线工建调度", name: "江信启", color: "c-blue" },
        { area: "智慧全业务调度", name: "高春伟", color: "c-blue" },
        { area: "自由网络调度", name: "林文杰", color: "c-blue" },
        { area: "自由网络调度", name: "杨运义", color: "c-blue" },
        { area: "自由网络调度", name: "胡静", color: "c-cyan" },
        { area: "自由网络调度", name: "张秀", color: "c-cyan" },
        { area: "智慧上线工建调度", name: "徐志林", color: "c-cyan" },
        { area: "智慧全业务", name: "吴宇航", color: "c-cyan" },
      ],
      statusCards: [
        {
          title: "待攻坚", iconCls: "ic-pending", titleCls: "",
          items: [
            { val: "11", label: "未分配队伍" },
            { val: "45", label: "未完成攻坚" },
          ],
        },
        {
          title: "攻坚中", iconCls: "ic-ongoing", titleCls: "",
          items: [
            { val: "32", label: "异常挂起" },
            { val: "211", label: "交付超时" },
          ],
        },
        {
          title: "攻坚完成", iconCls: "ic-done", titleCls: "done",
          items: [
            { val: "132", label: "未转化" },
            { val: "561", label: "待回拆" },
          ],
        },
      ],
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.initCoverageGauge();
      this.initDispatchGauge();
      this.initTackleGauge();
    });
    window.addEventListener("resize", this.handleResize);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.handleResize);
    if (this.covChart) this.covChart.dispose();
    if (this.dispChart) this.dispChart.dispose();
    if (this.tkChart) this.tkChart.dispose();
  },
  methods: {
    handleResize() {
      if (this.covChart) this.covChart.resize();
      if (this.dispChart) this.dispChart.resize();
      if (this.tkChart) this.tkChart.resize();
    },
    makeGaugeOpt(value, colors, fontSize) {
      return {
        series: [{
          type: "gauge",
          startAngle: 220,
          endAngle: -40,
          min: 0,
          max: 100,
          pointer: { show: false },
          progress: {
            show: true,
            width: 10,
            itemStyle: {
              color: {
                type: "linear", x: 0, y: 0, x2: 1, y2: 0,
                colorStops: [
                  { offset: 0, color: colors[0] },
                  { offset: 1, color: colors[1] },
                ],
              },
            },
          },
          axisLine: { lineStyle: { width: 10, color: [[1, "rgba(255,255,255,0.06)"]] } },
          axisTick: { show: false },
          splitLine: { show: false },
          axisLabel: { show: false },
          detail: {
            fontSize: fontSize || 20,
            fontWeight: "bold",
            color: "#0ff",
            offsetCenter: [0, "0%"],
            formatter: "{value}%",
          },
          data: [{ value }],
        }],
      };
    },
    initCoverageGauge() {
      const el = this.$refs.coverageGauge;
      if (!el) return;
      this.covChart = echarts.init(el);
      this.covChart.setOption(this.makeGaugeOpt(95.8, ["#0ff", "#0a7cff"], 22));
    },
    initDispatchGauge() {
      const el = this.$refs.dispatchGauge;
      if (!el) return;
      this.dispChart = echarts.init(el);
      this.dispChart.setOption(this.makeGaugeOpt(13.5, ["#f59e0b", "#ef4444"], 18));
    },
    initTackleGauge() {
      const el = this.$refs.tackleGauge;
      if (!el) return;
      this.tkChart = echarts.init(el);
      this.tkChart.setOption(this.makeGaugeOpt(5.9, ["#0ff", "#3a7cff"], 18));
    },
  },
};
</script>

<style lang="scss" scoped>
/* ===== 页面容器 ===== */
.home-customer {
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

/* ===== 标题栏 ===== */
.header {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 54px;
  flex-shrink: 0;
  position: relative;
}
.header-title {
  font-size: 26px;
  font-weight: 700;
  letter-spacing: 8px;
  color: #e0f4ff;
  text-shadow: 0 0 20px rgba(0,200,255,0.5), 0 0 40px rgba(0,120,255,0.3);
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

/* ===== 主体 ===== */
.main-content {
  flex: 1;
  display: flex;
  gap: 10px;
  min-height: 0;
}

/* ===== 通用面板 ===== */
.panel {
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(0,180,255,0.25);
  border-radius: 6px;
  background: rgba(3,19,48,0.6);
  box-shadow: inset 0 0 30px rgba(0,100,200,0.08), 0 0 12px rgba(0,120,255,0.1);
  overflow: hidden;
}
.flex-1 { flex: 1; }
.panel-hd {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 7px 12px;
  background: linear-gradient(90deg, rgba(0,100,200,0.2), transparent);
  border-bottom: 1px solid rgba(0,180,255,0.15);
}
.panel-tt {
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 2px;
  color: #00e5ff;
  text-shadow: 0 0 8px rgba(0,200,255,0.4);
}
.panel-bd {
  flex: 1;
  padding: 8px 10px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  overflow-y: auto;
}
.row-bd { flex-direction: row !important; align-items: center; }

/* ===== 通用文字 ===== */
.cyan { color: #00e5ff !important; }
.white { color: #e0f0ff !important; }
.fw { font-weight: 600; }
.italic { font-style: italic; }
.bold { font-weight: 700; }
.num-big { font-size: 26px; font-weight: 700; }
.num-mid { font-size: 18px; font-weight: 700; }
.num-lg { font-size: 22px; font-weight: 700; }
.num-sm { font-size: 10px; color: #5a8ab5; margin-left: 2px; margin-right: 6px; }
.num-unit { font-size: 13px; color: #5a8ab5; margin-left: 2px; }

/* ============================================ */
/*                   左侧区域                    */
/* ============================================ */
.left-area {
  width: 230px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

/* 业务体量 */
.biz-volume {
  display: flex;
  gap: 10px;
}
.biz-col { flex: 1; }
.biz-label { font-size: 11px; color: #5a8ab5; margin-bottom: 2px; }
.biz-val { line-height: 1.2; }
.biz-sub {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 10px;
  color: #5a8ab5;
  margin-top: 4px;
}
.sub-icon { font-size: 8px; color: #0cf; }

/* 业务情况 */
.biz-sit {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.sit-block {
  display: flex;
  gap: 8px;
  align-items: flex-start;
}
.sit-tag {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  color: #8ec8f8;
  background: rgba(0,60,120,0.4);
  border: 1px solid rgba(0,150,255,0.2);
  border-radius: 3px;
  padding: 2px 6px;
  line-height: 1.3;
  text-align: center;
  white-space: nowrap;
}
.sit-data { flex: 1; }
.sit-row {
  display: flex;
  align-items: baseline;
  gap: 2px;
  margin-bottom: 2px;
}
.sit-desc { font-size: 10px; color: #5a8ab5; margin-left: auto; }

/* 异常区县监管 */
.mon-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 11px;
  th {
    color: #5a8ab5;
    font-weight: 400;
    padding: 4px 4px;
    text-align: center;
    border-bottom: 1px solid rgba(0,150,255,0.15);
    white-space: nowrap;
  }
  td {
    padding: 5px 4px;
    text-align: center;
    color: #8ec8f8;
    border-bottom: 1px solid rgba(0,150,255,0.08);
  }
}
.atag {
  font-size: 9px;
  padding: 1px 5px;
  border-radius: 2px;
  white-space: nowrap;
  &.a-yellow { color: #f5a623; background: rgba(245,166,35,0.12); border: 1px solid rgba(245,166,35,0.25); }
  &.a-green  { color: #22c55e; background: rgba(34,197,94,0.12);  border: 1px solid rgba(34,197,94,0.25); }
  &.a-blue   { color: #3b82f6; background: rgba(59,130,246,0.12); border: 1px solid rgba(59,130,246,0.25); }
}

/* ============================================ */
/*                   中间区域                    */
/* ============================================ */
.center-area {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0;
  min-width: 0;
}
.center-row {
  flex: 1;
  display: flex;
  gap: 0;
  align-items: stretch;
  min-height: 0;
}
.center-p { flex: 1; min-width: 0; }

/* 箭头 */
.arrow-h {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  flex-shrink: 0;
}
.arrow-h.flip { transform: scaleX(-1); }
.arrow-v-wrap {
  display: flex;
  justify-content: center;
  padding: 2px 0;
  flex-shrink: 0;
}

/* 仪表盘 */
.gauge-col {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
}
.gauge-box {
  width: 110px;
  height: 95px;
  &.sm { width: 95px; height: 80px; }
}
.gauge-lbl {
  font-size: 10px;
  color: #5a8ab5;
  margin-top: -8px;
}

/* 基础覆盖 */
.cov-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-left: 8px;
}
.cov-block { display: flex; flex-direction: column; gap: 2px; }
.cov-name { font-size: 12px; color: #e0f0ff; font-weight: 600; }
.cov-nums { display: flex; align-items: baseline; }
.cov-sub {
  display: flex;
  gap: 20px;
  font-size: 10px;
  color: #4a7a9f;
}

/* 装机调度 */
.disp-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-left: 6px;
}
.warn-group { display: flex; flex-direction: column; gap: 4px; }
.warn-head {
  font-size: 12px;
  color: #8ec8f8;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 6px;
}
.warn-row { display: flex; gap: 10px; }
.wn { display: flex; flex-direction: column; align-items: center; }
.wn-d { font-size: 9px; color: #4a7a9f; }

.tri-red {
  display: inline-block;
  width: 0; height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-bottom: 10px solid #ef4444;
  &.sm { border-left-width: 5px; border-right-width: 5px; border-bottom-width: 8px; }
}
.dia-green {
  display: inline-block;
  width: 10px; height: 10px;
  background: #22c55e;
  transform: rotate(45deg);
  &.sm { width: 8px; height: 8px; }
}

/* 质检关怀 */
.qc-sec {
  border: 1px solid rgba(0,150,255,0.12);
  border-radius: 4px;
  padding: 6px 8px;
  background: rgba(0,30,70,0.2);
}
.qc-role { font-size: 11px; color: #8ec8f8; margin-bottom: 5px; font-style: italic; }
.qc-cols { display: flex; gap: 10px; }
.qc-left, .qc-right { flex: 1; }
.qc-bl-title { font-size: 11px; color: #e0f0ff; font-weight: 600; margin-bottom: 3px; }
.qc-li {
  display: flex; align-items: center; gap: 4px;
  font-size: 11px; color: #8ec8f8; margin-bottom: 2px;
}
.dot {
  width: 6px; height: 6px; border-radius: 50%; flex-shrink: 0;
  &.blue { background: #3b82f6; }
}
.qc-hn {
  display: flex; align-items: baseline; gap: 2px; margin-bottom: 2px;
}
.hn-l { font-size: 10px; color: #5a8ab5; margin-left: 4px; }
.qc-satis { display: flex; align-items: center; gap: 12px; }
.qc-satis-left { flex-shrink: 0; }
.qc-satis-right { flex: 1; }
.satis-label { font-size: 11px; color: #8ec8f8; margin-bottom: 2px; }
.satis-nums { display: flex; align-items: baseline; }

/* 攻坚调度 */
.tk-top { display: flex; justify-content: center; }
.tk-blocks { display: flex; flex-direction: column; gap: 6px; }
.tk-block {
  border: 1px solid rgba(0,150,255,0.12);
  border-radius: 4px;
  padding: 5px 8px;
  background: rgba(0,30,70,0.2);
}
.tk-bl-title { font-size: 12px; color: #e0f0ff; font-weight: 600; margin-bottom: 3px; }
.tk-row { display: flex; gap: 14px; }
.tk-item { display: flex; flex-wrap: wrap; align-items: baseline; gap: 2px; }
.tk-d { font-size: 10px; color: #5a8ab5; width: 100%; }

/* ============================================ */
/*                   右侧区域                    */
/* ============================================ */
.right-area {
  width: 250px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

/* 预警图例 */
.legend-row {
  display: flex;
  gap: 10px;
  margin-right: auto;
}
.lg-item {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 10px;
  color: #8ec8f8;
}

/* 人员调度 */
.person-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 4px;
}
.person-cell {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3px 2px;
  border-radius: 3px;
  gap: 1px;
  &.c-red    { background: rgba(239,68,68,0.12);  border: 1px solid rgba(239,68,68,0.25);  .p-name { color: #fca5a5; } }
  &.c-yellow { background: rgba(245,166,35,0.12); border: 1px solid rgba(245,166,35,0.25); .p-name { color: #fcd34d; } }
  &.c-green  { background: rgba(34,197,94,0.12);  border: 1px solid rgba(34,197,94,0.25);  .p-name { color: #86efac; } }
  &.c-blue   { background: rgba(59,130,246,0.12); border: 1px solid rgba(59,130,246,0.25); .p-name { color: #93c5fd; } }
  &.c-cyan   { background: rgba(0,229,255,0.08);  border: 1px solid rgba(0,229,255,0.2);   .p-name { color: #67e8f9; } }
}
.p-area {
  font-size: 7px;
  color: #4a7a9f;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}
.p-name { font-size: 11px; font-weight: 600; }

/* 攻坚状态卡片 */
.status-cards {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.st-card {
  border: 1px solid rgba(0,180,255,0.2);
  border-radius: 6px;
  background: rgba(3,19,48,0.6);
  box-shadow: inset 0 0 20px rgba(0,100,200,0.06);
  padding: 7px 10px;
}
.st-hd {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 4px;
}
.st-icon {
  width: 20px; height: 20px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  &.ic-pending {
    background: rgba(245,166,35,0.2);
    border: 1px solid rgba(245,166,35,0.4);
    &::after { content: ""; width: 8px; height: 8px; background: #f5a623; border-radius: 50%; }
  }
  &.ic-ongoing {
    background: rgba(59,130,246,0.2);
    border: 1px solid rgba(59,130,246,0.4);
    &::after { content: ""; width: 8px; height: 8px; background: #3b82f6; clip-path: polygon(50% 0%, 0% 100%, 100% 100%); }
  }
  &.ic-done {
    background: rgba(34,197,94,0.2);
    border: 1px solid rgba(34,197,94,0.4);
    &::after { content: "\\2713"; color: #22c55e; font-size: 12px; font-weight: 700; }
  }
}
.st-title {
  font-size: 12px;
  font-weight: 600;
  color: #8ec8f8;
  &.done { color: #22c55e; }
}
.st-body {
  display: flex;
  gap: 14px;
}
.st-item {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 2px;
}
.st-label {
  font-size: 10px;
  color: #5a8ab5;
  width: 100%;
}
</style>
