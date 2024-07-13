/**
 * @param {number[]} positions
 * @param {number[]} healths
 * @param {string} directions
 * @return {number[]}
 */
var survivedRobotsHealths = function (positions, healths, directions) {
  const oderIndex = positions.reduce((prev, curr, idx) => {
    prev[curr] = idx
    return prev
  }, {})
  positions.sort((a, b) => a - b)
  const stack = []
  for (const position of positions) {
    stack.push(position)
    if (stack.length) {
      let lastValIdx = oderIndex[stack[stack.length - 2]]
      let currValIdx = oderIndex[stack[stack.length - 1]]
      while (
        stack.length &&
        directions[lastValIdx] == 'R' &&
        directions[currValIdx] === 'L'
      ) {
        const f1 = stack.pop()
        const f2 = stack.pop()

        if (healths[lastValIdx] > healths[currValIdx]) {
          healths[lastValIdx]--
          stack.push(f2)
          healths[currValIdx] = 0
        } else if (healths[lastValIdx] < healths[currValIdx]) {
          healths[currValIdx]--
          stack.push(f1)
          healths[lastValIdx] = 0
        } else {
          healths[currValIdx] = 0
          healths[lastValIdx] = 0
        }
        lastValIdx = oderIndex[stack[stack.length - 2]]
        currValIdx = oderIndex[stack[stack.length - 1]]
      }
    }
  }
  return healths.filter((val) => val > 0)
}

console.log(survivedRobotsHealths([3, 5, 2, 6], [10, 10, 15, 12], 'RLRL'))
console.log(survivedRobotsHealths([1, 2, 5, 6], [10, 10, 11, 11], 'RLRL'))
console.log(survivedRobotsHealths([5, 4, 3, 2, 1], [2, 17, 9, 15, 10], 'RRRRR'))
console.log(survivedRobotsHealths([4, 6], [601, 973], 'RL'))
