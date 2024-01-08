// https://leetcode.com/problems/median-of-two-sorted-arrays

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let mergedArr = []
  let i = 0
  let j = 0
  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] < nums2[j]) {
      mergedArr[i + j] = nums1[i]
      i++
    } else {
      mergedArr[i + j] = nums2[j]
      j++
    }
  }
  mergedArr = mergedArr.concat(nums1.slice(i)).concat(nums2.slice(j))
  const mid = Math.floor((mergedArr.length - 1) / 2)
  if (mergedArr.length % 2 === 0) {
    return (mergedArr[mid] + mergedArr[mid + 1]) / 2
  }
  return mergedArr[mid]
}

console.log(findMedianSortedArrays([1, 3], [2]))
