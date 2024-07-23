/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function (nums) {
  const map = {}
  let result = []
  for (const num of nums) {
    if (!map[num]) map[num] = []
    map[num].push(num)
  }
  const sortedByFreq = Object.entries(map).sort((a, b) => {
    if (a[1].length == b[1].length) {
      return b[0] - a[0]
    }
    return a[1].length - b[1].length
  })
  for (const [key, value] of sortedByFreq) {
    result = result.concat(value)
  }
  return result
}

var frequencySort = function (nums) {
  let map = new Map()

  for (let n of nums) {
    map.set(n, map.get(n) + 1 || 1)
  }

  return nums.sort((a, b) => map.get(a) - map.get(b) || b - a)
}

console.log(frequencySort([1, 1, 2, 2, 2, 3]))
console.log(frequencySort([2, 3, 1, 3, 2]))
