/**
 * @param {number} bottom
 * @param {number} top
 * @param {number[]} special
 * @return {number}
 */
var maxConsecutive = function (bottom, top, special) {
  let result = 0
  special.sort((a, b) => a - b)
  for (let i = 1; i < special.length; i++) {
    result = Math.max(result, special[i] - special[i - 1] - 1)
  }
  result = Math.max(result, top - special[special.length - 1])
  result = Math.max(result, special[0] - bottom)
  return result
}
var maxConsecutive1 = function (bottom, top, special) {
  let result = 0
  const map = {}
  special.forEach((val) => {
    map[val] = val
  })
  let lastValue = null
  let firstValues = null
  for (const key in map) {
    if (lastValue) {
      result = Math.max(result, map[key] - lastValue - 1)
      lastValue = map[key]
    }
    if (firstValues === null) {
      firstValues = map[key]
    }
    lastValue = map[key]
  }

  result = Math.max(result, top - lastValue)
  result = Math.max(result, firstValues - bottom)
  return result
}

// console.log(maxConsecutive(2, 9, [4, 6]))

// console.log(maxConsecutive(6, 8, [7, 6, 8]))

console.log(maxConsecutive(1, 50, [12, 24, 38, 48]))
