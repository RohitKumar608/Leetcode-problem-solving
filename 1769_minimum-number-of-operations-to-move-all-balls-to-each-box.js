/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function (boxes) {
  const answer = new Array(boxes.length)
  let leftBag = 0,
    leftCount = 0,
    rightBag = 0,
    rightCount = 0

  for (let i = 0; i < boxes.length; i++) {
    if (boxes[i - 1] === '1') leftBag += 1
    leftCount += leftBag
    answer[i] = leftCount
  }

  for (let i = boxes.length - 1; i >= 0; i--) {
    if (boxes[i + 1] === '1') rightBag += 1
    rightCount += rightBag
    answer[i] += rightCount
  }

  return answer
}
