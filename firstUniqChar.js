// https://leetcode.com/problems/first-unique-character-in-a-string
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  const mapSet = new Map()
  for (let i = 0; i < s.length; i++) {
    if (mapSet.has(s[i])) {
      mapSet.set(s[i], { val: mapSet.get(s[i]).val + 1, idx: i })
    } else {
      mapSet.set(s[i], { val: 1, idx: i })
    }
  }

  for (const [key, value] of mapSet) {
    if (value.val === 1) {
      return value.idx
    }
  }
  return -1
}
