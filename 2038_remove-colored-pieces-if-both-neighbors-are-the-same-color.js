/**
 * @param {string} colors
 * @return {boolean}
 */
var winnerOfGame = function (colors) {
  let aliceCanRemove = 0
  let bobCanRemove = 0
  const frequency = [0, 0]
  colors += colors[colors.length - 1] === 'A' ? 'B' : 'A'
  for (let i = 0; i <= len; i++) {
    const currChar = colors[i] === 'A' ? 0 : 1
    frequency[currChar]++
    if (frequency[0] && frequency[1]) {
      const prevChar = colors[i] == 'A' ? 'B' : 'A'
      if (prevChar == 'A') {
        aliceCanRemove += Math.max(frequency[0] - 2, 0)
        frequency[0] = 0
      } else if (prevChar == 'B') {
        bobCanRemove += Math.max(frequency[1] - 2, 0)
        frequency[1] = 0
      }
    }
  }
  return aliceCanRemove > bobCanRemove
}

var winnerOfGame = function (colors) {
  let aliceMoves = 0
  let bobMoves = 0

  for (let i = 1; i < colors.length - 1; i++) {
    if (colors[i - 1] === colors[i] && colors[i] === colors[i + 1]) {
      if (colors[i] === 'A') {
        aliceMoves++
      } else {
        bobMoves++
      }
    }
  }

  return aliceMoves > bobMoves
}

// console.log(winnerOfGame('ABBBBBBBAAA'))
console.log(winnerOfGame('AAAAABBBBBBAAAAA'))
