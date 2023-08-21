var threeSum = function (nums) {
  const result = []
  nums.sort((a, b) => a - b)
  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue
    }
    let left = i + 1
    let right = nums.length - 1
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right]
      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]])
        left++
        while (nums[left] === nums[left - 1] && left < right) {
          left++
        }
      } else if (sum > 0) {
        right--
      } else {
        left++
      }
    }
  }
  return result
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]))

console.log(threeSum([0, 0, 0, 0]))

// console.log(threeSum([1, 2, -2, -1]))
