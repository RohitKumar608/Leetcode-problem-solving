/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfBoomerangs = function (points) {
  let result = 0
  for (let i = 0; i < points.length; i++) {
    const [x1, y1] = points[i]
    const map = new Map()
    for (let j = 0; j < points.length; j++) {
      if (i == j) {
        continue
      }
      const [x2, y2] = points[j]
      const k = (x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1)
      map.set(k, (map.get(k) || 0) + 1)
    }
    for (const [key, val] of map) {
      result += val * (val - 1)
    }
  }

  return result
}

console.log(
  numberOfBoomerangs([
    [0, 0],
    [1, 0],
    [2, 0],
  ])
)
console.log(
  numberOfBoomerangs([
    [1, 1],
    [1, 2],
  ])
)
