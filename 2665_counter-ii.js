// https://leetcode.com/problems/counter-ii/description/
/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
  const tempData = init
  const increment = () => ++init
  const decrement = () => --init
  const reset = () => {
    init = tempData
    return init
  }
  return { increment, decrement, reset }
}

const counter = createCounter(5)
console.log(counter)
console.log(counter.increment()) // 6
console.log(counter.reset()) // 5
console.log(counter.decrement()) // 4
