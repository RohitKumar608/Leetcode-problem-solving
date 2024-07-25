/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
  function mergeSort(arr1, arr2) {
    const result = []
    let left = 0
    let right = 0
    while (left < arr1.length && right < arr2.length) {
      if (arr1[left] < arr2[right]) {
        result[left + right] = arr1[left]
        left++
      } else {
        result[left + right] = arr2[right]
        right++
      }
    }
    result.push(...arr1.slice(left))
    result.push(...arr2.slice(right))
    return result
  }

  function merge(nums) {
    if (nums.length <= 1) {
      return nums
    }
    const mid = Math.floor(nums.length / 2)
    const left = nums.slice(0, mid)
    const right = nums.slice(mid)
    const result = mergeSort(merge(left), merge(right))
    return result
  }
  return merge(nums)
}

console.log(sortArray([5, 2, 3, 1]))
console.log(sortArray([5, 1, 1, 2, 0, 0]))
