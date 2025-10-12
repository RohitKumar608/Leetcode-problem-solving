/**
 * Definition for Employee.
 * function Employee(id, importance, subordinates) {
 *     this.id = id;
 *     this.importance = importance;
 *     this.subordinates = subordinates;
 * }
 */

/**
 * @param {Employee[]} employees
 * @param {number} id
 * @return {number}
 */
var GetImportance = function (employees, id) {
  const visited = new Set()
  const map = {}
  for (let i = 0; i < employees.length; i++) {
    const { id, importance, subordinates } = employees[i]
    map[id] = {
      importance,
      subordinates,
      id,
    }
  }
  const stack = [map[id]]
  let result = 0
  while (stack.length > 0) {
    const { id, importance, subordinates } = stack.pop()
    result += importance
    visited.add(id)
    subordinates.forEach((id) => {
      if (!visited.has(id) && map[id]) {
        stack.push(map[id])
      }
    })
  }
  return result
}
