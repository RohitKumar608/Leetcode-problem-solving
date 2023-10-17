// https://leetcode.com/problems/count-of-smaller-numbers-after-self/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var countSmaller1 = function (nums) {
  const result = []
  for (let i = 0; i < nums.length; i++) {
    const data = nums[i]
    let count = 0
    for (let j = i + 1; j < nums.length; j++) {
      if (data > nums[j]) {
        count++
      }
    }
    result.push(count)
  }
  return result
}

// ************************************************************************************

const toNode = (value, index) => ({
  value,
  index,
})

const merge = (nums, left, right, counter) => {
  const sorted = []

  const middle = Math.floor((left + right) / 2)
  let leftIndex = left
  let rightIndex = middle + 1
  let rightCounter = 0

  while (leftIndex <= middle || rightIndex <= right) {
    if (
      rightIndex > right ||
      (leftIndex <= middle && nums[leftIndex].value <= nums[rightIndex].value)
    ) {
      sorted.push(nums[leftIndex])
      counter[nums[leftIndex].index] += rightCounter
      leftIndex++
    } else {
      sorted.push(nums[rightIndex])
      rightIndex++
      rightCounter++
    }
  }

  for (let i = 0; i <= right - left; i++) {
    nums[left + i] = sorted[i]
  }
}

const mergeSort = (nums, left, right, counter) => {
  if (left >= right) {
    return
  }

  const middle = Math.floor((left + right) / 2)
  mergeSort(nums, left, middle, counter)
  mergeSort(nums, middle + 1, right, counter)

  merge(nums, left, right, counter)
}

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var countSmaller = function (nums) {
  const output = new Array(nums.length).fill(0)
  const nodes = nums.map(toNode)

  mergeSort(nodes, 0, nums.length - 1, output)

  return output
}

console.log(countSmaller([5, 2, 6, 1]))
