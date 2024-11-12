/**
 * @param {number[][]} items
 * @param {number[]} queries
 * @return {number[]}
 */

var maximumBeauty = function (items, queries) {
  const cache = {}
  const sortedQueries = [...queries].sort((a, b) => a - b)
  let left = 0
  const queryValue = {}
  items.sort((a, b) => a[0] - b[0])
  let maxVal = 0
  for (const [price, beauty] of items) {
    if (cache[price] === undefined) {
      cache[price] = 0
    }
    queryValue[sortedQueries[left]] = maxVal

    while (price > sortedQueries[left]) {
      left++
      queryValue[sortedQueries[left]] = maxVal
    }
    maxVal = Math.max(maxVal, beauty)
    cache[price] = maxVal
    queryValue[sortedQueries[left]] = maxVal
  }
  const result = []
  for (const val of queries) {
    if (queryValue[val] !== undefined) {
      result.push(queryValue[val])
    } else {
      result.push(maxVal)
    }
  }
  return result
}

console.log(
  maximumBeauty(
    [
      [1, 2],
      [3, 2],
      [2, 4],
      [5, 6],
      [3, 5],
    ],
    [1, 2, 3, 4, 5, 6]
  )
)

// console.log(
//   maximumBeauty(
//     [
//       [193, 732],
//       [781, 962],
//       [864, 954],
//       [749, 627],
//       [136, 746],
//       [478, 548],
//       [640, 908],
//       [210, 799],
//       [567, 715],
//       [914, 388],
//       [487, 853],
//       [533, 554],
//       [247, 919],
//       [958, 150],
//       [193, 523],
//       [176, 656],
//       [395, 469],
//       [763, 821],
//       [542, 946],
//       [701, 676],
//     ],
//     [
//       885, 1445, 1580, 1309, 205, 1788, 1214, 1404, 572, 1170, 989, 265, 153,
//       151, 1479, 1180, 875, 276, 1584,
//     ]
//   )
// )
