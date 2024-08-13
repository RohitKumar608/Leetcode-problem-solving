/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  const result = []
  candidates.sort((a, b) => a - b)
  function combinations(i, total, curr) {
    if (total === target) {
      result.push([...curr])
      return
    }
    if (total > target || i >= candidates.length) return

    for (let j = i; j < candidates.length; j++) {
      if (j !== i && candidates[j] === candidates[j - 1]) continue
      curr.push(candidates[j])
      combinations(j + 1, total + candidates[j], curr)
      curr.pop()
    }
  }
  combinations(0, 0, [])
  return result
}

console.log(
  combinationSum2(
    [
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1,
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    ],
    30
  )
)
