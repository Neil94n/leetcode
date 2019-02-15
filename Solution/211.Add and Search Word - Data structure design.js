/**
 * @param {string} word
 * @return {boolean}
 * Returns if the word is in the data structure. A word could
 * contain the dot character '.' to represent any one letter.
 */
WordDictionary.prototype.search = function(word) {
    var node = this.startNode;
    var isFound = false;
  
    dfs(node, 0);
  
    function dfs(node, index) {
      if (isFound)
        return;
  
      if (index === word.length) {
        isFound = node.endFlag;
        return;
      }
  
      if (word[index] === '.') {
        for (var i = 0; i < 26; i++) {
          if (node.nodes[i])
            dfs(node.nodes[i], index + 1);
        }
      } else {
        var item = word.charCodeAt(index) - 97;
        if (node.nodes[item])
          dfs(node.nodes[item], index + 1);
      }
    }
  
    return isFound;
  };