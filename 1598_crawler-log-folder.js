/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function (logs) {
  const stack = []
  for (const log of logs) {
    if (log === './') {
      continue
    }
    if (log === '../') {
      stack.pop()
    } else {
      stack.push(log)
    }
  }
  return stack.length
}

var minOperations = function (logs) {
  let result = 0
  for (const log of logs) {
    if (log === './') {
      continue
    }
    if (log === '../') {
      result = Math.max(result - 1, 0)
    } else {
      result++
    }
  }
  return Math.max(result, 0)
}

console.log(minOperations(['d1/', 'd2/', '../', 'd21/', './']))
console.log(minOperations(['d1/', 'd2/', './', 'd3/', '../', 'd31/']))
console.log(minOperations(['d1/', '../', '../', '../']))
