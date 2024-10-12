/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minGroups = function (intervals) {
  const start = []
  const end = []
  for (let i = 0; i < intervals.length; i++) {
    const [startTime, endTime] = intervals[i]
    start.push(startTime)
    end.push(endTime)
  }
  start.sort((a, b) => a - b)
  end.sort((a, b) => a - b)
  let leftPointer = 0
  let rightPointer = 0
  let result = 0
  while (leftPointer < intervals.length && leftPointer >= rightPointer) {
    if (end[rightPointer] > start[leftPointer]) {
      leftPointer++
    } else {
      rightPointer++
    }
    result = Math.max(result, leftPointer - rightPointer)
  }
  return result
}

console.log(
  minGroups([
    [5, 10],
    [6, 8],
    [1, 5],
    [2, 3],
    [1, 10],
  ])
)
