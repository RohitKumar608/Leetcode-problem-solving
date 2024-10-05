/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */

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
