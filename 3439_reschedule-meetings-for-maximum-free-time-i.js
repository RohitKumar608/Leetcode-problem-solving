/**
 * @param {number} eventTime
 * @param {number} k
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @return {number}
 */
var maxFreeTime = function (eventTime, k, startTime, endTime) {
  const freeGaps = [0, startTime[0]]
  for (let i = 1; i < startTime.length; i++) {
    freeGaps.push(startTime[i] - endTime[i - 1])
  }
  freeGaps.push(eventTime - endTime[endTime.length - 1])
  let freeDuration = 0
  let currSum = 0
  console.log(freeGaps)
  for (let i = 0; i < freeGaps.length; i++) {
    currSum += freeGaps[i] - (i >= k + 1 ? freeGaps[i - (k + 1)] : 0)
    freeDuration = Math.max(currSum, freeDuration)
  }
  return freeDuration
}

// console.log(maxFreeTime(10, 1, [0, 2, 9], [1, 4, 10]))
// console.log(maxFreeTime(5, 1, [1, 3], [2, 5]))
// console.log(maxFreeTime(5, 2, [0, 1, 2, 3, 4], [1, 2, 3, 4, 5]))
console.log(maxFreeTime(21, 2, [18, 20], [20, 21]))
