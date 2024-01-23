// https://leetcode.com/problems/intersection-of-two-arrays-ii

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1, nums2) {
  const map = {}
  const result = {}
  for (let i = 0; i < nums1.length; i++) {
    map[nums1[i]] = (map[nums1[i]] || 0) + 1
  }
  for (let i = 0; i < nums2.length; i++) {
    if (map[nums2[i]]) {
      map[nums2[i]] = 8888
    } else {
      result[nums2[i]] = nums2[i]
    }
  }
  const result2 = []
  for (const key in map) {
    if (map[key] !== 8888) {
      result2.push(+key)
    }
  }
  return [result2, Object.keys(result)]
}
