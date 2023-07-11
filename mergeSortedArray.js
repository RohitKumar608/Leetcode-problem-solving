// https://leetcode.com/problems/merge-sorted-array/
var merge = function (nums1, m, nums2, n) {
  if (n == 0) {
    return nums1
  }
  let i = 0
  let j = 0
  while (i < m || j < n) {
    if ((nums1[i + j] <= nums2[j] || nums2[j] === undefined) && i < m) {
      i++
    } else if (j < n) {
      let newVal = nums1[i + j]
      nums1[i + j] = nums2[j]
      if (i + j + 1 < m + n) {
        for (let idx = i + j + 1; idx < nums1.length; idx++) {
          const tempVal = nums1[idx]
          nums1[idx] = newVal
          newVal = tempVal
        }
      }
      j++
    }
  }
  return nums1
}
