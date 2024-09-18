/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function (nums) {
  nums.sort((a, b) => {
    return `${b}${a}` - `${a}${b}`
  })
  let result = ''
  for (let i = 0; i < nums.length; i++) {
    result += nums[i]
  }
  if (result[0] == '0') return '0'
  return result
}

var largestNumber = function (nums) {
  nums.sort((a, b) => {
    return `${b}${a}` - `${a}${b}`
  })
  const result = nums.join('')
  return result[0] === '0' ? '0' : result
}

console.log(largestNumber([3, 30, 34, 5, 9]))
