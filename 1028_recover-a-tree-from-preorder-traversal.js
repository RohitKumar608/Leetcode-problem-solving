function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

/**
 * @param {string} traversal
 * @return {TreeNode}
 */
var recoverFromPreorder = function (traversal) {
  const stack = []
  let countDash = 0
  let number = ''
  for (let i = 0; i < traversal.length; i++) {
    if (traversal[i] === '-') {
      countDash++
    } else {
      number += traversal[i]
      if (traversal[i + 1] === '-' || i === traversal.length - 1) {
        const node = new TreeNode(parseInt(number))
        if (countDash === 0) {
          stack.push(node)
        } else {
          while (countDash < stack.length) {
            stack.pop()
          }
          const parent = stack[stack.length - 1]
          if (parent.left) {
            parent.right = node
          } else {
            parent.left = node
          }
          stack.push(node)
        }
        countDash = 0
        number = ''
      }
    }
  }
  return stack[0]
}

console.log(recoverFromPreorder('1-2--3---4-5--6---7'))
