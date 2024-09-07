/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSubPath = function (head, root) {
  if (!head) return true
  if (!root) return false

  const checkMatch = (root, head) => {
    if (!head) return true
    if (!root) return false
    if (root.val !== head.val) return false
    return checkMatch(root.left, head.next) || checkMatch(root.right, head.next)
  }

  const traverse = (root) => {
    if (!root) return false
    if (checkMatch(root, head)) return true
    return traverse(root.left) || traverse(root.right)
  }

  return traverse(root)
}

// console.log(
//   isSubPath(
//     { val: 4, next: { val: 2, next: { val: 8, next: null } } },
//     {
//       val: 1,
//       left: {
//         val: 4,
//         left: null,
//         right: {
//           val: 2,
//           left: { val: 1, left: null, right: null },
//           right: null,
//         },
//       },
//       right: {
//         val: 4,
//         left: {
//           val: 2,
//           left: { val: 6, left: null, right: null },
//           right: {
//             val: 8,
//             left: { val: 1, left: null, right: null },
//             right: { val: 3, left: null, right: null },
//           },
//         },
//         right: null,
//       },
//     }
//   )
// )
// console.log(
//   isSubPath(
//     {
//       val: 1,
//       next: { val: 4, next: { val: 2, next: { val: 6, next: null } } },
//     },
//     {
//       val: 1,
//       left: {
//         val: 4,
//         left: null,
//         right: {
//           val: 2,
//           left: { val: 1, left: null, right: null },
//           right: null,
//         },
//       },
//       right: {
//         val: 4,
//         left: {
//           val: 2,
//           left: { val: 6, left: null, right: null },
//           right: {
//             val: 8,
//             left: { val: 1, left: null, right: null },
//             right: { val: 3, left: null, right: null },
//           },
//         },
//         right: null,
//       },
//     }
//   )
// )

console.log(
  isSubPath(
    { val: 1, next: { val: 10, next: null } },
    {
      val: 1,
      left: null,
      right: {
        val: 1,
        left: {
          val: 10,
          left: { val: 9, left: null, right: null },
          right: null,
        },
        right: { val: 1, left: null, right: null },
      },
    }
  )
)
