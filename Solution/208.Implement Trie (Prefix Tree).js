/**
 * @param {string} word
 * @return {boolean}
 * Returns if the word is in the trie.
 */
Trie.prototype.search = function(word) {
    var node = this.root;
  
    for (var i = 0, len = word.length; i < len; i++) {
      var item = word.charCodeAt(i) - 97;
      if (node.nodes[item])
        node = node.nodes[item];
      else
        return false;
    }
  
    return node.endFlag;
  };