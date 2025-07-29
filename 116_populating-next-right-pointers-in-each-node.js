/**
 * // Definition for a _Node.
 * function _Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {_Node} root
 * @return {_Node}
 */
var connect = function (root) {
  const stack = [root]
  while (stack.length > 0) {
    const len = stack.length
    let prevNode = null
    for (let i = 0; i < len; i++) {
      const root = stack.shift()
      if (root?.left) stack.push(root.left)
      if (root?.right) stack.push(root.right)
      if (i > 0) prevNode.next = root
      prevNode = root
    }
  }
  return root
}

console.log(
  connect({
    val: 1,
    left: {
      val: 2,
      left: { val: 4, left: null, right: null, next: null },
      right: { val: 5, left: null, right: null, next: null },
      next: null,
    },
    right: {
      val: 3,
      left: { val: 6, left: null, right: null, next: null },
      right: { val: 7, left: null, right: null, next: null },
      next: null,
    },
    next: null,
  })
)
