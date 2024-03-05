/**
 * @param {string} s
 * @return {number}
 */

var minimumLength1 = function (s) {
  s = s.split('')
  if (s.length === 1) {
    return 1
  }
  if (s[0] !== s[s.length - 1]) {
    return s.length
  }
  while (true) {
    let left = s.length - 1
    let right = 0
    let isLeftDiffer = false
    let isRightDiffer = false
    if (s.length === 0 || s.length === 1) {
      return s.length
    }
    if (s.length && s[0] !== s[s.length - 1]) {
      return s.length
    }
    for (let i = 0; i < s.length; i++) {
      if (s[i] !== s[left] && !isLeftDiffer) {
        left = i
        isLeftDiffer = true
      }
      if (s[s.length - 1 - i] !== s[right] && !isRightDiffer) {
        right = s.length - i
        isRightDiffer = true
      }
    }
    s = s.slice(0, right)
    s = s.slice(left, s.length)
  }
}
var minimumLength = function (s) {
  let left = 0
  let right = s.length - 1
  while (left < right && s[left] === s[right]) {
    const tempStr = s[left]
    while (left <= right && tempStr === s[left]) {
      left++
    }
    while (left <= right && tempStr === s[right]) {
      right--
    }
  }
  return right - left + 1
}

console.log(minimumLength('aabccabba'))
console.log(minimumLength('ca'))
console.log(minimumLength('aa'))

console.log(
  minimumLength('bbbbbbbbbbbbbbbbbbbbbbbbbbbabbbbbbbbbbbbbbbccbcbcbccbbabbb')
)
