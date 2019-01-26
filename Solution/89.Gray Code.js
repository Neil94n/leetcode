var grayCode = function(n) {
    var ans = [];
    for (var i = 0; i < (1 << n); i++) 
      ans[i] = i ^ (i >> 1);
    return ans;
  };