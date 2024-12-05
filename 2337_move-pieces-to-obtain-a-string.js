/**
 * @param {string} start
 * @param {string} target
 * @return {boolean}
 */
var canChange = function (start, target) {
  if (start.length != target.length) return false
  let p1 = 0
  let p2 = 0
  while (p1 < start.length || p2 < target.length) {
    while (start[p1] == '_') {
      p1++
    }
    while (target[p2] == '_') {
      p2++
    }
    if (start[p1] != target[p2]) return false
    if (start[p1] === 'L') {
      if (p1 < p2) return false
    }
    if (start[p1] == 'R') {
      if (p1 > p2) return false
    }
    p1++
    p2++
  }
  return true
}

// console.log(canChange('_L__R__R_', 'L______RR'))
// console.log(canChange('R_L_', '__LR'))
console.log(canChange('L_L___', 'LL____'))
