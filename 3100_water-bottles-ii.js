/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var maxBottlesDrunk = function (numBottles, numExchange) {
  let emptyBottles = 0
  let result = numBottles
  while (numBottles > 0) {
    numBottles--
    emptyBottles++
    if (emptyBottles % numExchange === 0) {
      result++
      numBottles++
      numExchange++
      emptyBottles = 0
    }
  }
  return result
}

console.log(maxBottlesDrunk(10, 3))
