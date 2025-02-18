/**
 * @param {string} pattern
 * @return {string}
 */
var smallestNumber = function (pattern) {
  const stack = []
  let result = []
  for (let i = 0; i < pattern.length; i++) {
    stack.push(i + 1)
    if (pattern[i] === 'I') {
      while (stack.length) {
        result.push(stack.pop())
      }
    }
  }
  stack.push(pattern.length + 1)
  result = result.concat(stack.reverse())
  return result.join('')
}

// console.log(smallestNumber('IDID')) // 13254;
// console.log(smallestNumber('III')) // 12345;
// console.log(smallestNumber('DDD')) // 54321;
console.log(smallestNumber('IIIDIDDD'))
