/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    var ans;
    ans = [];
    dfs('', 0, 0, n);
  
  function dfs(s, left, right, n) {
    if (left === n && right === n) {
      ans.push(s);
      return;
    }
  
    if (left + 1 <= n)
      dfs(s + '(', left + 1, right, n);
  
    if (right + 1 <= n && right + 1 <= left)
      dfs(s + ')', left, right + 1, n);
  
  }
     
    return ans;
  };