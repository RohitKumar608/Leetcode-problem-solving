/**
 * @param {number[]} queries
 * @param {number} m
 * @return {number[]}
 */

var processQueries = function (queries, m) {
  const values = []
  const result = []
  for (let i = 1; i <= m; i++) {
    values[i - 1] = i
  }
  for (let i = 0; i < queries.length; i++) {
    const idx = values.indexOf(queries[i])
    result[i] = idx
    values.splice(idx, 1)
    values.unshift(queries[i])
  }
  return result
}
