/**
 * @param {number[][]} nums1
 * @param {number[][]} nums2
 * @return {number[][]}
 */
var mergeArrays = function (nums1, nums2) {
  let result = []
  let left = 0
  let right = 0
  while (left < nums1.length || right < nums2.length) {
    if (left >= nums1.length) {
      result.push(...nums2.slice(right))
      return result
    }
    if (right >= nums2.length) {
      result.push(...nums1.slice(left))
      return result
    }
    if (nums1[left][0] < nums2[right][0]) {
      result.push([nums1[left][0], nums1[left][1]])
      left++
    } else if (nums1[left][0] > nums2[right][0]) {
      result.push([nums2[right][0], nums2[right][1]])
      right++
    } else if (nums1[left][0] === nums2[right][0]) {
      result.push([nums1[left][0], nums1[left][1] + nums2[right][1]])
      left++
      right++
    }
  }
  return result
}

console.log(
  mergeArrays(
    [
      [1, 2],
      [2, 3],
      [4, 5],
    ],
    [
      [1, 4],
      [3, 2],
      [4, 1],
    ]
  )
)
