/**
 * @param {number[]} nums
 * @return {number}
 */

var majorityElement = function (nums) {
  const map = nums.reduce((prev, curr) => {
    prev[curr] = (prev[curr] || 0) + 1
    return prev
  }, {})
  let maxVal = 0
  let maxKey = 0
  for (const key in map) {
    if (map[key] > maxVal) {
      maxVal = map[key]
      maxKey = key
    }
  }
  return +maxKey
}

var majorityElement = function (nums) {
  let ele = nums[0]
  let count = 1

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === ele) {
      count++
    } else {
      count--
    }

    if (count < 0) {
      ele = nums[i]
      count = 1
    }
  }

  return ele
}
