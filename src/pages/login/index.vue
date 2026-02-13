<template>
  <div class="login-container">
    <div class="login-box">
      <div class="login-header">
        <img src="/image/logo.svg" alt="Logo" class="login-logo" />
        <h2 class="login-title">{{ $CONFIG.APP_NAME }}</h2>
      </div>

      <el-form ref="loginFormRef" :model="loginForm" :rules="loginRules" class="login-form" @keyup.enter="handleLogin">
        <el-form-item prop="username">
          <el-input v-model="loginForm.username" :placeholder="$t('page.login.username')" :prefix-icon="User" clearable />
        </el-form-item>

        <el-form-item prop="password">
          <el-input v-model="loginForm.password" :placeholder="$t('page.login.password')" :prefix-icon="Lock" type="password" show-password clearable />
        </el-form-item>

        <el-form-item>
          <div class="login-action">
            <el-checkbox v-model="loginForm.remember">{{ $t('page.login.remember') || '记住密码' }}</el-checkbox>
            <router-link to="/reset_password" class="forgot-link">{{ $t('page.login.forgotPassword') || '忘记密码？' }}</router-link>
          </div>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" :loading="loading" class="login-btn" @click="handleLogin">
            {{ $t('page.login.login') || '登 录' }}
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { User, Lock } from "@element-plus/icons-vue";
import SystemEnum from "@/enum/SystemEnum";

export default {
  name: "LoginPage",
  data() {
    return {
      User,
      Lock,
      loading: false,
      loginForm: {
        username: "",
        password: "",
        remember: false,
      },
      loginRules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    handleLogin() {
      this.$refs.loginFormRef.validate(async (valid) => {
        if (!valid) return;

        this.loading = true;
        try {
          const res = await this.$API.auth.token.post(this.loginForm);
          if (res.token) {
            this.$TOOLS.cookie.set(SystemEnum.TOKEN_KEY, res.token);
            this.$TOOLS.data.set(SystemEnum.USER_INFO_KEY, res.userInfo);

            this.$router.push({ path: "/" });
          }
        } catch (err) {
          this.$message?.error?.(err.message || "登录失败");
        } finally {
          this.loading = false;
        }
      });
    },
  },
};
</script>

<style scoped lang="scss">
.login-container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: url("/image/login_bg.svg") no-repeat center center;
  background-size: cover;
}

.login-box {
  width: 400px;
  padding: 40px;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
}

.login-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
}

.login-logo {
  width: 60px;
  height: 60px;
  margin-bottom: 12px;
}

.login-title {
  margin: 0;
  font-size: 22px;
  font-weight: 600;
  color: #303133;
}

.login-form {
  width: 100%;
}

.login-action {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.forgot-link {
  font-size: 13px;
  color: var(--el-color-primary);
  text-decoration: none;

  &:hover {
    opacity: 0.8;
  }
}

.login-btn {
  width: 100%;
}
</style>
