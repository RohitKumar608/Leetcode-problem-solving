/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function (nums) {
  const minVal = Math.min(...nums)
  const smallValIndex = []
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === minVal) {
      smallValIndex.push(i)
    }
  }
  for (const x of smallValIndex) {
    const sortedArr = []
    let isAllSorted = true
    for (let i = 0; i < nums.length; i++) {
      sortedArr.push(nums[(i + x) % nums.length])
      if (
        sortedArr.length > 1 &&
        sortedArr[sortedArr.length - 1] < sortedArr[sortedArr.length - 2]
      ) {
        isAllSorted = false
      }
    }
    if (isAllSorted) {
      return true
    }
  }
  return false
}

var check = function (nums) {
  const n = nums.length
  let count = 0

  for (let i = 0; i < n; i++) {
    if (nums[i] > nums[(i + 1) % n]) {
      count++
    }
    if (count > 1) {
      return false
    }
  }

  return true
}

// console.log(check([3, 4, 5, 1, 2]))
// console.log(check([2, 1, 3, 4]))
console.log(check([6, 10, 6]))
console.log(check([1, 2, 3]))
