// https://leetcode.com/problems/maximum-depth-of-n-ary-tree/description/

/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */
var maxDepth = function (root) {
  if (root === null) return 0
  if (root?.children?.length === 0) return 1
  const maxVal = root.children.map((child) => maxDepth(child))
  return 1 + Math.max(...maxVal)
}
