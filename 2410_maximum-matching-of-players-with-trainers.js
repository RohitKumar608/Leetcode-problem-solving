/**
 * @param {number[]} players
 * @param {number[]} trainers
 * @return {number}
 */
var matchPlayersAndTrainers = function (players, trainers) {
  trainers.sort((a, b) => a - b)
  players.sort((a, b) => a - b)
  let i = 0
  let j = 0
  while (j < trainers.length) {
    if (trainers[j] >= players[i]) {
      i++
    }
    j++
  }
  return i
}
console.log(matchPlayersAndTrainers([4, 7, 9], [8, 2, 5, 8]))
console.log(object)
