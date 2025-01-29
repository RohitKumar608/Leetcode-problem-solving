/**
 * @param {number[][]} edges
 * @return {number[]}
 */

class UnionFind {
  constructor(n) {
    this.parent = []
    for (let i = 0; i <= n; i++) {
      this.parent.push(i)
    }
    this.rank = new Array(n).fill(1)
  }
  find(p) {
    let parent = this.parent
    while (p !== parent[p]) {
      parent[p] = parent[parent[p]]
      p = parent[p]
    }
    return p
  }
  union(n1, n2) {
    const p1 = this.find(n1)
    const p2 = this.find(n2)
    if (p1 === p2) return false
    if (this.rank[p1] > this.rank[p2]) {
      this.parent[p2] = p1
      this.rank[p1] += this.rank[p2]
    } else {
      this.parent[p1] = p2
      this.rank[p2] += this.rank[p1]
    }
    return true
  }
}

var findRedundantConnection = function (edges) {
  const uf = new UnionFind(edges.length)
  for (const [src, dst] of edges) {
    if (!uf.union(src, dst)) {
      return [src, dst]
    }
  }
}

console.log(
  findRedundantConnection([
    [1, 2],
    [2, 3],
    [3, 4],
    [1, 4],
    [1, 5],
  ])
)

// console.log(
//   findRedundantConnection([
//     [1, 2],
//     [1, 3],
//     [2, 3],
//   ])
// )

// console.log(
//   findRedundantConnection([
//     [1, 3],
//     [3, 4],
//     [1, 5],
//     [3, 5],
//     [2, 3],
//   ])
// )

// console.log(
//   findRedundantConnection([
//     [1, 4],
//     [3, 4],
//     [1, 3],
//     [1, 2],
//     [4, 5],
//   ])
// )
