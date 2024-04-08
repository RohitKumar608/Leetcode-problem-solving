/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function (students, sandwiches) {
  const sandwichesLen = sandwiches.length
  for (let i = 0; i < sandwichesLen; i++) {
    for (let j = 0; j < students.length; j++) {
      if (students.length === 0) return 0
      if (students[0] === sandwiches[0]) {
        students.shift()
        sandwiches.shift()
      } else {
        const shiftVal = students.shift()
        students.push(shiftVal)
      }
    }
  }
  return students.length
}

console.log(countStudents([1, 1, 0, 0], [0, 1, 0, 1]))
console.log(countStudents([1, 1, 1, 0, 0, 1], [1, 0, 0, 0, 1, 1]))
