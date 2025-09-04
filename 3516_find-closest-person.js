/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {number}
 */
var findClosest = function (x, y, z) {
  const xMoveTowardsZ = Math.abs(x - z)
  const yMoveTowardsZ = Math.abs(y - z)
  if (xMoveTowardsZ > yMoveTowardsZ) return 2
  if (yMoveTowardsZ > xMoveTowardsZ) return 1
  return 0
}
