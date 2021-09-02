module.exports = {
  bundler: '@vuepress/vite',
  bundlerConfig: {
    server: {
      fs: {
        // 可以为项目根目录的上一级提供服务
        allow: ['/node_modules']
      }
    }
  },
}