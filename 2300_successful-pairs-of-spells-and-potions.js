/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
var successfulPairs = function (spells, potions, success) {
  const result = new Array(spells.length).fill(0)
  spells = spells.map((val, idx) => [val, idx]).sort((a, b) => a[0] - b[0])
  potions.sort((a, b) => a - b)
  let right = potions.length - 1
  for (let i = 0; i < spells.length; i++) {
    while (right >= 0 && spells[i][0] * potions[right] >= success) {
      right -= 1
    }
    result[spells[i][1]] = potions.length - 1 - right
  }
  return result
}

var successfulPairs = function (spells, potions, success) {
  potions.sort((a, b) => a - b)

  function findUpperBound(arr, x, multiplier) {
    let low = 0
    let high = arr.length - 1
    let ans = arr.length

    while (low <= high) {
      const mid = Math.floor(low + (high - low) / 2)
      if (arr[mid] * multiplier >= x) {
        ans = mid
        high = mid - 1
      } else {
        low = mid + 1
      }
    }
    return ans
  }

  const result = new Array(spells.length).fill(0)

  for (let i = 0; i < spells.length; i++) {
    result[i] = potions.length - findUpperBound(potions, success, spells[i])
  }
  return result
}

// console.log(successfulPairs([5, 1, 3], [1, 2, 3, 4, 5], 7))
console.log(successfulPairs([3, 1, 2], [8, 5, 8], 16))
