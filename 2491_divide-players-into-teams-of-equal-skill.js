/**
 * @param {number[]} skill
 * @return {number}
 */
var dividePlayers = function (skill) {
  skill.sort((a, b) => a - b)
  let result = 0
  let sumOfFirstAndLast = skill[0] + skill[skill.length - 1]
  for (let i = 0; i < skill.length / 2; i++) {
    if (skill[i] + skill[skill.length - i - 1] !== sumOfFirstAndLast) {
      return -1
    }
    result += skill[i] * skill[skill.length - i - 1]
  }
  return result
}

console.log(dividePlayers([3, 2, 5, 1, 3, 4]))
