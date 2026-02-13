<template>
  <div class="reset-container">
    <div class="reset-box">
      <div class="reset-header">
        <img src="/image/logo.svg" alt="Logo" class="reset-logo" />
        <h2 class="reset-title">重置密码</h2>
      </div>

      <el-form ref="resetFormRef" :model="resetForm" :rules="resetRules" class="reset-form">
        <el-form-item prop="username">
          <el-input v-model="resetForm.username" placeholder="请输入用户名" :prefix-icon="User" clearable />
        </el-form-item>

        <el-form-item prop="newPassword">
          <el-input v-model="resetForm.newPassword" placeholder="请输入新密码" :prefix-icon="Lock" type="password" show-password clearable />
        </el-form-item>

        <el-form-item prop="confirmPassword">
          <el-input v-model="resetForm.confirmPassword" placeholder="请确认新密码" :prefix-icon="Lock" type="password" show-password clearable />
        </el-form-item>

        <el-form-item>
          <el-button type="primary" :loading="loading" class="reset-btn" @click="handleReset">
            重置密码
          </el-button>
        </el-form-item>

        <el-form-item>
          <div class="back-action">
            <router-link to="/login" class="back-link">返回登录</router-link>
          </div>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { User, Lock } from "@element-plus/icons-vue";

export default {
  name: "ResetPasswordPage",
  data() {
    const validateConfirmPassword = (rule, value, callback) => {
      if (value !== this.resetForm.newPassword) {
        callback(new Error("两次输入的密码不一致"));
      } else {
        callback();
      }
    };

    return {
      User,
      Lock,
      loading: false,
      resetForm: {
        username: "",
        newPassword: "",
        confirmPassword: "",
      },
      resetRules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
        ],
        newPassword: [
          { required: true, message: "请输入新密码", trigger: "blur" },
          { min: 6, message: "密码长度不能少于6位", trigger: "blur" },
        ],
        confirmPassword: [
          { required: true, message: "请确认新密码", trigger: "blur" },
          { validator: validateConfirmPassword, trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    handleReset() {
      this.$refs.resetFormRef.validate(async (valid) => {
        if (!valid) return;

        this.loading = true;
        try {
          this.$message?.success?.("密码重置成功");
          this.$router.push({ path: "/login" });
        } catch (err) {
          this.$message?.error?.(err.message || "密码重置失败");
        } finally {
          this.loading = false;
        }
      });
    },
  },
};
</script>

<style scoped lang="scss">
.reset-container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: url("/image/login_bg.svg") no-repeat center center;
  background-size: cover;
}

.reset-box {
  width: 400px;
  padding: 40px;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
}

.reset-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
}

.reset-logo {
  width: 60px;
  height: 60px;
  margin-bottom: 12px;
}

.reset-title {
  margin: 0;
  font-size: 22px;
  font-weight: 600;
  color: #303133;
}

.reset-form {
  width: 100%;
}

.reset-btn {
  width: 100%;
}

.back-action {
  display: flex;
  justify-content: center;
  width: 100%;
}

.back-link {
  font-size: 13px;
  color: var(--el-color-primary);
  text-decoration: none;

  &:hover {
    opacity: 0.8;
  }
}
</style>
