<template>
  <div>
    <a-row :gutter="16">
      <a-col :span="8">
        <a-card title="复制指令" :bordered="false">
          <a-space>
            <span>被复制的内容</span>
            <a-button v-copy="'被复制的内容'" type="primary">复制</a-button>
          </a-space>
        </a-card>
      </a-col>
      <a-col :span="8">
        <a-card title="Loading 指令" :bordered="false">
          <p>card content</p>
        </a-card>
      </a-col>
      <a-col :span="8">
        <a-card title="Card title" :bordered="false">
          <p>card content</p>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>
