/**
 * @param {TreeLinkNode} root
 * @return {void} Do not return anything, modify tree in-place instead.
 */
var connect = function(root) {
    if (!root)
      return;
  
    if (root.left) {
      root.left.next = root.right;
  
      if (root.next)
        root.right.next = root.next.left;
    }
  
    connect(root.left);
    connect(root.right);
  };