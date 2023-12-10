/**
 * @param {any[]} arr
 * @param {number} depth
 * @return {any[]}
 */
var flat = function (arr, n) {
  if (n === 0) return arr
  let result = []
  for (let times = 1; times <= n; times++) {
    for (let idx = 0; idx < arr.length; idx++) {
      if (typeof arr[idx] === 'number') {
        result.push(arr[idx])
      }
      if (typeof arr[idx] === 'object') {
        result.push(...arr[idx])
      }
    }
    arr = [...result]
    result = []
  }

  return arr
}
