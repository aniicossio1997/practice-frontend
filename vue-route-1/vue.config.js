// vue.config.js

// /**
//  * @type {import('@vue/cli-service').ProjectOptions}
//  */
//  module.exports = {
//   // options...
// }

module.exports = {
  // publicPath: '/practice-frontend/vue-route-1/'
  publicPath: process.env.NODE_ENV === 'production'
    ? '/practice-frontend/vue-route-1/'
    : '/'
}