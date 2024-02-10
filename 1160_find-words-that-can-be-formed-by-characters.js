/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function (words, chars) {
  let result = 0
  const map = {}
  for (const char of chars) {
    map[char] = (map[char] || 0) + 1
  }

  for (const word of words) {
    const tempObj = { ...map }
    let isMappedWords = true
    for (const char of word) {
      if (tempObj[char]) {
        tempObj[char]--
      } else {
        isMappedWords = false
      }
    }
    if (isMappedWords) {
      result += word.length
    }
  }
  return result
}

console.log(
  countCharacters(
    [
      'dyiclysmffuhibgfvapygkorkqllqlvokosagyelotobicwcmebnpznjbirzrzsrtzjxhsfpiwyfhzyonmuabtlwin',
      'ndqeyhhcquplmznwslewjzuyfgklssvkqxmqjpwhrshycmvrb',
      'ulrrbpspyudncdlbkxkrqpivfftrggemkpyjl',
      'boygirdlggnh',
      'xmqohbyqwagkjzpyawsydmdaattthmuvjbzwpyopyafphx',
      'nulvimegcsiwvhwuiyednoxpugfeimnnyeoczuzxgxbqjvegcxeqnjbwnbvowastqhojepisusvsidhqmszbrnynkyop',
      'hiefuovybkpgzygprmndrkyspoiyapdwkxebgsmodhzpx',
      'juldqdzeskpffaoqcyyxiqqowsalqumddcufhouhrskozhlmobiwzxnhdkidr',
      'lnnvsdcrvzfmrvurucrzlfyigcycffpiuoo',
      'oxgaskztzroxuntiwlfyufddl',
      'tfspedteabxatkaypitjfkhkkigdwdkctqbczcugripkgcyfezpuklfqfcsccboarbfbjfrkxp',
      'qnagrpfzlyrouolqquytwnwnsqnmuzphne',
      'eeilfdaookieawrrbvtnqfzcricvhpiv',
      'sisvsjzyrbdsjcwwygdnxcjhzhsxhpceqz',
      'yhouqhjevqxtecomahbwoptzlkyvjexhzcbccusbjjdgcfzlkoqwiwue',
      'hwxxighzvceaplsycajkhynkhzkwkouszwaiuzqcleyflqrxgjsvlegvupzqijbornbfwpefhxekgpuvgiyeudhncv',
      'cpwcjwgbcquirnsazumgjjcltitmeyfaudbnbqhflvecjsupjmgwfbjo',
      'teyygdmmyadppuopvqdodaczob',
      'qaeowuwqsqffvibrtxnjnzvzuuonrkwpysyxvkijemmpdmtnqxwekbpfzs',
      'qqxpxpmemkldghbmbyxpkwgkaykaerhmwwjonrhcsubchs',
    ],
    'usdruypficfbpfbivlrhutcgvyjenlxzeovdyjtgvvfdjzcmikjraspdfp'
  )
)
