// https://leetcode.com/problems/sort-colors/
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  return quickSort(nums, 0, nums.length - 1)
}

function quickSort(array, left, right) {
  let pivot
  let partitionIndex

  if (left < right) {
    pivot = right
    partitionIndex = partition(array, pivot, left, right)

    //sort left and right
    quickSort(array, left, partitionIndex - 1)
    quickSort(array, partitionIndex + 1, right)
  }
  return array
}

function partition(array, pivot, left, right) {
  let pivotValue = array[pivot]
  let partitionIndex = left

  for (let i = left; i < right; i++) {
    if (array[i] < pivotValue) {
      swap(array, i, partitionIndex)
      partitionIndex++
    }
  }
  swap(array, right, partitionIndex)
  return partitionIndex
}

function swap(array, firstIndex, secondIndex) {
  var temp = array[firstIndex]
  array[firstIndex] = array[secondIndex]
  array[secondIndex] = temp
}
