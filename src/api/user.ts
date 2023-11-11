import http from "./http";

// 登录
export function login(params: { username: string; password: string }) {
  return http.post("/login", params);
}

// 获取权限信息
export function getAuth() {
  return http.post("/auth");
}
