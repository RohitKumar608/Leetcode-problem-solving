/**
 * @param {number} n
 * @param {number[][]} queries
 * @return {number[]}
 */
var productQueries = function (n, queries) {
  const binary = n.toString(2)
  const arr = []
  for (let i = 0; i < binary.length; i++) {
    if (+binary[i]) arr.push(BigInt(Math.pow(2, binary.length - 1 - i)))
  }
  arr.reverse()
  for (let i = 1; i < arr.length; i++) {
    arr[i] = arr[i] * arr[i - 1]
  }
  const result = []
  for (const [start, end] of queries) {
    if (start === 0) result.push(Number(arr[end] % BigInt(1000000007)))
    else result.push(Number((arr[end] / arr[start - 1]) % BigInt(1000000007)))
  }
  return result
}

console.log(
  productQueries(919, [
    [5, 5],
    [4, 4],
    [0, 1],
    [1, 5],
    [4, 6],
    [6, 6],
    [5, 6],
    [0, 3],
    [5, 5],
    [5, 6],
    [1, 2],
    [3, 5],
    [3, 6],
    [5, 5],
    [4, 4],
    [1, 1],
    [2, 4],
    [4, 5],
    [4, 4],
    [5, 6],
    [0, 4],
    [3, 3],
    [0, 4],
    [0, 5],
    [4, 4],
    [5, 5],
    [4, 6],
    [4, 5],
    [0, 4],
    [6, 6],
    [6, 6],
    [6, 6],
    [2, 2],
    [0, 5],
    [1, 4],
    [0, 3],
    [2, 4],
    [5, 5],
    [6, 6],
    [2, 2],
    [2, 3],
    [5, 5],
    [0, 6],
    [3, 3],
    [6, 6],
    [4, 4],
    [0, 0],
    [0, 2],
    [6, 6],
    [6, 6],
    [3, 6],
    [0, 4],
    [6, 6],
    [2, 2],
    [4, 6],
  ])
)
