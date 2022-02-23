const port = process.env.port || process.env.npm_config_port || 80 // 端口
module.exports = {
  devServer: {
    host: '0.0.0.0',
    port: port,
    open: true,
    proxy: {
      [process.env.VUE_APP_BASE_API]: {
        target: 'http://localhost:8080',
        changeOrigin: true,
        pathRewrite: {
          ['^' + process.env.VUE_APP_BASE_API]: ''
        }
      }
    }
  }
}
