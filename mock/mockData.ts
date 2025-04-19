function login() {
  return {
    code: 0,
    message: "",
    data: {
      id: 1,
      username: "陈磊",
      phone: 18356070599,
      avatar: "",
      token: "O5XTTaRFHAu70mmXcX0EYLE7WrSKk5T2q030ed4KxgPgDKGiyvhxtyV8YQ1xSbD3",
    },
  };
}

function auth() {
  const data = [
    {
      path: "/",
      name: "首页",
      id: 1,
    },
    {
      path: "/system",
      name: "系统设置",
      id: 2,
      children: [
        {
          path: "/system/userList",
          name: "用户列表",
          id: 3,
        },
        {
          path: "/system/roleList",
          name: "角色列表",
          id: 4,
        },
        {
          path: "/system/menuList",
          name: "菜单列表",
          id: 5,
        },
        {
          path: "/system/dict",
          name: "字典",
          id: 12,
        },
      ],
    },
    {
      path: "/directive",
      name: "指令",
      id: 6,
    },
    {
      path: "/composable",
      name: "组合式函数",
      id: 7,
    },
    {
      path: "/frequentlyUsed",
      name: "常用业务",
      id: 8,
      children: [
        {
          path: "/frequentlyUsed/chart",
          name: "图表",
          id: 9,
        },
        {
          path: "/frequentlyUsed/components",
          name: "组件",
          id: 12,
        },
      ],
    },
    {
      path: "/components",
      name: "组件",
      id: 10,
      children: [
        {
          path: "/components/table",
          name: "表格",
          id: 11,
        },
        {
          path: "/components/tree",
          name: "树",
          id: 11,
        },
        {
          path: "/components/upload",
          name: "上传",
          id: 11,
        },
      ],
    },
  ];

  let uid = 1;
  const stack = [...data];
  while (stack.length > 0) {
    const node = stack.shift();
    if (!node) continue;
    node.id = uid;
    if (node.children && node.children.length > 0) {
      stack.unshift(...node.children);
    }
    uid++;
  }

  return {
    code: 0,
    message: "",
    data,
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
          state: 1,
        },
        {
          id: "2",
          username: "布拉德·皮特",
          account: "Brad Pitt",
          state: 1,
        },
        {
          id: "3",
          username: "海伦娜·伯翰·卡特",
          account: "Helena Bonham Carter",
          state: 1,
        },
      ],
    },
  };
}

function roleList() {
  return {
    code: 0,
    message: "",
    data: {
      total: 100,
      list: [
        {
          id: "1",
          rolename: "超级管理员",
          remark: "超级管理员拥有所有权限",
          state: 1,
        },
        {
          id: "2",
          rolename: "管理员",
          remark: "普通管理员可增删改查",
          state: 1,
        },
        {
          id: "3",
          rolename: "普通用户",
          remark: "普通用户可部分增删改查",
          state: 1,
        },
      ],
    },
  };
}

function menuList() {
  return {
    code: 0,
    message: "",
    data: {
      total: 11,
      list: [
        {
          path: "/",
          name: "home",
          label: "首页",
          id: 1,
        },
        {
          path: "/system",
          name: "system",
          label: "系统设置",
          id: 2,
          children: [
            {
              path: "/system/userList",
              name: "userList",
              label: "用户列表",
              id: 3,
            },
            {
              path: "/system/roleList",
              name: "roleList",
              label: "角色列表",
              id: 4,
            },
            {
              path: "/system/menuList",
              name: "menuList",
              label: "菜单列表",
              id: 5,
            },
          ],
        },
        {
          path: "/directive",
          name: "directive",
          label: "指令",
          id: 6,
        },
      ],
    },
  };
}

function dictList() {
  return {
    code: 0,
    data: [
      {
        dictKey: "userType",
        dictItems: [
          { dictItemKey: 0, dictItemName: "地球人" },
          { dictItemKey: 1, dictItemName: "外星人" },
        ],
      },
    ],
  };
}

const mockData: Record<string, any> = {
  "/login": login,
  "/auth": auth,
  "/userList": userList,
  "/roleList": roleList,
  "/menuList": menuList,
  "/dictList": dictList,
};

export default mockData;
