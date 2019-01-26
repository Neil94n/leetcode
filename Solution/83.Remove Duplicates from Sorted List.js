/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    var ans = [];
    while (head) {
      ans.push(new ListNode(head.val));
      head = head.next;
    }
  
    if (!ans.length)
      return null;
  
    for (var i = ans.length; i--; ) {
      if (i && ans[i].val === ans[i - 1].val)
        ans.splice(i, 1);
    }
  
    for (var i = 0, len = ans.length; i < len - 1; i++)
      ans[i].next = ans[i + 1];
  
    return ans[0];
  };