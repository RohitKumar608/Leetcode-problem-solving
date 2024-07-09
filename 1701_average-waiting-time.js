/**
 * @param {number[][]} customers
 * @return {number}
 */
var averageWaitingTime = function (customers) {
  let waitTime = customers[0][0]
  let timeTaken = 0
  for (let index = 0; index < array.length; index++) {
    const [arrival, time] = customers[i]
    if (arrival > waitTime) {
      waitTime = arrival + time
      timeTaken += waitTime - arrival
    } else {
      waitTime = waitTime + time
      timeTaken += waitTime - arrival
    }
  }
  return timeTaken / customers.length
}

console.log(
  averageWaitingTime([
    [1, 2],
    [2, 5],
    [4, 3],
  ])
)
console.log(
  averageWaitingTime([
    [5, 2],
    [5, 4],
    [10, 3],
    [20, 1],
  ])
)
