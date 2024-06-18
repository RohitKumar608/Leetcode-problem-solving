/**
 * @param {number[]} difficulty
 * @param {number[]} profit
 * @param {number[]} worker
 * @return {number}
 */
var maxProfitAssignment = function (difficulty, profit, worker) {
  const data = []
  for (let i = 0; i < difficulty.length; i++) {
    data[i] = [difficulty[i], profit[i]]
  }
  data.sort((a, b) => a[0] - b[0])
  worker.sort((a, b) => a - b)
  let result = 0
  let left = 0
  let right = 0
  let value = []
  while (left < worker.length) {
    if (right < difficulty.length && worker[left] >= data[right][0]) {
      value.push(data[right][1])
      right++
    } else {
      if (value.length) result += Math.max(...value)
      left++
    }
  }

  return result
}

var maxProfitAssignment = function (difficulty, profit, worker) {
  worker.sort((a, b) => a - b)
  const jobs = []

  for (let i = 0; i < profit.length; i++) {
    jobs[i] = i
  }

  jobs.sort((a, b) => profit[a] - profit[b])

  let idx = jobs.length - 1
  let result = 0
  for (let i = worker.length - 1; i >= 0; i--) {
    while (worker[i] < difficulty[jobs[idx]]) {
      idx--
      if (idx < 0) {
        return result
      }
    }
    result += profit[jobs[idx]]
  }
  return result
}

// console.log(
//   maxProfitAssignment([2, 4, 6, 8, 10], [10, 20, 30, 40, 50], [4, 5, 6, 7])
// )

// console.log(maxProfitAssignment([13, 37, 58], [4, 90, 96], [34, 73, 45]))
// console.log(maxProfitAssignment([7, 20, 68], [26, 28, 57], [71, 20, 71]))

console.log(
  maxProfitAssignment(
    [68, 35, 52, 47, 86],
    [67, 17, 1, 81, 3],
    [92, 10, 85, 84, 82]
  )
)
