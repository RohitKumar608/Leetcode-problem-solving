/**
 * @param {number[]} ranks
 * @param {number} cars
 * @return {number}
 */
var repairCars = function (ranks, cars) {
  let minVal = 1
  let maxVal = ranks[0] * cars * cars
  let result = Infinity
  while (minVal <= maxVal) {
    let mid = Math.floor((minVal + maxVal) / 2)
    let count = 0
    for (let i = 0; i < ranks.length; i++) {
      count += Math.floor(Math.sqrt(mid / ranks[i]))
    }
    if (count >= cars) {
      result = Math.min(result, mid)
      maxVal = mid - 1
    } else {
      minVal = mid + 1
    }
  }
  return result
}

console.log(repairCars([4, 2, 3, 1], 10))
