/**
 * @param {string} time
 * @return {number}
 */
var countTime = function (time) {
  const [hour, minute] = time.split(':')
  let minuteCount = 0
  let hourCount = 0
  if (minute === '??') {
    minuteCount = 60
  }
  if (hour === '??') {
    hourCount = 24
  }

  if (hour.includes('?') && !hourCount) {
    for (let i = 0; i <= 9; i++) {
      const time = hour[0] === '?' ? i + hour[1] : hour[0] + i
      if (time >= 24) {
        break
      }
      hourCount++
    }
  }
  if (minute.includes('?') && !minuteCount) {
    for (let i = 0; i <= 9; i++) {
      const time = minute[0] === '?' ? i + minute[1] : minute[0] + i
      if (time >= 60) {
        break
      }
      minuteCount++
    }
  }
  if (hourCount === 0) return minuteCount
  if (minuteCount === 0) return hourCount
  if (hourCount === 0 && minuteCount === 0) return 1
  return hourCount * minuteCount
}
console.log(countTime('05:?0'))
console.log(countTime('?5:00'))
console.log(countTime('0?:0?'))
console.log(countTime('??:??'))
console.log(countTime('2?:??'))
