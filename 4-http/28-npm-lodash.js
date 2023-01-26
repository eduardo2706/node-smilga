const _= require('lodash')

const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items)

const itos=  [1, 2, 3, [4, 5, 6]]
console.log(newItems)
console.log(itos);