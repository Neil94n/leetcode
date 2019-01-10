/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var start = 0;
    var max = 0;
    var visitedCharByPosition = {};
    for (var position =0; position < s.length; position++){
        var nextChar = s[position];
     if (nextChar in visitedCharByPosition && visitedCharByPosition[nextChar] >= start) {
            start = visitedCharByPosition[nextChar] + 1;
            visitedCharByPosition[nextChar] = position;
        } else {
            visitedCharByPosition[nextChar] = position;
            max = Math.max(max, position + 1 - start);
        }
    }
    return max;
};