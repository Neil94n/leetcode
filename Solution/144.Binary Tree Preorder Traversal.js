/**
 * @param {TreeNode} root
 * @return {number[]}
 */
function dfs(root, ans) {
    if (!root) return;
    ans.push(root.val);
  
    dfs(root.left, ans);
    dfs(root.right, ans);
  }
  
  var preorderTraversal = function(root) {
    var ans = [];
    dfs(root, ans);
    return ans;
  };