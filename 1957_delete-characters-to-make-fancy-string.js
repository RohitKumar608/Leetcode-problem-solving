/**
 * @param {string} s
 * @return {string}
 */
var makeFancyString = function (s) {
  const stack = []
  for (let i = 0; i < s.length; i++) {
    if (
      stack[stack.length - 1] === stack[stack.length - 2] &&
      stack[stack.length - 1] === s[i]
    ) {
      continue
    } else {
      stack.push(s[i])
    }
  }
  return stack.join('')
}

/**
 * @param {string} s
 * @return {string}
 */
var makeFancyString = function (s) {
  let result = s[0]
  let count = 1

  for (let i = 1; i < s.length; i++) {
    if (s[i] === s[i - 1]) {
      count++
    } else {
      count = 1
    }
    if (count < 3) {
      result += s[i]
    }
  }
  return result
}

console.log(makeFancyString('aaabaaaa'))
