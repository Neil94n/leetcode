/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
	if (!root) return [];

  var ans = [], tmp = [root];

  while (tmp.length) {
  	var res = [], _tmp = [];

  	tmp.forEach(function(item) {
  		res.push(item.val);
  		if (item.left)
  			_tmp.push(item.left);
  		if (item.right)
  			_tmp.push(item.right);
  	});

  	ans.push(res);
  	tmp = _tmp;
  }

  return ans.reverse();

};