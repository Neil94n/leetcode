/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var reverseList = function(head) {
    var pre = null;
  
    while (head) {
      var next = head.next;
      head.next = pre;
      pre = head;
      head = next;
    }
  
    return pre;
  };