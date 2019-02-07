/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    flag = null;
  
    dfs(head);
  
    return flag;
  };
  
  function dfs(node) {
    if (flag)
      return;
  
    if (node === null)
      return;
  
    if (node.flag) {
      flag = node;
      return;
    }
  
    if (node.next === null)
      return;
  
    node.flag = true;
  
    dfs(node.next);
  }