import http from "./http";

// 登录
export function login(params: { username: string; password: string }) {
  return http.post("/login", params);
}
