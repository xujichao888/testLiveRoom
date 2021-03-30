const path = require("path");
module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '././' : '/', 
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [
        //加上自己的文件路径，不能使用别名
        path.resolve(__dirname, 'src/assets/styles/base.scss'),
      ]
    }
  }
}
