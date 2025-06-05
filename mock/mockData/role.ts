export function roleList() {
  return {
    code: 0,
    message: "",
    data: {
      total: 100,
      list: [
        {
          name: "admin",
          description: "系统超级管理员，拥有所有权限",
          permissions: [
            "dashboard:view",
            "user:manage",
            "role:manage",
            "settings:edit",
            "logs:view",
          ],
          createTime: "2023-01-10",
        },
        {
          name: "editor",
          description: "内容编辑，可以管理文章和媒体资源",
          permissions: ["dashboard:view", "content:edit", "media:upload", "comments:moderate"],
          createTime: "2023-02-15",
        },
        {
          name: "viewer",
          description: "只读用户，仅可查看数据内容",
          permissions: ["dashboard:view", "content:view"],
          createTime: "2023-03-01",
        },
        {
          name: "moderator",
          description: "社区管理员，可以审核评论和用户内容",
          permissions: ["comments:moderate", "users:ban", "reports:review"],
          createTime: "2023-03-28",
        },
        {
          name: "analyst",
          description: "数据分析师，可以访问统计和报表",
          permissions: ["dashboard:view", "reports:view", "analytics:access"],
          createTime: "2023-04-10",
        },
        {
          name: "support",
          description: "客服支持，可以查看工单并回复用户",
          permissions: ["tickets:view", "tickets:reply", "users:view"],
          createTime: "2023-04-22",
        },
        {
          name: "developer",
          description: "系统开发人员，拥有开发接口权限",
          permissions: ["api:access", "logs:view", "devtools:use"],
          createTime: "2023-05-05",
        },
        {
          name: "finance",
          description: "财务人员，可以查看和导出财务数据",
          permissions: ["finance:view", "reports:export"],
          createTime: "2023-06-01",
        },
        {
          name: "operator",
          description: "运维角色，具备系统监控和部署权限",
          permissions: ["system:monitor", "deploy:execute", "logs:view"],
          createTime: "2023-06-18",
        },
        {
          name: "guest",
          description: "访客账号，权限最小化",
          permissions: ["dashboard:view"],
          createTime: "2023-07-01",
        },
      ],
    },
  };
}
