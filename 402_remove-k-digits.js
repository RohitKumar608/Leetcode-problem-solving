/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function (num, k) {
  const stack = []
  for (let i = 0; i < num.length; i++) {
    if (stack.length && stack[stack.length - 1] > +num[i]) {
      while (stack.length && stack[stack.length - 1] > +num[i] && k) {
        stack.pop()
        k--
      }
    }
    stack.push(+num[i])
  }
  const result = stack
    .slice(0, stack.length - k)
    .join('')
    .replace(/^0+(?=\d)/, '')
  return result
}

console.log(removeKdigits('1432219', 3))
console.log(removeKdigits('10200', 1))
console.log(removeKdigits('10001', 4))
console.log(removeKdigits('1234567890', 9))
