/**
 * @param {TreeNode} root
 * @return {number}
 */

var ans;

function dfs(root, sum) {
  if (!root.left && !root.right) {
    ans += sum * 10 + root.val;
    return;
  }

  if (root.left)
    dfs(root.left, sum * 10 + root.val);

  if (root.right)
    dfs(root.right, sum * 10 + root.val);
}

var sumNumbers = function(root) {
  if (root === null)
    return 0;

  ans = 0;
  dfs(root, 0);
  return ans;
};