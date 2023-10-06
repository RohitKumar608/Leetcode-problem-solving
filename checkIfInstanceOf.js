var checkIfInstanceOf = function (obj, classFunction) {
  if (obj === null || obj === undefined || typeof classFunction !== 'function')
    return false

  let currPotentialPrototype = Object.getPrototypeOf(obj)

  while (currPotentialPrototype !== null) {
    if (currPotentialPrototype === classFunction.prototype) return true
    currPotentialPrototype = Object.getPrototypeOf(currPotentialPrototype)
  }

  return false
}

// var checkIfInstanceOf = function (obj, classFunction) {
//   if (obj === null || obj === undefined || typeof classFunction !== 'function')
//     return false
//   return Object(obj) instanceof classFunction
// }

/**
 * checkIfInstanceOf(new Date(), Date); // true
 */
// console.log(checkIfInstanceOf(null, null))
// console.log(checkIfInstanceOf(null, Object))
// console.log(checkIfInstanceOf('', Array))
// console.log(checkIfInstanceOf('', Object))
// console.log(checkIfInstanceOf({}, String))

// console.log(checkIfInstanceOf('', String))

// console.log(checkIfInstanceOf(5, Number))
console.log(checkIfInstanceOf(Symbol(), Symbol))
