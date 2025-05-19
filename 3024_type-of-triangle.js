/**
 * @param {number[]} nums
 * @return {string}
 */
var triangleType = function (nums) {
  const map = new Map()
  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1)
  }
  const isValidTriangle =
    nums[0] + nums[1] > nums[2] &&
    nums[0] + nums[2] > nums[1] &&
    nums[1] + nums[2] > nums[0]
  if (map.size === 1) return 'equilateral'
  if (map.size === 2 && isValidTriangle) return 'isosceles'
  if (isValidTriangle) return 'scalene'

  return 'none'
}
