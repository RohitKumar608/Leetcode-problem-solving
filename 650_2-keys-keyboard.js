/**
 * @param {number} n
 * @return {number}
 */
var minSteps = function (n) {
  if (n === 1) return 0
  const map = new Map()
  function helper(count, paste) {
    if (count === n) {
      return 0
    }
    if (count > n) {
      return 1000
    }
    if (map.has(`${count},${paste}`)) {
      return map.get(`${count},${paste}`)
    }
    // paste
    const res1 = 1 + helper(count + paste, paste)
    //  copy and past
    const res2 = 2 + helper(count + count, count)
    map.set(`${count},${paste}`, Math.min(res1, res2))
    return map.get(`${count},${paste}`)
  }
  return 1 + helper(1, 1)
}

console.log(minSteps(5))
