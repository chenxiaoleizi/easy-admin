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
          id: "1",
          username: "爱德华·诺顿",
          account: "Edward Harrison Norton",
          state: 1
        },
        {
          id: "2",
          username: "布拉德·皮特",
          account: "Brad Pitt",
          state: 1
        },
        {
          id: "3",
          username: "海伦娜·伯翰·卡特",
          account: "Helena Bonham Carter",
          state: 1
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
