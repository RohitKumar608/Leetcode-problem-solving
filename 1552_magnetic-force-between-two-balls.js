/**
 * @param {number[]} position
 * @param {number} m
 * @return {number}
 */

function binarySearch(position, m, mid) {
  let countOfBallPlaced = 1
  let prevIdx = 0
  for (let i = 0; i < position.length; i++) {
    if (position[i] - position[prevIdx] >= mid) {
      countOfBallPlaced++
      prevIdx = i
    }
  }
  return countOfBallPlaced >= m
}

var maxDistance = function (position, m) {
  position.sort((a, b) => a - b)
  let result = 0
  let left = position[0]
  let right = position[position.length - 1]
  if (position.length === m) {
    return position[position.length - 1] - position[position.length - 2]
  }
  let mid = Math.floor((left + right) / 2)

  while (left <= right) {
    if (binarySearch(position, m, mid)) {
      result = mid
      left = mid + 1
    } else {
      right = mid - 1
    }
    mid = Math.floor((left + right) / 2)
  }
  return result
}

// console.log(maxDistance([1, 2, 3, 4, 7], 3))
// console.log(maxDistance([5, 4, 3, 2, 1, 1000000000], 2))
// console.log(maxDistance([79, 74, 57, 22], 4))
// console.log(maxDistance([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4))

console.log(
  maxDistance(
    [
      269826447, 974181916, 225871443, 189215924, 664652743, 592895362,
      754562271, 335067223, 996014894, 510353008, 48640772, 228945137,
    ],
    4
  )
)
