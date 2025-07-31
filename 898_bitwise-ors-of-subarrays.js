/**
 * @param {number[]} arr
 * @return {number}
 */
var subarrayBitwiseORs = function (arr) {
  const answer = new Set()
  let prev = new Set()

  for (const x of arr) {
    const curr = new Set([x])
    for (const y of prev) {
      curr.add(y | x)
    }
    for (const z of curr) {
      answer.add(z)
    }
    prev = curr
  }
  return answer.size
}
