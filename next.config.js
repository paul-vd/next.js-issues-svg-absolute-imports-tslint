const withTypescript = require('@zeit/next-typescript')
const withLess = require('@zeit/next-less')
const lessToJS = require('less-vars-to-js')
const fs = require('fs')
const path = require('path')
const withImages = require('next-images')
const optimizedImages = require('next-optimized-images')

// Where your antd-custom.less file lives
const themeVariables = lessToJS(fs.readFileSync(path.resolve(__dirname, './assets/antd-custom.less'), 'utf8'))

// fix: prevents error when .less files are required by node
if (typeof require !== 'undefined') {
  require.extensions['.less'] = file => {}
}

// Image Asset Config
const imagesConfig = { exclude: path.resolve(__dirname, './assets/svg') }

// AntD default style overrides
const lessConfig = {
  lessLoaderOptions: {
    javascriptEnabled: true,
    modifyVars: themeVariables, // make your antd custom effective
  },
}

module.exports = withTypescript(
  // optimizedImages(
  withImages(
    withLess({
      ...imagesConfig,
      ...lessConfig,
      webpack(config, options) {
        config.resolve.alias['components'] = path.join(__dirname, 'components')
        config.resolve.alias['utils'] = path.join(__dirname, 'utils')
        config.resolve.alias['hooks'] = path.join(__dirname, 'utils/hooks')
        config.resolve.alias['static'] = path.join(__dirname, 'static')
        config.resolve.alias['images'] = path.join(__dirname, 'assets/images')
        config.resolve.alias['svg'] = path.join(__dirname, 'assets/svg')
        config.resolve.alias['assets'] = path.join(__dirname, 'assets')
        return config
      },
    })
  )
  // )
)
