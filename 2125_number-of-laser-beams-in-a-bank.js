// https://leetcode.com/problems/number-of-laser-beams-in-a-bank/description
/**
 * @param {string[]} bank
 * @return {number}
 */
var numberOfBeams = function (bank) {
  let lastLaserCount = 0
  let result = 0
  for (const beams of bank) {
    let laserCount = 0
    for (const beam of beams) {
      if (+beam) laserCount++
    }
    if (laserCount) {
      if (lastLaserCount) {
        result += lastLaserCount * laserCount
      }
      lastLaserCount = laserCount
    }
  }

  return result
}
