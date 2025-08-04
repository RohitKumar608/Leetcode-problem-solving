/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function (fruits) {
  let left = 0
  const map = new Map()
  let result = 0
  for (let right = 0; right < fruits.length; right++) {
    map.set(fruits[right], (map.get(fruits[right]) || 0) + 1)
    while (map.size > 2) {
      const freq = map.get(fruits[left]) - 1
      if (freq == 0) map.delete(fruits[left])
      else map.set(fruits[left], freq)
      left++
    }
    result = Math.max(result, right - left + 1)
  }
  return result
}

console.log(totalFruit([1, 2, 3, 2, 2]))
console.log(totalFruit([0, 1, 2, 2]))
console.log(totalFruit([1, 2, 1]))
