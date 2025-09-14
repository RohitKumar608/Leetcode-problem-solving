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
  const wordListWithAsci = []
  const wordListSet = new Set(wordlist)
  for (let i = 0; i < wordlist.length; i++) {
    let wordWithAsci = ''
    for (let j = 0; j < wordlist[i].length; j++) {
      if (vowels[wordlist[i][j]]) wordWithAsci += 0
      else wordWithAsci += wordlist[i][j].toLowerCase().charCodeAt(0)
    }
    wordListWithAsci.push(wordWithAsci)
  }
  const result = []
  for (let idx = 0; idx < queries.length; idx++) {
    const query = queries[idx]
    result[idx] = ''
    if (wordListSet.has(query)) {
      result[idx] = query
      continue
    }
    let firstMatch = ''
    for (const word of wordlist) {
      if (word.toLowerCase() === query.toLowerCase() && firstMatch == '') {
        firstMatch = word
      }
    }

    if (firstMatch) {
      result[idx] = firstMatch
      continue
    }
    let queryWithAsci = ''
    for (let i = 0; i < query.length; i++) {
      if (vowels[query[i]]) queryWithAsci += 0
      else queryWithAsci += query[i].toLowerCase().charCodeAt(0)
    }
    const findIdx = wordListWithAsci.indexOf(queryWithAsci)
    if (findIdx >= 0) {
      result[idx] = wordlist[findIdx]
    }
  }
  return result
}

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

console.log(spellchecker(['YellOw'], ['yollow']))
