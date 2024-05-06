/**
 * @param {number} n
 * @return {number}
 */
var nextGreaterElement = function (n) {
  let index = -1
  let str = String(n).split('')
  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] > str[i - 1]) {
      index = i - 1
      break
    }
  }

  if (index == -1) return -1
  for (let j = str.length - 1; j > index; j--) {
    if (str[j] > str[index]) {
      ;[str[j], str[index]] = [str[index], str[j]]
      break
    }
  }
  let [left, right] = [str.slice(0, index + 1), str.slice(index + 1)]
  right = right.sort((a, b) => a - b)
  let res = [...left, ...right].join('')

  return res <= 2 ** 31 - 1 ? res : -1
}

// console.log(nextGreaterElement(12))
// console.log(nextGreaterElement(230241))
// console.log(nextGreaterElement(2147483486))
console.log(nextGreaterElement(2147483476))
