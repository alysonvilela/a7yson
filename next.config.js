const path = require('path')
const withImages = require('next-images')

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['media.graphassets.com'],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  },
  withImages
}
