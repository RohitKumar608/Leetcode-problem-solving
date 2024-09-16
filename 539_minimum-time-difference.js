/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function (timePoints) {
  timePoints.sort((a, b) => {
    const [h1, m1] = [a[0] + a[1], a[3] + a[4]]
    const [h2, m2] = [b[0] + b[1], b[3] + b[4]]
    if (h1 === h2) {
      return m1 - m2
    }
    return h1 - h2
  })
  let minDiff = Infinity
  for (let i = 0; i < timePoints.length; i++) {
    const [hour, minute] = timePoints[i].split(':')
    if (timePoints[i + 1]) {
      const [h1, m1] = timePoints[i].split(':')
      const [h2, m2] = timePoints[i + 1].split(':')
      let minuteDiff = (h2 - h1) * 60

      minuteDiff += Math.min(minDiff, m2 - m1)

      minDiff = Math.min(minDiff, minuteDiff)
    }
    timePoints[i] = +hour <= 12 ? `${24 + +hour}:${minute}` : timePoints[i]
  }
  timePoints.sort((a, b) => {
    const [h1, m1] = [a[0] + a[1], a[3] + a[4]]
    const [h2, m2] = [b[0] + b[1], b[3] + b[4]]
    if (h1 === h2) {
      return m1 - m2
    }
    return h1 - h2
  })
  for (let i = 0; i < timePoints.length - 1; i++) {
    const [h1, m1] = timePoints[i].split(':')
    const [h2, m2] = timePoints[i + 1].split(':')
    let minuteDiff = (h2 - h1) * 60

    minuteDiff += Math.min(minDiff, m2 - m1)

    minDiff = Math.min(minDiff, minuteDiff)
  }
  return Math.abs(minDiff)
}

var findMinDifference = function (timePoints) {
  const minutes = []
  let result = Infinity
  for (let i = 0; i < timePoints.length; i++) {
    const [hour, minute] = timePoints[i].split(':')
    minutes.push(hour * 60 + +minute)
    if (hour <= 12) {
      minutes.push((24 + +hour) * 60 + +minute)
    }
  }
  minutes.sort((a, b) => b - a)
  for (let i = 0; i < minutes.length - 1; i++) {
    result = Math.min(result, minutes[i] - minutes[i + 1])
  }
  return result
}

// console.log(findMinDifference(['00:00', '23:59', '00:00']))
// console.log(findMinDifference(['01:01', '02:01']))
// console.log(findMinDifference(['00:00', '23:59']))
// console.log(findMinDifference(['01:01', '23:01']))
// console.log(findMinDifference(['12:12', '00:13']))
// console.log(findMinDifference(['12:01', '23:59']))
// console.log(findMinDifference(['14:49', '09:56', '01:02']))
// console.log(findMinDifference(['22:27', '18:42', '09:57', '09:24', '09:26']))
console.log(findMinDifference(['00:00', '04:00', '22:00']))
