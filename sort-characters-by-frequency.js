// https://leetcode.com/problems/sort-characters-by-frequency/

/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
  const map = {}
  for (let i = 0; i < s.length; i++) {
    map[s[i]] = (map[s[i]] || 0) + 1
  }
  const keyVal = Object.entries(map).sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0].localeCompare(b[0])
    }
    return b[1] - a[1]
  })

  let result = ''
  for (const [key, val] of keyVal) {
    result += key.repeat(val)
  }
  return result
}
