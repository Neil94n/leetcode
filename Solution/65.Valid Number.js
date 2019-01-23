/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {
    if (s.trim() === "")
      return false;
    return !isNaN(Number(s));
  };