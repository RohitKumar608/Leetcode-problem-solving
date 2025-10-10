/**
 * @param {number[]} energy
 * @param {number} k
 * @return {number}
 */
var maximumEnergy = function (energy, k) {
  let maxEnergy = -Infinity
  for (let i = 0; i < k; i++) {
    maxEnergy = Math.max(maxEnergy, energy[energy.length - 1 - i])
  }
  for (let i = energy.length - k - 1; i >= 0; i--) {
    energy[i] += energy[i + k]
    maxEnergy = Math.max(maxEnergy, energy[i])
  }

  return maxEnergy
}
