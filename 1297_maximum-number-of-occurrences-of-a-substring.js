/**
 * @param {string} s
 * @param {number} maxLetters
 * @param {number} minSize
 * @param {number} maxSize
 * @return {number}
 */
var maxFreq = function (s, maxLetters, minSize, maxSize) {
  const cache = new Map()
  const map = new Map()
  let left = 0
  for (let i = 0; i <= s.length; i++) {
    cache.set(s[i], (cache.get(s[i]) || 0) + 1)
    if (i - left >= maxSize) {
      const str = s.slice(left, i)

      if (str.length >= minSize && str.length <= maxSize) {
        map.set(str, (map.get(str) || 0) + 1)
      }

      cache.set(s[left], (cache.get(s[left]) || 0) - 1)
      if (cache.get(s[left]) === 0) cache.delete(s[left])
      left++
    }
    while (cache.size > maxLetters) {
      const str = s.slice(left, i)
      if (str.length >= minSize && str.length <= maxSize) {
        map.set(str, (map.get(str) || 0) + 1)
      }

      cache.set(s[left], cache.get(s[left]) - 1)
      if (cache.get(s[left]) === 0) cache.delete(s[left])
      left++
    }

    if (i - left >= minSize) {
      const str = s.slice(i - minSize, i)
      if (str.length >= minSize && str.length <= maxSize) {
        map.set(str, (map.get(str) || 0) + 1)
      }
    }
  }
  let result = 0
  for (const [key, val] of map) {
    result = Math.max(result, val)
  }
  return result
}

console.log(maxFreq('aababcaab', 2, 3, 4))
console.log(maxFreq('aaaa', 1, 3, 3))

console.log(maxFreq('abcabababacabcabc', 3, 3, 10))
