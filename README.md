# vue-api

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

##### 多文件改造步骤
###### build/utils.js
```
/*
* 动态设置多入口文件函数
* @param extensions {array} 例子['.js','html]
* @param foldersName {string} 例子 './src' 以本文件为坐标
* @param exclude 路径中需要排除的文件夹，{string} 例子 ['/module'] 路径中就不会有 /module
* @param fullPath {boolean} 默认true 是否获取完整路径
* 不完整路径 { detail: '../src/module/detail/detail.js'}
* 完整路径 { 'module/detail/detail': '../src/module/detail/detail.js',
* */
exports.getEntries = function(extensions, foldersName, fullPath = true, excludeName) {
  const res = {}
  extensions = extensions || ['.js']
  excludeName = excludeName || ''
  extensions.forEach(function(validExt) {
    const srcDir = foldersName
    const files = glob.sync(srcDir + "/**/*" + validExt).filter(function(filepath) {
      // 获取文件的后缀(包括.)
      const extension = path.extname(filepath)
      // 获取文件名，把文件后缀去掉
      const basename = path.basename(filepath, validExt)
      // 使用文件后缀名判断文件类型
      if (extension != validExt) return false
      // 入口文件不能以'_'开头
      if (basename[0] == '_') return false
      // 入口文件必须以：英文、数字、-、_开头
      if (!basename.match(/^[A-Za-z_0-9-]+$/)) return false

      // 生成一个15字节的Buffer实例
      let buf = new Buffer(15)
      // 打开文件
      let fd = fs.openSync(filepath, 'r')
      // 读取文件前13个字符
      fs.readSync(fd, buf, 0, 15)
      // 把二进制转换成字符
      let directive = buf.toString()
      // 关闭打开的文件
      fs.closeSync(fd)
      // 如果文件的前15个字符 === /!*not entry*!/ 就不作为入口文件
      return directive !== '/!*not entry*!/'
    })

    files.forEach(function(filepath) {
      var key = path.relative(foldersName + excludeName, filepath)
      if (fullPath) {
        key = key.replace(validExt, '')
      } else {
        key = path.basename(filepath, validExt)
      }

      res[key] = filepath
    })
  })
  return res
}
```
###### build/webpack.base.conf.js
```
  // 配置webpack 入口
  entry: utils.getEntries('./src/module/**/*.js'),
  
  // 配置bwepack插件，生成对应的html
  let pages = utils.getEntries(['.html'], './src', false)
  for(var page in pages) {
    // 配置生成的html文件，定义路径等
    var conf = {
      filename: `${page}.html`,
      template: pages[page], //模板路径
      inject: true,
      excludeChunks: Object.keys(pages).filter(item => {
        return (item != page)
      })
    }
    // 需要生成几个html文件，就配置几个HtmlWebpackPlugin对象
    webpackConfig.plugins.push(new HtmlWebpackPlugin(conf))
  }
```
###### webpack.dev.conf.js 和webpack.base.conf.js 一样
