/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function (arr) {
  const map = new Map()
  for (let i = 0; i < arr.length; i++) {
      map.set(arr[i], i)
  }
  for (let i = 0; i < arr.length; i++) {
      const val = map.get(2 * arr[i])
      if (val !== undefined && val !== i) {
          return true
      }
  }

  return false
};