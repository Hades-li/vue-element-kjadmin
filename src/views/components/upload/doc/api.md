### 属性
参数 | 说明 | 类型 | 可选值 | 默认值
:---|:---|:---|:---|:---
v-model  | files数据绑定 | Array | - | []
files-validate | 文件在上传前的验证函数，函数必须返回一个promise对象，resolve调用表示验证通过，reject表示不通过 | Function | - | -

### 事件
名称 | 说明 | 参数
:---|:---|:---
tab | 切换选项卡时触发事件 | item: {index: 索引号, id: 文件类型id, name: 选项卡名称 }
success | 上传成功触发事件 | files: 同v-model绑定数据一致
update | files数据有更新时触发 | files: 同v-model绑定数据一致
error | 当上传失败或验证失败时触发 | e: 报错信息
