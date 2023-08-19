// https://leetcode.com/problems/non-overlapping-intervals/description/s

/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0])
  let prevEnd = intervals[0][1]
  let result = 0
  for (let i = 1; i < intervals.length; i++) {
    const [start, end] = intervals[i]
    if (start >= prevEnd) {
      prevEnd = end
    } else {
      result++
      prevEnd = Math.min(prevEnd, end)
    }
  }
  return result
}

console.log(
  eraseOverlapIntervals([
    [1, 100],
    [11, 22],
    [1, 11],
    [2, 12],
  ])
)

console.log(
  eraseOverlapIntervals([
    [1, 2],
    [2, 3],
    [3, 4],
    [1, 3],
  ])
)
