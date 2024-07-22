/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function (names, heights) {
  const heightsMap = {}
  let result = []
  for (let i = 0; i < names.length; i++) {
    if (!heightsMap[heights[i]]) {
      heightsMap[heights[i]] = []
    }
    heightsMap[heights[i]].push(names[i])
  }
  for (const key in heightsMap) {
    result = heightsMap[key].concat(result)
  }
  return result
}

var sortPeople = function (names, heights) {
  const people = names.map((name, index) => ({ name, height: heights[index] }))
  people.sort((a, b) => b.height - a.height)
  return people.map((person) => person.name)
}

console.log(sortPeople(['Mary', 'John', 'Emma'], [180, 165, 170]))
