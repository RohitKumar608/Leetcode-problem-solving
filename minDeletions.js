// https://leetcode.com/problems/minimum-deletions-to-make-character-frequencies-unique/

/**
 * @param {string} s
 * @return {number}
 */
var minDeletions = function (s) {
  const map = {}
  for (let i = 0; i < s.length; i++) {
    map[s[i]] = (map[s[i]] || 0) + 1
  }
  const valueMap = {}
  let count = 0
  for (const key in map) {
    if (!valueMap[map[key]]) {
      valueMap[map[key]] = map[key]
    } else {
      while (valueMap[map[key]]) {
        map[key] -= 1
        count++
        if (!valueMap[map[key]]) break
      }
      valueMap[map[key]] = map[key]
    }
  }
  return count
}

console.log(minDeletions('aaabbbcc'))
console.log(minDeletions('aaabbbcc'))
console.log(minDeletions('ceabaacb'))
