/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSubsequence = function (nums, k) {
  const sortedArr = [...nums].sort((a, b) => a - b)
  const data = sortedArr.slice(nums.length - k, nums.length)
  const dataMap = data.reduce((prev, curr) => {
    prev[curr] = (prev[curr] || 0) + 1
    return prev
  }, {})
  const result = []
  for (let i = 0; i < nums.length; i++) {
    if (dataMap[nums[i]]) {
      result.push(nums[i])
      dataMap[nums[i]]--
    }
  }
  return result
}

var maxSubsequence = function (nums, k) {
  const data = []
  for (let i = 0; i < k; i++) {
    data.push([nums[i], i])
  }
  data.sort((a, b) => b[0] - a[0])
  for (let i = k; i < nums.length; i++) {
    if (data[data.length - 1][0] < nums[i]) {
      data.pop()
      data.push([nums[i], i])
      data.sort((a, b) => b[0] - a[0])
    }
  }
  return data.sort((a, b) => a[1] - b[1]).map((a) => a[0])
}

var maxSubsequence = function (nums, k) {
  if (nums.length == k) return nums
  let ans = []
  for (let i = 0; i < nums.length; i++) {
    ans.push([nums[i], i])
  }
  ans.sort((a, b) => b[0] - a[0])
  let topValues = ans.slice(0, k)
  topValues.sort((a, b) => a[1] - b[1])
  return topValues.map((a) => a[0])
}

console.log(maxSubsequence([-1, -2, 3, 4], 3))
