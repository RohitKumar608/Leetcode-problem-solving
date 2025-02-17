/**
 * @param {string} tiles
 * @return {number}
 */
var numTilePossibilities = function (tiles) {
  const map = new Map()
  for (const tile of tiles) {
    map.set(tile, (map.get(tile) || 0) + 1)
  }
  function dfs(map) {
    console.log(structuredClone(map))

    let sum = 0
    for (const [key, value] of map) {
      if (value === 0) {
        continue
      }
      map.set(key, value - 1)
      sum += 1 + dfs(map)
      map.set(key, value)
    }
    return sum
  }
  console.log(map)
  return dfs(map)
}

console.log(numTilePossibilities('AAABBC'))
