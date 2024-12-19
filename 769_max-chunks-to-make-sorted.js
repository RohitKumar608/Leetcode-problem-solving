/**
 * @param {number[]} arr
 * @return {number}
 */

console.log(new PriorityQueue())
var maxChunksToSorted = function (arr) {
  let currMax = -1
  let res = 0
  for (let i = 0; i < arr.length; i++) {
    currMax = Math.max(currMax, arr[i])
    if (currMax === i) {
      res++
    }
  }
  return res
}

console.log(maxChunksToSorted([1, 4, 3, 6, 0, 7, 8, 2, 5]))
// console.log(maxChunksToSorted([4, 3, 2, 1, 0]))
