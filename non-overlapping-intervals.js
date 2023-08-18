// https://leetcode.com/problems/non-overlapping-intervals/description/s

/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
  let result = 0
  intervals.sort((a, b) => b[1] - a[1]).sort((a, b) => a[0] - b[0])
  for (let i = 0; i < intervals.length; i++) {
    let isOverlapped = false
    for (let j = 1 + i; j < intervals.length; j++) {
      if (
        intervals[i][0] >= intervals[j][0] &&
        intervals[i][1] >= intervals[j][1]
      ) {
        isOverlapped = true
      }
    }
    if (isOverlapped) {
      result++
    }
  }
  return result
}

console.log(
  eraseOverlapIntervals([
    [1, 2],
    [2, 3],
    [3, 4],
    [1, 3],
  ])
)
