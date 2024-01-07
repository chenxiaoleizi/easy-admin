import http from "./http";

// 获取权限信息
export function getAuthData() {
  return http.post("/auth");
}
