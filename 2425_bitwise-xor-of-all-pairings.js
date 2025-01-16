/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var xorAllNums = function (nums1, nums2) {
  let xor = 0
  if (nums2.length % 2 == 1) {
    for (let i = 0; i < nums1.length; i++) {
      xor ^= nums1[i]
    }
  }
  if (nums1.length % 2 === 1) {
    for (let i = 0; i < nums2.length; i++) {
      xor ^= nums2[i]
    }
  }

  return xor
}

console.log(xorAllNums([2, 1, 3], [10, 2, 5, 0]))
console.log(xorAllNums([8, 6, 29, 2, 26, 16, 15, 29], [24, 12, 12]))
