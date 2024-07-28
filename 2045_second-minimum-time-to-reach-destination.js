/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} time
 * @param {number} change
 * @return {number}
 */

var secondMinimum = function (n, edges, time, change) {
  const adj = new Map()
  for (const [v1, v2] of edges) {
    if (!adj.has(v1)) adj.set(v1, [])
    if (!adj.has(v2)) adj.set(v2, [])
    adj.get(v1).push(v2)
    adj.get(v2).push(v1)
  }

  const q = [1]
  let cur_time = 0
  let res = -1
  const visit_times = new Map()

  while (q.length > 0) {
    const size = q.length
    for (let i = 0; i < size; i++) {
      const node = q.shift()
      if (node === n) {
        if (res !== -1) {
          return cur_time
        }
        res = cur_time
      }
      for (const nei of adj.get(node) || []) {
        const nei_times = visit_times.get(nei) || []
        if (
          nei_times.length === 0 ||
          (nei_times.length === 1 && nei_times[0] !== cur_time)
        ) {
          q.push(nei)
          nei_times.push(cur_time)
          visit_times.set(nei, nei_times)
        }
      }
    }
    if (Math.floor(cur_time / change) % 2 === 1) {
      cur_time += change - (cur_time % change)
    }
    cur_time += time
  }
}

console.log(
  secondMinimum(
    5,
    [
      [1, 2],
      [1, 3],
      [1, 4],
      [3, 4],
      [4, 5],
    ],
    3,
    5
  )
)
console.log(secondMinimum(2, [[1, 2]], 3, 2))
