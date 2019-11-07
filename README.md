# 基于 webpack4 的 Vue 工程项目模板

- 这是一个不依赖于 Vue CLI 的 Vue 项目模板
- 充分利用 webpack4 的默认配置，简化配置信息，更加标准化
- 跳过繁琐的配置过程，拿来即用
- 可高度自定制
- 已配置为样式表属性自动添加浏览器私有前缀
- 已配置 babel 支持 JavaScript 高级语法
- 已配置图形文件的打包，小于 8KB 的图片将被转为 Base64格式
- 已配置格式化取消分号、双引号转单引号

```powershell
  # 安装所有依赖项
  npm i

  # 支持热更新的开发模式
  npm run dev

  # 打包压缩
  npm run build
```