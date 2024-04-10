/**
 * @param {number[]} deck
 * @return {number[]}
 */
var deckRevealedIncreasing = function (deck) {
  if (deck.length === 1) return deck
  deck.sort((a, b) => a - b)
  const queue = []
  const result = []
  for (let i = 0; i < deck.length; i++) {
    queue.push(i)
  }
  for (let i = 0; i < deck.length; i++) {
    const firstVal = queue.shift()
    result[firstVal] = deck[i]
    if (queue.length) {
      queue.push(queue.shift())
    }
  }
  return result
}

console.log(deckRevealedIncreasing([17, 13, 11, 2, 3, 5, 7]))
