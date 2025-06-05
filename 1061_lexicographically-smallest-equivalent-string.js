/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} baseStr
 * @return {string}
 */

var smallestEquivalentString = function (s1, s2, baseStr) {
  const map = {}
  for (let i = 0; i < s1.length; i++) {
    const a = s1[i]
    const b = s2[i]
    if (!map[a]) map[a] = []
    if (!map[b]) map[b] = []
    map[a].push(b)
    map[b].push(a)
  }
  for (const key in map) {
    for (const key2 in map) {
      if (key !== key2 && map[key].includes(key2)) {
        map[key] = [...new Set([...map[key], ...map[key2]])]
      }
    }
  }
  for (const key in map) {
    for (const key2 in map) {
      if (key !== key2 && map[key].includes(key2)) {
        map[key] = [...new Set([...map[key], ...map[key2]])]
      }
    }
  }
  for (const key in map) {
    map[key].sort()
  }
  let result = ''
  for (let i = 0; i < baseStr.length; i++) {
    if (map[baseStr[i]]) {
      result += map[baseStr[i]][0]
    } else {
      result += baseStr[i]
    }
  }
  return result
}

var smallestEquivalentString = function (s1, s2, baseStr) {
  const state = Array.from({ length: 26 }, (_, i) => i)
  const find = (x) => {
    if (state[x] !== x) state[x] = find(state[x])
    return state[x]
  }
  const union = (x, y) => {
    let fx = find(x)
    let fy = find(y)
    if (fx === fy) return
    if (fx < fy) state[fy] = fx
    else state[fx] = fy
  }
  for (let i = 0; i < s1.length; i++) {
    const c1 = s1.charCodeAt(i) - 97
    const c2 = s2.charCodeAt(i) - 97
    union(c1, c2)
  }
  let ans = ''
  for (const c of baseStr) {
    const charNum = c.charCodeAt() - 97
    const char = String.fromCharCode(find(charNum) + 97)
    ans += char
  }
  return ans
}

console.log(smallestEquivalentString('leetcode', 'programs', 'sourcecode'))
