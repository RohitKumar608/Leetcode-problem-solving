/**
 * @param {string[]} wordlist
 * @param {string[]} queries
 * @return {string[]}
 */
var spellchecker = function (wordlist, queries) {
  const vowels = {
    a: true,
    e: true,
    i: true,
    o: true,
    u: true,
    A: true,
    E: true,
    I: true,
    O: true,
    U: true,
  }
  const wordListWithAsci = new Map()
  const wordListSet = new Set(wordlist)
  for (let i = 0; i < wordlist.length; i++) {
    let wordWithAsci = ''
    const str = wordlist[i].toLowerCase()
    for (let j = 0; j < str.length; j++) {
      if (vowels[str[j]]) wordWithAsci += 0
      else wordWithAsci += str.charCodeAt(j)
    }
    if (!wordListWithAsci.has(wordWithAsci)) {
      wordListWithAsci.set(wordWithAsci, wordlist[i])
    }
    if (!wordListWithAsci.has(str)) {
      wordListWithAsci.set(str, wordlist[i])
    }
  }
  const result = []
  for (let idx = 0; idx < queries.length; idx++) {
    const query = queries[idx]
    result[idx] = ''
    const queryStr = query.toLowerCase()
    if (wordListSet.has(query)) {
      result[idx] = query
      continue
    }
    if (wordListWithAsci.has(queryStr)) {
      result[idx] = wordListWithAsci.get(queryStr)
      continue
    }
    let queryWithAsci = ''
    for (let i = 0; i < queryStr.length; i++) {
      if (vowels[queryStr[i]]) queryWithAsci += 0
      else queryWithAsci += queryStr.charCodeAt(i)
    }
    if (wordListWithAsci.has(queryWithAsci)) {
      result[idx] = wordListWithAsci.get(queryWithAsci)
    }
  }
  return result
}

// console.log(spellchecker(['zeo', 'Zuo'], ['zuo']))
// console.log(spellchecker(['yellow'], ['YellOw']))
console.log(
  spellchecker(
    ['KiTe', 'kite', 'hare', 'Hare'],
    [
      'kite',
      'Kite',
      'KiTe',
      'Hare',
      'HARE',
      'Hear',
      'hear',
      'keti',
      'keet',
      'keto',
    ]
  )
)
