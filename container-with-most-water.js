// https://leetcode.com/problems/container-with-most-water

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let maxVolume = 0
  let leftPointer = 0
  let rightPointer = height.length - 1
  while (leftPointer < rightPointer) {
    const minVal = Math.min(height[leftPointer], height[rightPointer])
    maxVolume = Math.max(minVal * (rightPointer - leftPointer), maxVolume)
    if (height[leftPointer] < height[rightPointer]) {
      leftPointer = leftPointer + 1
    } else {
      rightPointer = rightPointer - 1
    }
  }
  return maxVolume
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]))
console.log(maxArea([1, 1]))
