// const req = require.context(`.`, true, /\.svg$/)

// req.keys().forEach(key => {
//   const componentName = key.replace(/\.\/(.+).svg/, `$1`)
//   module.exports[componentName] = req(key).default
// })

import pizza from './pizza.svg'
import trash from './trash.svg'

export default {
  pizza,
  trash,
}
