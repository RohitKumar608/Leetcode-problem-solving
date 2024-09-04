/**
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 */
var robotSim = function (commands, obstacles) {
  const map = new Map()
  for (const [x, y] of obstacles) {
    map.set(`${x},${y}`, true)
  }
  let result = 0
  let x = 0
  let y = 0
  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ]
  d = 0
  for (let i = 0; i < commands.length; i++) {
    if (commands[i] === -1) {
      d = (d + 1) % 4
    } else if (commands[i] === -2) {
      d = (d - 1) % 4
    } else {
      const [dx, dy] = d < 0 ? directions[4 - Math.abs(d)] : directions[d]

      for (let j = 1; j <= commands[i]; j++) {
        if (map.size && map.has(`${x + dx},${y + dy}`)) {
          break
        }
        x = x + dx
        y = y + dy
        result = Math.max(result, x * x + y * y)
      }
    }
    result = Math.max(result, x * x + y * y)
  }
  return result
}

// console.log(robotSim([4, -1, 4, -2, 4], [[2, 4]]))
// console.log(robotSim([6, -1, -1, 6], []))
// console.log(
//   robotSim(
//     [-2, -1, 8, 9, 6],
//     [
//       [-1, 3],
//       [0, 1],
//       [-1, 5],
//       [-2, -4],
//       [5, 4],
//       [-2, -3],
//       [5, -1],
//       [1, -1],
//       [5, 5],
//       [5, 2],
//     ]
//   )
// )
// console.log(
//   robotSim(
//     [-2, 8, 3, 7, -1],
//     [
//       [-4, -1],
//       [1, -1],
//       [1, 4],
//       [5, 0],
//       [4, 5],
//       [-2, -1],
//       [2, -5],
//       [5, 1],
//       [-3, -1],
//       [5, -3],
//     ]
//   )
// )

console.log(
  robotSim(
    [7, -2, -2, 7, 5],
    [
      [-3, 2],
      [-2, 1],
      [0, 1],
      [-2, 4],
      [-1, 0],
      [-2, -3],
      [0, -3],
      [4, 4],
      [-3, 3],
      [2, 2],
    ]
  )
)
