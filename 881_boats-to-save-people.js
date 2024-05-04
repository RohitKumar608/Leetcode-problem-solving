/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function (people, limit) {
  people.sort((a, b) => a - b)
  let start = 0
  let end = people.length
  let pairCount = 0
  while (start < end) {
    if (people[start] + people[end] <= limit) {
      start++
      end--
      pairCount++
    } else {
      end--
    }
  }

  return people.length - pairCount
}

console.log(numRescueBoats([1, 2], 3))
console.log(numRescueBoats([3, 5, 3, 4], 5))
console.log(numRescueBoats([3, 2, 2, 1], 3))
console.log(numRescueBoats([5, 1, 4, 2], 6))
