/**
 * @param {number[]} fruits
 * @param {number[]} baskets
 * @return {number}
 */
var numOfUnplacedFruits = function (fruits, baskets) {
  for (let i = 0; i < fruits.length; i++) {
    for (let j = 0; j < baskets.length; j++) {
      if (baskets[j] > fruits[i]) {
        baskets.splice(j, 1)
        break
      }
    }
  }
  return baskets.length
}

console.log(numOfUnplacedFruits([4, 2, 5], [3, 5, 4]))
console.log(numOfUnplacedFruits([3, 6, 1], [6, 4, 7]))
