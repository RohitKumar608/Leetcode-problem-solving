// https://leetcode.com/problems/group-by/

/**
 * @param {Function} fn
 * @return {Array}
 */
Array.prototype.groupBy = function (fn) {
  const result = {}
  for (const val of this) {
    const id = fn(val)
    if (!result[id]) {
      result[id] = []
    }
    result[id].push(val)
  }

  return result
}

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */
