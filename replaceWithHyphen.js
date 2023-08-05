function checkForLowerCaseString(str, idx) {
  return str.charCodeAt(idx) >= 97 && str.charCodeAt(idx) <= 122
}

function replaceWithHyphen(str) {
  str = str.split(/[ _-]/).join('-')
  let result = ''

  for (let i = 0; i < str.length; i++) {
    if (checkForUpperCaseString(str, i + 1) && str[i] !== '-') {
      result += `${str[i]}-`
    } else {
      result += str[i].toLowerCase()
    }
  }
  return result
}

console.log(replaceWithHyphen('myNameIsRohit'))
console.log(replaceWithHyphen('my name is Rohit'))
console.log(replaceWithHyphen('myName_is Rohit'))
console.log(replaceWithHyphen('my-Name is Rohit'))
