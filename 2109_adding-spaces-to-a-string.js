/**
 * @param {string} s
 * @param {number[]} spaces
 * @return {string}
 */
var addSpaces = function (s, spaces) {
  const set = new Set(spaces)
  let result = ''
  let left = 0
  for (let i = 0; i < s.length; i++) {
    if (set.has(i)) {
      result += ' '
    }
    result += s[left]
    left++
  }
  return result
}

var addSpaces = function (s, spaces) {
  const result = []
  for (let i = 0; i < spaces.length; i++) {
    if (i === 0) {
      if (spaces === 0) {
        result.push('')
      } else {
        result.push(s.substring(0, spaces[i]))
      }
    } else {
      result.push(s.substring(spaces[i - 1], spaces[i]))
    }
  }
  result.push(s.substring(spaces.at(-1), s.length))
  return result.join(' ')
}

console.log(addSpaces('LeetcodeHelpsMeLearn', [8, 13, 15]))
