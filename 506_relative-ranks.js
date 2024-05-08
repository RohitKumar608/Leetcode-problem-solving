/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function (score) {
  const sortedData = [...score].sort((a, b) => b - a)
  const map = {}
  const result = []
  const rank = {
    0: 'Gold Medal',
    1: 'Silver Medal',
    2: 'Bronze Medal',
  }
  for (let i = 0; i < sortedData.length; i++) {
    if (rank[i]) {
      map[sortedData[i]] = rank[i]
    } else {
      map[sortedData[i]] = `${i + 1}`
    }
  }
  for (const value of score) {
    result.push(map[value])
  }
  return result
}
