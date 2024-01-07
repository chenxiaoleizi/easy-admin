import http from "./http";

// 登录
export function login(params: { username: string; password: string }) {
  return http.post("/login", params);
}

// 用户列表
export function getUserList(params) {
  return http.get("/userList", params);
}

// 角色列表
export function getRoleList(params) {
  return http.get("/roleList", params);
}

// 菜单列表
export function getMenuList(params) {
  return http.get("/menuList", params);
}
