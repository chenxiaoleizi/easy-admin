import http from "./http";

// 登录
export function login(params: { username: string; password: string }) {
  return http.post("/login", params);
}

// 获取权限信息
export function getAuthData() {
  return http.post("/auth");
}

// 用户列表
export function getUserList(params) {
  return http.get("/userList", params);
}
