/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minSum = function (nums1, nums2) {
  let sum1 = 0
  let sum2 = 0
  let zeroCount1 = 0
  let zeroCount2 = 0
  for (let i = 0; i < nums1.length; i++) {
    sum1 += nums1[i]
    zeroCount1 += nums1[i] == 0 ? 1 : 0
  }
  for (let i = 0; i < nums2.length; i++) {
    sum2 += nums2[i]
    zeroCount2 += nums2[i] == 0 ? 1 : 0
  }
  if (sum1 == sum2) {
    if (zeroCount1 == 0 && zeroCount2 == 0) return sum1
    if (Math.min(zeroCount1, zeroCount2) == 0) return -1
    return (requiredSum = sum2 + Math.max(zeroCount1, zeroCount2))
  }

  if (sum1 > sum2 && zeroCount2 == 0) return -1
  if (sum1 < sum2 && zeroCount1 == 0) return -1
  if (sum1 < sum2 && zeroCount2 == 0) {
    if (sum1 + zeroCount1 > sum2) {
      return -1
    }
  }
  if (sum2 < sum1 && zeroCount1 == 0) {
    if (sum2 + zeroCount2 > sum1) {
      return -1
    }
  }

  return Math.max(sum2 + zeroCount2, sum1 + zeroCount1)
}

var minSum = function (nums1, nums2) {
  let sum1 = 0
  let sum2 = 0
  let zeroCount1 = 0
  let zeroCount2 = 0
  for (let i = 0; i < nums1.length; i++) {
    sum1 += nums1[i]
    if (nums1[i] == 0) {
      zeroCount1++
      sum1++
    }
  }
  for (let i = 0; i < nums2.length; i++) {
    sum2 += nums2[i]
    if (nums2[i] == 0) {
      zeroCount2++
      sum2++
    }
  }
  if ((zeroCount1 === 0 && sum2 > sum1) || (zeroCount2 === 0 && sum1 > sum2)) {
    return -1
  }
  return Math.max(sum2, sum1)
}

console.log(
  minSum(
    [20, 0, 18, 11, 0, 0, 0, 0, 0, 0, 17, 28, 0, 11, 10, 0, 0, 15, 29],
    [16, 9, 25, 16, 1, 9, 20, 28, 8, 0, 1, 0, 1, 27]
  )
)
console.log(minSum([2, 0, 2, 0], [1, 4]))
