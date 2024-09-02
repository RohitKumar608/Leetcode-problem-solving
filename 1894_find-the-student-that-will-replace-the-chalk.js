/**
 * @param {number[]} chalk
 * @param {number} k
 * @return {number}
 */
var chalkReplacer = function(chalk, k) {
  let total = 0
  for(let i = 0; i < chalk.length; i++) {
      total += chalk[i]
  }
  let p = k % total
  for(let i = 0; i < chalk.length; i++) {
      p -= chalk[i]
      if(p < 0) return i
  }
};


// console.log(chalkReplacer([5, 1, 5], 22))
// console.log(chalkReplacer([3, 4, 1, 2], 25))
// console.log(chalkReplacer([22, 25, 39, 3, 45, 45, 12, 17, 32, 9], 835))

console.log(chalkReplacer(new Array(100000).fill(10000), 1000000000));