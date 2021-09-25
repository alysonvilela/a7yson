const path = require('path')
const withImages = require('next-images')

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['media.graphcms.com'],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  },
  withImages
}
