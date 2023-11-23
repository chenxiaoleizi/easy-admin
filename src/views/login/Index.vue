<template>
  <div class="login">
    <div class="login-form">
      <a-typography-title :level="2"> 登录 </a-typography-title>
      <a-form
        layout="vertical"
        :model="formState"
        :rules="rules"
        autocomplete="off"
        @finish="onFinish"
        @finish-failed="onFinishFailed"
      >
        <a-form-item label="用户名" name="username">
          <a-input v-model:value="formState.username" size="large" />
        </a-form-item>

        <a-form-item label="密码" name="password">
          <a-input-password v-model:value="formState.password" size="large" />
        </a-form-item>

        <a-form-item>
          <a-button type="primary" html-type="submit" block size="large">
            登录
          </a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { reactive } from "vue";
import { useRouter } from "vue-router";
import { useUserStore } from "@/store/user";

interface FormState {
  username: string;
  password: string;
}
const router = useRouter();
const userStore = useUserStore();
const rules = {
  username: [{ required: true, message: "请输入用户名!" }],
  password: [{ required: true, message: "请输入密码!" }]
};

const formState = reactive<FormState>({
  username: "",
  password: ""
});

function onFinish(values: FormState) {
  userStore.login(values).then(() => {
    // 登录成功跳转到首页
    router.push({ name: "home" });
  });
}

function onFinishFailed(errorInfo: any) {
  console.log("Failed:", errorInfo);
}
</script>

<style>
.login {
  width: 100%;
  height: 100%;
  background: url("@/assets/images/planet.jpg");
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
}
.login-form {
  width: 440px;
  background: white;
  padding: 40px;
  border-radius: 6px;
  text-align: center;
}
.login-form .ant-form-item label {
  font-size: 13px;
  font-weight: 600;
  color: #141414;
}
</style>
