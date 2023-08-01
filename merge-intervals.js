// https://leetcode.com/problems/merge-intervals/

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0])
  const result = [intervals[0]]

  for (let i = 1; i < intervals.length; i++) {
    if (result[result.length - 1][1] >= intervals[i][0]) {
      result[result.length - 1][1] = Math.max(
        intervals[i][1],
        result[result.length - 1][1]
      )
    } else {
      result.push(intervals[i])
    }
  }
  return result
}

console.log(
  merge([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ])
)
