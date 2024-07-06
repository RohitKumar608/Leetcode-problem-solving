/**
 * @param {number} n
 * @param {number} time
 * @return {number}
 */
var passThePillow = function (n, time) {
  const personAsc = new Array(n).fill(0).map((val, idx) => idx + 1)
  const personDesc = [...personAsc.slice(0, personAsc.length - 1)].reverse()
  let result = []
  let count = 0
  while (result.length <= time) {
    if (count % 2 === 0) {
      if (count >= 2) {
        result.pop()
      }

      result = result.concat(personAsc)
    } else {
      result = result.concat(personDesc)
    }
    count++
  }
  return result[time]
}

var passThePillow = function (n, time) {
  let count = 1
  let direction = 1
  for (let i = 0; i < time; i++) {
    if (count === 1) direction = 1
    if (count === n) direction = -1
    count = direction === 1 ? count + 1 : count - 1
  }
  return count
}

// console.log(passThePillow(8, 9))
// console.log(passThePillow(8, 2))
// console.log(passThePillow(18, 38))
console.log(passThePillow(2, 341))
