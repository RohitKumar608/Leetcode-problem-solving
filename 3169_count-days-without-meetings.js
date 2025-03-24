/**
 * @param {number} days
 * @param {number[][]} meetings
 * @return {number}
 */
var countDays = function (days, meetings) {
  meetings.sort((a, b) => {
    if (a[0] == b[0]) {
      return a[1] - b[1]
    }
    return a[0] - b[0]
  })
  let result = 0
  let leftPointer = 0
  for (let i = 1; i <= days; i++) {
    while (leftPointer < meetings.length && i > meetings[leftPointer][1]) {
      leftPointer++
    }
    if (leftPointer < meetings.length && i < meetings[leftPointer][0]) {
      result++
    }
    if (leftPointer > meetings.length - 1) {
      result++
    }
  }
  return result
}
