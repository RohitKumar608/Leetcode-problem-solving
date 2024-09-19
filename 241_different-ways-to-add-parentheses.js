/**
 * @param {string} expression
 * @return {number[]}
 */
var diffWaysToCompute = function (expression) {
  const operations = {
    '+': (x, y) => x + y,
    '-': (x, y) => x - y,
    '*': (x, y) => x * y,
  }
  function backtrack(left, right) {
    const result = []
    for (let i = left; i <= right; i++) {
      const op = expression[i]
      if (operations[op]) {
        const num1 = backtrack(left, i - 1)
        const num2 = backtrack(i + 1, right)
        for (const n1 of num1) {
          for (const n2 of num2) {
            result.push(operations[op](n1, n2))
          }
        }
      }
    }
    if (result.length === 0) {
      result.push(expression.slice(left, right + 1))
    }
    return result
  }

  return backtrack(0, expression.length - 1)
}

console.log(diffWaysToCompute('2*3-4*5'))
