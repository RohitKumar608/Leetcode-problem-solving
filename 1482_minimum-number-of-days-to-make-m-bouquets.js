/**
 * @param {number[]} bloomDay
 * @param {number} m
 * @param {number} k
 * @return {number}
 */

function isOkay(mid, bloomDay, m, k) {
  let consecutiveCount = 0
  let noOfBouquet = 0
  for (let i = 0; i < bloomDay.length; i++) {
    if (bloomDay[i] <= mid) {
      consecutiveCount += 1
    } else {
      consecutiveCount = 0
    }
    if (consecutiveCount === k) {
      noOfBouquet += 1
      consecutiveCount = 0
    }
  }
  return noOfBouquet >= m
}
var minDays = function (bloomDay, m, k) {
  if (bloomDay.length < m * k) {
    return -1
  }
  let l = 1
  let r = Math.max(...bloomDay)
  let ans = -1
  while (l <= r) {
    const mid = Math.ceil((l + r) / 2)
    if (isOkay(mid, bloomDay, m, k)) {
      ans = mid
      r = mid - 1
    } else {
      l = mid + 1
    }
  }
  return ans
}

console.log(minDays([1, 10, 3, 10, 2], 3, 1))
console.log(minDays([7, 7, 7, 7, 12, 7, 7], 2, 3))
