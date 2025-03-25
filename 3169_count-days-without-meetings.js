/**
 * @param {number} days
 * @param {number[][]} meetings
 * @return {number}
 */
var countDays = function (days, meetings) {
  if (meetings.length === 1) {
    return days - (meetings[0][1] - meetings[0][0] + 1)
  }
  meetings.sort((a, b) => {
    if (a[0] == b[0]) {
      return a[1] - b[1]
    }
    return a[0] - b[0]
  })
  let result = 0
  let leftPointer = 0
  let maxEnd = 0
  for (let i = 1; i <= days; i++) {
    while (leftPointer < meetings.length && i > meetings[leftPointer][1]) {
      leftPointer++
    }
    if (leftPointer === meetings.length) {
      return result + days - maxEnd
    }
    maxEnd = Math.max(maxEnd, meetings[leftPointer][1])

    if (leftPointer < meetings.length && i < meetings[leftPointer][0]) {
      result++
    }
    if (leftPointer > meetings.length - 1) {
      result++
    }
  }
  return result
}

var countDays = function (days, meetings) {
  meetings.sort((a, b) => a[0] - b[0])

  let mergedMeetings = []
  for (let meeting of meetings) {
    if (
      mergedMeetings.length === 0 ||
      meeting[0] > mergedMeetings[mergedMeetings.length - 1][1]
    ) {
      mergedMeetings.push(meeting)
    } else {
      mergedMeetings[mergedMeetings.length - 1][1] = Math.max(
        mergedMeetings[mergedMeetings.length - 1][1],
        meeting[1]
      )
    }
  }
  console.log(mergedMeetings)
  let meetingDaysCount = 0
  for (let [start, end] of mergedMeetings) {
    meetingDaysCount += end - start + 1
  }

  return days - meetingDaysCount
}

// console.log(countDays(1000000000, [[1, 1]]))
console.log(
  countDays(10, [
    [5, 7],
    [1, 3],
    [9, 10],
  ])
)

console.log(
  countDays(57, [
    [3, 49],
    [23, 44],
    [21, 56],
    [26, 55],
    [23, 52],
    [2, 9],
    [1, 48],
    [3, 31],
  ])
)

// console.log(countDays(1000000000, [[1, 1000000000]]))
