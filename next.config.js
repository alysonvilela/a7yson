const path = require('path')
const withImages = require('next-images')

module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  },
  withImages
}
