/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function (target, arr) {
  const targetArr = target.sort((a, b) => a - b)
  const tempArr = arr.sort((a, b) => a - b)

  for (let i = 0; i < targetArr.length; i++) {
    if (targetArr[i] !== tempArr[i]) {
      return false
    }
  }

  return true
}
