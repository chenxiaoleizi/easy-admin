import http from "../http";

// 获取角色列表
export function getRoleList() {
  return http.post("/roleList");
}
