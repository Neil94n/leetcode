/**
 * @param {TreeNode} root
 * @return {boolean}
 */

var ans;

function dfs(root) {
  if (!root) return;
  
  var a = root.left ? dfs(root.left) : 0
    , b = root.right ? dfs(root.right) : 0;

  if (Math.abs(a - b) > 1) {
    ans = false;
  }

  return Math.max(a, b) + 1;
}

var isBalanced = function(root) {
  ans = true;
  dfs(root);
  return ans;
}; 