/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
  const coins = [0, 0]
  for (let i = 0; i < bills.length; i++) {
    bill = bills[i]
    if (bill === 5) coins[0]++
    else if (bill == 10) {
      coins[0]--
      coins[1]++
    } else {
      if (coins[1] > 0) {
        coins[0]--
        coins[1]--
      } else {
        coins[0] -= 3
      }
    }
    if (coins[0] < 0 || coins[1] < 0) return false
  }
  return true
}

console.log(lemonadeChange([5, 5, 5, 10, 20]))
console.log(
  lemonadeChange([
    5, 5, 10, 20, 5, 5, 5, 5, 5, 5, 5, 5, 5, 10, 5, 5, 20, 5, 20, 5,
  ])
)
