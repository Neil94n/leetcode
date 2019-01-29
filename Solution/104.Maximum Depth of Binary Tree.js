/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxn;

function dfs(root, depth) {
  if (!root) {
    maxn = Math.max(maxn, depth);
    return;
  }

  dfs(root.left, depth + 1);
  dfs(root.right, depth + 1);
}

var maxDepth = function(root) {
  maxn = -1;
  dfs(root, 0);
  return maxn;
};