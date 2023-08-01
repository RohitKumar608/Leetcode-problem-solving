/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  if (intervals.length === 0) return [newInterval]
  if (newInterval.length === 0) return intervals
  let inserted = false
  const len = intervals.length
  for (let i = 0; i < len; i++) {
    if (intervals[i][1] >= newInterval[0]) {
      if (intervals[i][0] >= newInterval[0]) {
        intervals.splice(i, 0, newInterval)
      } else {
        intervals.splice(i + 1, 0, newInterval)
      }
      inserted = true
      break
    }
  }
  if (!inserted) intervals.push(newInterval)
  return merge(intervals)
}

var merge = function (intervals) {
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
  insert(
    [
      [1, 3],
      [6, 9],
    ],
    [2, 5]
  )
)
