/**
 * @param {number[]} derived
 * @return {boolean}
 */
var doesValidArrayExist = function (derived) {
  let xor = derived[0]

  for (let i = 1; i < derived.length; i++) {
    xor = xor ^ derived[i]
  }

  return xor % 2 === 0
}

console.log(doesValidArrayExist([1, 1, 0]))
console.log(doesValidArrayExist([1, 0]))
console.log(doesValidArrayExist([0, 1]))
console.log(doesValidArrayExist([0, 1, 1]))
