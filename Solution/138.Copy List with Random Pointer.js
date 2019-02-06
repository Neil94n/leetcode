/**
 * @param {RandomListNode} head
 * @return {RandomListNode}
 */
var copyRandomList = function(head) {
    if (!head)
      return null;
  
    let hash = new Map();
    let newArr = [];
    let node = head;
  
    while (node) {
      hash.set(node, newArr.length);
      newArr.push(new RandomListNode(node.label));
      node = node.next;
    }
  
    node = head;
    for (let i = 0, len = newArr.length; i < len; i++) {
      if (i !== len - 1)
        newArr[i].next = newArr[i + 1];
  
      let random = node.random;
      let index = hash.get(random);
      if (index !== undefined) {
        newArr[i].random = newArr[index];
      }
  
      node = node.next;
    }
  
    return newArr[0];
  };