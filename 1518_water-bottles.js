/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function(numBottles, numExchange) {
    let emptyBottles = 0
    let result = numBottles
    while (numBottles) {
      numBottles--
      emptyBottles++
      if(emptyBottles &&emptyBottles % numExchange === 0) {
        result++
        numBottles++
      }
    }
    return result
};

console.log(numWaterBottles(9,  3));
console.log(numWaterBottles(15,  4));
console.log(numWaterBottles(10,  3));