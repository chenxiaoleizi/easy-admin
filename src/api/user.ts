import http from "./http";

// 登录
export function login(params: { username: string; password: string }) {
  return http.post("/login", params);
}

// 用户列表
type UserList = {
  total: number;
  list: {
    id: string;
    username: string;
    account: string;
    state: number;
  };
};
export function getUserList(params) {
  return http.get<UserList>("/userList", params);
}

// 角色列表
export function getRoleList(params) {
  return http.get("/roleList", params);
}

// 菜单列表
export function getMenuList(params) {
  return http.get("/menuList", params);
}
