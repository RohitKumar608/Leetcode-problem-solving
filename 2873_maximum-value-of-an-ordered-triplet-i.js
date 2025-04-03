/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumTripletValue = function (nums) {
  const n = nums.length
  let res = 0,
    imax = 0,
    dmax = 0
  for (let k = 0; k < n; k++) {
    res = Math.max(res, dmax * nums[k])
    dmax = Math.max(dmax, imax - nums[k])
    imax = Math.max(imax, nums[k])
  }
  return res
}

// console.log(maximumTripletValue([1, 10, 3, 4, 19]))
// console.log(maximumTripletValue([12, 6, 1, 2, 7]))
// console.log(maximumTripletValue([18, 15, 8, 13, 10, 9, 17, 10, 2, 16, 17]))
// console.log(maximumTripletValue([13, 4, 3, 19, 16, 14, 17, 6, 20, 6, 16, 4]))
console.log(
  maximumTripletValue([6, 14, 20, 19, 19, 10, 3, 15, 12, 13, 8, 1, 2, 15, 3])
)
