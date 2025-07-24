/**
 * @param {number[]} cards
 * @return {number}
 */
var minimumCardPickup = function (cards) {
  let left = 0
  const map = new Map()
  let result = Infinity
  for (let right = 0; right < cards.length; right++) {
    map.set(cards[right], (map.get(cards[right]) || 0) + 1)
    while (map.get(cards[right]) > 1) {
      result = Math.min(result, right - left + 1)
      map.set(cards[left], map.get(cards[left]) - 1)
      left++
    }
  }
  return result == Infinity ? -1 : result
}

console.log(minimumCardPickup([3, 4, 2, 3, 4, 7]))
