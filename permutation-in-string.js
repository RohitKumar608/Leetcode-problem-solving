// https://leetcode.com/problems/permutation-in-string/description/
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion1 = function (p, s) {
  const map = {}

  for (let idx = 0; idx < p.length; idx++) {
    map[p[idx]] = (map[p[idx]] || 0) + 1
  }
  for (let idx = 0; idx < s.length; idx++) {
    let mapCopy = { ...map }
    if (idx + p.length > s.length) {
      break
    }
    for (let j = idx; j < idx + p.length; j++) {
      if (mapCopy[s[j]]) mapCopy[s[j]] = mapCopy[s[j]] - 1
      if (mapCopy[s[j]] === 0) delete mapCopy[s[j]]
    }
    const keys = Object.entries(mapCopy)
    if (keys.length === 0) {
      return true
    }
  }
  return false
}

var checkInclusion = function (p, s) {
  const map = new Array(26).fill(0)

  for (let idx = 0; idx < p.length; idx++) {
    const modeVal = p.charCodeAt(idx) % 97
    map[modeVal] = map[modeVal] + 1
  }

  const compareMap = new Array(26).fill(0)
  for (let idx = 0; idx < p.length; idx++) {
    const modeVal = s.charCodeAt(idx) % 97
    compareMap[modeVal] = compareMap[modeVal] + 1
  }
  if (map.toString() === compareMap.toString()) return true
  for (let idx = p.length; idx < s.length; idx++) {
    const modeVal = s.charCodeAt(idx) % 97

    const pevModVal = s.charCodeAt(idx - p.length) % 97
    compareMap[pevModVal] = compareMap[pevModVal] - 1
    compareMap[modeVal] = compareMap[modeVal] + 1
    if (map.toString() === compareMap.toString()) return true
  }
  return false
}
