import http from "./index";

// 登录
export function login(params: { username: string; password: string }) {
  return http.post("/login", params);
}
