/**
 * @param {TreeNode} root
 * @return {number[]}
 */

function dfs(root, ans) {
    if (!root) return;
  
    dfs(root.left, ans);
  
    // 中序
    ans.push(root.val);
    
    dfs(root.right, ans);
  }
  
  var inorderTraversal = function(root) {
    var ans = [];
    dfs(root, ans);
    return ans;
  };