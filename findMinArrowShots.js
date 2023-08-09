// https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons

/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function (intervals) {
  intervals.sort((a, b) => a[1] - b[1])
  let leftPointer = 0
  let movingPointer = 1
  let result = 1
  while (leftPointer < intervals.length && movingPointer < intervals.length) {
    if (intervals[movingPointer][0] > intervals[leftPointer][1]) {
      result++
      leftPointer = movingPointer
      movingPointer++
    } else {
      movingPointer++
    }
  }
  return result
}

console.log(
  findMinArrowShots([
    [3, 9],
    [7, 12],
    [3, 8],
    [6, 8],
    [9, 10],
    [2, 9],
    [0, 9],
    [3, 9],
    [0, 6],
    [2, 8],
  ])
)

// console.log(
//   findMinArrowShots([
//     [1, 6],
//     [2, 8],
//     [7, 12],
//     [10, 16],
//   ])
// )

// console.log(
//   findMinArrowShots([
//     [1, 2],
//     [3, 4],
//     [5, 6],
//     [7, 8],
//   ])
// )

// console.log(
//   findMinArrowShots([
//     [2, 3],
//     [2, 3],
//   ])
// )
