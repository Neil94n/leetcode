/**
 * @param {TreeNode} root
 * @return {number}
 */

var ans;

function dfs(root, depth) {
  if (!root)
    return;

  if (ans && depth >= ans)
    return;

  if (!root.left && !root.right) {
    ans = depth;
    return;
  }

  if (root.left) 
    dfs(root.left, depth + 1);

  if (root.right)
    dfs(root.right, depth + 1);
}

var minDepth = function(root) {
  ans = 0;
  dfs(root, 1);
  return ans;
};