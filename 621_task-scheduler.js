/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */

function leastInterval(tasks, n) {
  let obj = {}
  for (let task of tasks) {
    obj[task] = (obj[task] || 0) + 1
  }
  let sortedFreq = Object.entries(obj).sort((a, b) => a[1] - b[1])
  let maxFreq = sortedFreq.pop()[1]
  let idleTime = (maxFreq - 1) * n
  while (sortedFreq.length && idleTime > 0) {
    idleTime -= Math.min(maxFreq - 1, sortedFreq.pop()[1])
  }
  idleTime = Math.max(0, idleTime)
  return tasks.length + idleTime
}

console.log(leastInterval(['A', 'A', 'A', 'B', 'B', 'B'], 2))
console.log(leastInterval(['A', 'A', 'A', 'B', 'B', 'B'], 3))
console.log(leastInterval(['A', 'C', 'A', 'B', 'D', 'B'], 1))
