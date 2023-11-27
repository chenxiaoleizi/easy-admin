function login() {
  return {
    code: 0,
    message: "",
    data: {
      username: "陈磊",
      token: "O5XTTaRFHAu70mmXcX0EYLE7WrSKk5T2q030ed4KxgPgDKGiyvhxtyV8YQ1xSbD3"
    }
  };
}

function auth() {
  return {
    code: 0,
    message: "",
    data: [
      {
        path: "/",
        name: "home",
        label: "首页"
      },
      {
        path: "/system",
        name: "system",
        label: "系统设置",
        children: [
          {
            path: "/system/userList",
            name: "userList",
            label: "用户列表"
          },
          {
            path: "/system/roleList",
            name: "roleList",
            label: "角色列表"
          },
          {
            path: "/system/menuList",
            name: "menuList",
            label: "菜单列表"
          }
        ]
      }
    ]
  };
}

function userList() {
  return {
    code: 0,
    message: "",
    data: {
      total: 100,
      list: [
        {
          key: "1",
          name: "胡彦斌",
          age: 32,
          address: "西湖区湖底公园1号"
        },
        {
          key: "2",
          name: "胡彦祖",
          age: 42,
          address: "西湖区湖底公园2号"
        }
      ]
    }
  };
}

const mockData = {
  "/login": login,
  "/auth": auth,
  "/userList": userList
};

export default mockData;
