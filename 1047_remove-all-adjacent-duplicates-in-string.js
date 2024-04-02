/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates1 = function (s) {
  const mid = Math.floor(s.length / 2)
  if (s.length % 2 === 0) {
    for (let i = 0; i <= mid; i++) {
      if (s[i] !== s[s.length - 1 - i]) {
        break
      }
      if (i === mid) {
        return ''
      }
    }
  }
  let start = 0
  let len = s.length
  while (start < len) {
    if (s[start] == s[start + 1]) {
      s = s.replaceAll(`${s[start]}${s[start]}`, '')
      isDuplicate = true
      start = Math.max(0, start - 2)
    } else {
      start++
    }
    if (s == '') return s
    len = s.length
  }
  return s
}

var removeDuplicates1 = function (s) {
  let start = 0
  let len = s.length
  while (start < len) {
    if (s[start] == s[start + 1]) {
      s = s.replaceAll(`${s[start]}${s[start]}`, '')
      isDuplicate = true
      start = Math.max(0, start - 2)
    } else {
      start++
    }
    if (s == '') return s
    len = s.length
  }
  return s
}

var removeDuplicates = function (s) {
  const stack = []
  for (let i = 0; i < s.length; i++) {
    if (stack.length && stack[stack.length - 1] === s[i]) {
      stack.pop()
    } else {
      stack.push(s[i])
    }
  }
  return stack.join('')
}

console.log(removeDuplicates('abbaca'))
console.log(removeDuplicates('aaaaaaaaaa'))
console.log(removeDuplicates('aaaaaaaaa'))
