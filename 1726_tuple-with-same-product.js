/**
 * @param {number[]} nums
 * @return {number}
 */
var tupleSameProduct = function (nums) {
  let count = 0
  let map = new Map()
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      const product = nums[i] * nums[j]
      if (map.has(product)) {
        count += map.get(product)
        map.set(product, map.get(product) + 1)
      } else {
        map.set(product, 1)
      }
    }
  }
  return count * 8
}

console.log(tupleSameProduct([1, 2, 4, 5, 10]))
console.log(tupleSameProduct([2, 3, 4, 6, 8, 12]))
