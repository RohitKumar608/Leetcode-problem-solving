// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  console.log(JSON.stringify(root))
  console.log(JSON.stringify(p))
  console.log(JSON.stringify(q))
  if (root === null) return root
  let result = []
  if (root.left.val === p.val || root.right.val === p.val) {
    result.push(root)
  }
  if (root.left.val === q.val || root.right.val === q.val) {
    result.push(root)
  }
  const ancestors = []
  const traveledTree = {}
  const stack = [root]
  while (stack.length) {
    const node = stack.shift()
    ancestors.push(node.val)
    traveledTree[node.val] = node
    // check for root node is ancestor
    if (
      (node?.left?.val === p.val && node?.right?.val === q.val) ||
      (node?.left?.val === q.val && node?.right?.val === p.val)
    ) {
      result.push(node)
    }
    //check if the p node is the ancestor
    if (
      (node.val === p.val || ancestors.includes(p.val)) &&
      (node?.left?.val === q.val || node?.right?.val === q.val)
    ) {
      ancestors.includes(p.val)
        ? result.push(traveledTree[p.val])
        : result.push(node)
    }
    //check if the q node is the ancestor
    if (
      (node.val === q.val || ancestors.includes(q.val)) &&
      (node?.left?.val === p.val || node?.right?.val === p.val)
    ) {
      ancestors.includes(q.val)
        ? result.push(traveledTree[q.val])
        : result.push(node)
    }
    if (node?.left) stack.push(node.left)
    if (node?.right) stack.push(node.right)
  }
  console.log(result)
  const minVal = Math.min(...result.map((obj) => obj.val))
  return result.find((obj) => obj.val === minVal)
}

// console.log(
//   lowestCommonAncestor(
//     {
//       val: 1,
//       left: { val: 2, left: null, right: null },
//       right: { val: 3, left: null, right: null },
//     },
//     { val: 2, left: null, right: null },
//     { val: 3, left: null, right: null }
//   )
// )

// console.log(
//   lowestCommonAncestor(
//     {
//       val: 3,
//       left: {
//         val: 5,
//         left: { val: 6, left: null, right: null },
//         right: {
//           val: 2,
//           left: { val: 7, left: null, right: null },
//           right: { val: 4, left: null, right: null },
//         },
//       },
//       right: {
//         val: 1,
//         left: { val: 0, left: null, right: null },
//         right: { val: 8, left: null, right: null },
//       },
//     },
//     {
//       val: 5,
//       left: { val: 6, left: null, right: null },
//       right: {
//         val: 2,
//         left: { val: 7, left: null, right: null },
//         right: { val: 4, left: null, right: null },
//       },
//     },
//     {
//       val: 1,
//       left: { val: 0, left: null, right: null },
//       right: { val: 8, left: null, right: null },
//     }
//   )
// )

// console.log(
//   lowestCommonAncestor(
//     {
//       val: 3,
//       left: {
//         val: 5,
//         left: { val: 6, left: null, right: null },
//         right: {
//           val: 2,
//           left: { val: 7, left: null, right: null },
//           right: { val: 4, left: null, right: null },
//         },
//       },
//       right: {
//         val: 1,
//         left: { val: 0, left: null, right: null },
//         right: { val: 8, left: null, right: null },
//       },
//     },
//     {
//       val: 5,
//       left: { val: 6, left: null, right: null },
//       right: {
//         val: 2,
//         left: { val: 7, left: null, right: null },
//         right: { val: 4, left: null, right: null },
//       },
//     },
//     { val: 4, left: null, right: null }
//   )
// )

console.log(
  lowestCommonAncestor(
    {
      val: -1,
      left: {
        val: 0,
        left: {
          val: -2,
          left: { val: 8, left: null, right: null },
          right: null,
        },
        right: { val: 4, left: null, right: null },
      },
      right: { val: 3, left: null, right: null },
    },
    { val: 3, left: null, right: null },
    { val: 8, left: null, right: null }
  )
)
