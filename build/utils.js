'use strict'
const path = require('path')
const config = require('../config')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const packageConfig = require('../package.json')
const glob = require('glob')
const fs = require('fs')

exports.assetsPath = function (_path) {
  const assetsSubDirectory = process.env.NODE_ENV === 'production'
    ? config.build.assetsSubDirectory
    : config.dev.assetsSubDirectory

  return path.posix.join(assetsSubDirectory, _path)
}

exports.cssLoaders = function (options) {
  options = options || {}

  const cssLoader = {
    loader: 'css-loader',
    options: {
      sourceMap: options.sourceMap
    }
  }

  const postcssLoader = {
    loader: 'postcss-loader',
    options: {
      sourceMap: options.sourceMap
    }
  }

  // generate loader string to be used with extract text plugin
  function generateLoaders (loader, loaderOptions) {
    const loaders = options.usePostCSS ? [cssLoader, postcssLoader] : [cssLoader]

    if (loader) {
      loaders.push({
        loader: loader + '-loader',
        options: Object.assign({}, loaderOptions, {
          sourceMap: options.sourceMap
        })
      })
    }

    // Extract CSS when that option is specified
    // (which is the case during production build)
    if (options.extract) {
      return ExtractTextPlugin.extract({
        use: loaders,
        fallback: 'vue-style-loader'
      })
    } else {
      return ['vue-style-loader'].concat(loaders)
    }
  }

  // https://vue-loader.vuejs.org/en/configurations/extract-css.html
  return {
    css: generateLoaders(),
    postcss: generateLoaders(),
    less: generateLoaders('less'),
    sass: generateLoaders('sass', { indentedSyntax: true }),
    scss: generateLoaders('sass'),
    stylus: generateLoaders('stylus'),
    styl: generateLoaders('stylus')
  }
}

// Generate loaders for standalone style files (outside of .vue)
exports.styleLoaders = function (options) {
  const output = []
  const loaders = exports.cssLoaders(options)

  for (const extension in loaders) {
    const loader = loaders[extension]
    output.push({
      test: new RegExp('\\.' + extension + '$'),
      use: loader
    })
  }

  return output
}

exports.createNotifierCallback = () => {
  const notifier = require('node-notifier')

  return (severity, errors) => {
    if (severity !== 'error') return

    const error = errors[0]
    const filename = error.file && error.file.split('!').pop()

    notifier.notify({
      title: packageConfig.name,
      message: severity + ': ' + error.name,
      subtitle: filename || '',
      icon: path.join(__dirname, 'logo.png')
    })
  }
}
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
