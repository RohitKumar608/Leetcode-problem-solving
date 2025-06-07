/**
 * @param {string} s
 * @return {string}
 */
var clearStars = function (s) {
  const stack = []
  for (const char of s) {
    if (char === '*') {
      let minChar = 'z'
      let idx = 0
      for (let i = stack.length - 1; i >= 0; i--) {
        if (stack[i] < minChar) {
          minChar = stack[i]
          idx = i
        }
      }
      stack.splice(idx, 1)
    } else {
      stack.push(char)
    }
  }
  return stack.join('')
}

var clearStars = function (s) {
  const cache = Array.from({ length: 26 }, () => [])
  const ans = s.split('')
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '*') {
      ans[i] = ''
      for (let j = 0; j < 26; j++) {
        if (cache[j].length) {
          const idx = cache[j].pop()
          ans[idx] = ''
          break
        }
      }
    } else {
      const charCode = s[i].charCodeAt(0) - 97

      cache[charCode].push(i)
    }
  }

  return ans.join('')
}

console.log(clearStars('de*'))
