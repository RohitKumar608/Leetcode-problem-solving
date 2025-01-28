/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @param {number[][]} queries
 * @return {boolean[]}
 */

var checkIfPrerequisite = function (n, prerequisites, queries) {
  const courses = [...Array(n)].map(() => [])

  for (let [pre, next] of prerequisites) {
    courses[next].push(pre)
  }

  const res = new Array(queries.length).fill(false)
  const checked = new Array(n).fill(false)

  for (let i = 0; i < queries.length; i++) {
    checked.fill(false)

    let [target, cur] = queries[i]
    let q = [cur]

    while (q.length) {
      cur = q.shift()
      let preCourses = courses[cur]
      for (let pre of preCourses) {
        if (pre == target) {
          res[i] = true
          break
        }
        if (!checked[pre]) {
          checked[pre] = true
          q.push(pre)
        }
      }
      if (res[i] == true) {
        break
      }
    }
  }

  return res
}

// console.log(
//   checkIfPrerequisite(
//     2,
//     [[1, 0]],
//     [
//       [0, 1],
//       [1, 0],
//     ]
//   )
// )

console.log(
  checkIfPrerequisite(
    5,
    [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 4],
    ],
    [
      [0, 4],
      [4, 0],
      [1, 3],
      [3, 0],
    ]
  )
)
