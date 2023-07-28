//  https://leetcode.com/problems/group-anagrams

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const mapSet = {}
  const letterMap = {
    a: 0,
    b: 1,
    c: 2,
    d: 3,
    e: 4,
    f: 5,
    g: 6,
    h: 7,
    i: 8,
    j: 9,
    k: 10,
    l: 11,
    m: 12,
    n: 13,
    o: 14,
    p: 15,
    q: 16,
    r: 17,
    s: 18,
    t: 19,
    u: 20,
    v: 21,
    w: 22,
    x: 23,
    y: 24,
    z: 25,
  }
  for (let idx = 0; idx < strs.length; idx++) {
    const tempSet = {}

    for (let j = 0; j < strs[idx].length; j++) {
      const currentIdx = letterMap[strs[idx][j]]
      if (!tempSet[currentIdx]) {
        tempSet[currentIdx] = strs[idx][j]
      } else {
        tempSet[currentIdx] = tempSet[currentIdx] + strs[idx][j]
      }
    }
    let element = ''
    for (const key in tempSet) {
      element += tempSet[key]
    }
    if (!mapSet[element]) {
      mapSet[element] = [strs[idx]]
    } else {
      mapSet[element].push(strs[idx])
    }
  }
  return Object.values(mapSet)
}

// console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']))
console.log(groupAnagrams(['ddddddddddg', 'dgggggggggg']))
