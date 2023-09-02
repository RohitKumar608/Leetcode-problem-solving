// https://leetcode.com/problems/ransom-note/description/

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  const mapSet = {}
  let count = 0
  for (let i = 0; i < ransomNote.length; i++) {
    mapSet[ransomNote[i]] = (mapSet[ransomNote[i]] || 0) + 1
  }
  for (let i = 0; i < magazine.length; i++) {
    if (mapSet[magazine[i]]) {
      mapSet[magazine[i]] = mapSet[magazine[i]] - 1
      count++
    }
    if (count === ransomNote.length) return true
  }
  return false
}
