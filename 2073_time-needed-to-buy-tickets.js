/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
function timeRequiredToBuy(tickets, k) {
  var count = 0
  while (tickets[k]) {
    tickets[0]--
    count++
    if (k === 0) {
      k = tickets.length
    }
    if (tickets.length) {
      var firstValue = tickets.shift() || 0
      if (firstValue) tickets.push(firstValue)
    }
    k--
  }
  return count
}
console.log(timeRequiredToBuy([5, 1, 1, 1], 0))
console.log(timeRequiredToBuy([2, 3, 2], 2))
