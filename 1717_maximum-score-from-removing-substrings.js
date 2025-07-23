/**
 * @param {string} s
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var maximumGain = function (s, x, y) {
  let result = 0
  function replaceAndGainPoint(s, replaceWord, point) {
    const stack = []
    let result = 0
    for (let i = 0; i < s.length; i++) {
      stack.push(s[i])
      while (
        stack.length > 0 &&
        stack[stack.length - 1] === replaceWord[1] &&
        stack[stack.length - 2] === replaceWord[0]
      ) {
        stack.pop()
        stack.pop()
        result += point
      }
    }
    return [result, stack]
  }
  const replaceWord = x > y ? ['a', 'b'] : ['b', 'a']
  const [point, arr] = replaceAndGainPoint(s, replaceWord, Math.max(x, y))
  result += point
  replaceWord.reverse()
  const [point2] = replaceAndGainPoint(arr, replaceWord, Math.min(x, y))
  result += point2
  return result
}

console.log(maximumGain('cdbcbbaaabab', 4, 5))
