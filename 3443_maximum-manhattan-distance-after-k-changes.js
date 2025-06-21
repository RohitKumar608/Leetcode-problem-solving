/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxDistance = function (s, k) {
  let ans = 0
  for (const hor of ['E', 'W']) {
    for (const ver of ['N', 'S']) {
      let remainingK = k
      let nextX = 0
      let nextY = 0
      for (let i = 0; i < s.length; i++) {
        let ch = s[i]
        if (ch === hor && remainingK > 0) {
          ch = ch === 'W' ? 'E' : 'W'
          remainingK--
        } else if (ch === ver && remainingK > 0) {
          ch = ch === 'N' ? 'S' : 'N'
          remainingK--
        }
        nextX += ch === 'E'
        nextX -= ch === 'W'
        nextY += ch === 'N'
        nextY -= ch === 'S'
        ans = Math.max(ans, Math.abs(nextX) + Math.abs(nextY))
      }
    }
  }
  return ans
}

console.log(maxDistance('NWSE', 1))
