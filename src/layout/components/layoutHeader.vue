<template>
  <el-header class="layout-header" :height="_height">
    <div class="logo-warp">
      <el-icon :size="35"
        ><component :is="$TOOLS.iconName('Admin')"
      /></el-icon>
      <span>{{ $t("app.title") }}</span>
    </div>
    <el-space class="header-right">
      <el-tooltip
        class="box-item"
        effect="dark"
        content="代码仓库"
        placement="bottom"
      >
        <el-link
          class="panel-item"
          :underline="false"
          href="https://gitee.com/nxqf/zy-admin-template"
          target="_blank"
          ><el-icon :size="18"
            ><component :is="$TOOLS.iconName('Github')" /></el-icon
        ></el-link>
      </el-tooltip>
      <el-dropdown
        trigger="click"
        placement="bottom-end"
        @command="handleUserMenu"
      >
        <el-button class="panel-item user-warp" link style="font-size: 18px">
          <el-avatar
            class="user-avatar"
            :size="24"
            :src="userInfo.portrait || ''"
            >{{ userInfo.usernameF }}</el-avatar
          >
          <label>{{ userInfo.username }}</label>
        </el-button>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="uc">{{
              $t("usercenter.header_menu.uc")
            }}</el-dropdown-item>
            <el-dropdown-item divided command="outLogin">{{
              $t("usercenter.header_menu.out_login")
            }}</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </el-space>
  </el-header>
</template>

<script>
import SystemEnum from "@/enum/SystemEnum"

export default {
  name: "LayoutHeader",
  props: {
    height: { type: String, default: () => "48px" },
  },
  watch: {
    height: function (height) {
      this._height = height;
    },
  },
  created() {
    var userInfo = this.$TOOLS.data.get("USER_INFO");
    this.userInfo.user_id = userInfo.userId || -1;
    this.userInfo.portrait = userInfo.portrait || "";
    this.userInfo.username = userInfo.userName;
    this.userInfo.usernameF = userInfo.userName.substring(0, 1);
  },
  data() {
    return {
      _height: "48px",

      userInfo: {
        user_id: "",
        portrait: "",
        usernameF: "",
        username: "",
      },
    };
  },
  mounted() {
    this._height = this.height;
  },
  methods: {
    handleUserMenu(command) {
      switch (command) {
        case "uc":
          this.$router.push({ name: "usercenter" });
          break;
        case "clearCache":
          this.$confirm(
            this.$t("message.confirm.clear_cache"),
            this.$t("message.tips"),
            {
              type: "info",
            }
          )
            .then(() => {
              const loading = this.$loading();
              this.$TOOLS.data.clear();
              this.$TOOLS.cookie.remove(SystemEnum.TOKEN_KEY);
              this.$router.replace({ name: "login" });
              setTimeout(() => {
                loading.close();
                location.reload();
              }, 1000);
            })
            .catch(() => {
              //取消
            });
          break;
        case "outLogin":
          this.$confirm(
            this.$t("message.confirm.sign_out"),
            this.$t("message.tips"),
            {
              type: "warning",
              confirmButtonText: this.$t("button_text.sign_out"),
              confirmButtonClass: "el-button--danger",
            }
          )
            .then(() => {
              const loading = this.$loading();
              this.$TOOLS.data.clear();
              this.$TOOLS.cookie.remove(SystemEnum.TOKEN_KEY);
              this.$router.replace({ name: "login" });
              setTimeout(() => {
                loading.close();
                location.reload();
              }, 1000);
            })
            .catch(() => {
              //取消退出
            });
          break;
      }
    },
  },
};
</script>

<style scoped lang="scss">
.layout-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--el-color-black);
  z-index: 9;
}

.logo-warp {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 20px;
  font-weight: 700;
  color: var(--el-color-white);
}

.header-right {
  height: 100%;
  :deep(.el-space__item) {
    height: 100%;
    &:hover {
      background-color: rgba(52, 52, 52, 0.3);
    }
  }
}

.panel-item {
  color: #fff;
  padding: 0 10px;
}

.user-warp {
  .user-avatar {
    margin-right: 5px;
  }
  label {
    font-size: 14px;
    cursor: pointer;
  }
}

html.dark {
  .layout-header {
    background-color: var(--el-bg-color);
  }
  .logo-warp {
    color: var(--el-text-color-primary);
  }
  .header-right {
    :deep(.el-space__item) {
      &:hover {
        background-color: var(--el-disabled-bg-color);
      }
    }
  }
}
</style>
