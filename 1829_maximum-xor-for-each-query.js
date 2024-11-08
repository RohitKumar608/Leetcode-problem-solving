/**
 * @param {number[]} nums
 * @param {number} maximumBit
 * @return {number[]}
 */
var getMaximumXor = function (nums, maximumBit) {
  let xor = 0
  for (let i = 0; i < nums.length; i++) {
    xor ^= nums[i]
  }
  nums.reverse()
  const result = []
  const mask = (1 << maximumBit) - 1
  for (let i = 0; i < nums.length; i++) {
    result.push(xor ^ mask)
    xor ^= nums[i]
  }
  return result
}
